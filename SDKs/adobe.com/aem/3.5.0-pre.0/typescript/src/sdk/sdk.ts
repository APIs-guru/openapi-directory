import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { ParamsSerializerOptions } from "axios";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";
import { Security } from "./models/shared";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "https://adobe.com/",
  "http://adobe.local",
] as const;

export function WithServerURL(
  serverURL: string,
  params?: Map<string, string>
): OptsFunc {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk.serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk.defaultClient = client;
  };
}

export function WithSecurity(security: Security): OptsFunc {
  if (!(security instanceof utils.SpeakeasyBase)) {
    security = new Security(security);
  }
  return (sdk: SDK) => {
    sdk.security = security;
  };
}


export class SDK {
  defaultClient?: AxiosInstance;
  securityClient?: AxiosInstance;
  security?: any;
  serverURL: string;

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this.serverURL == "") {
      this.serverURL = Servers[0];
    }

    if (!this.defaultClient) {
      this.defaultClient = axios.create({ baseURL: this.serverURL });
    }

    if (!this.securityClient) {
      if (this.security) {
        this.securityClient = CreateSecurityClient(
          this.defaultClient,
          this.security
        );
      } else {
        this.securityClient = this.defaultClient;
      }
    }
  }
  
  DeleteAgent(
    req: operations.DeleteAgentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteAgentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteAgentRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/etc/replication/agents.{runmode}/{name}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteAgentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  DeleteNode(
    req: operations.DeleteNodeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteNodeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteNodeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{path}/{name}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteNodeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  GetAemHealthCheck(
    req: operations.GetAemHealthCheckRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAemHealthCheckResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAemHealthCheckRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/system/health";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAemHealthCheckResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.getAemHealthCheckDefaultApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  GetAemProductInfo(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetAemProductInfoResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/system/console/status-productinfo.json";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAemProductInfoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.getAemProductInfoDefaultApplicationJsonStrings = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  GetAgent(
    req: operations.GetAgentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAgentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAgentRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/etc/replication/agents.{runmode}/{name}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAgentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  GetAgents(
    req: operations.GetAgentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAgentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAgentsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/etc/replication/agents.{runmode}.-1.json", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAgentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.getAgentsDefaultApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  GetAuthorizableKeystore(
    req: operations.GetAuthorizableKeystoreRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAuthorizableKeystoreResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAuthorizableKeystoreRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{intermediatePath}/{authorizableId}.ks.json", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAuthorizableKeystoreResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `text/plain`)) {
                res.getAuthorizableKeystoreDefaultTextPlainString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  GetConfigMgr(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetConfigMgrResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/system/console/configMgr";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetConfigMgrResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `text/xml`)) {
                res.getConfigMgr200TextXmlString = JSON.stringify(httpRes?.data);
            }
            break;
          case (httpRes.status >= 500 && httpRes.status < 600):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  GetCrxdeStatus(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetCrxdeStatusResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/crx/server/crx.default/jcr:root/.1.json";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetCrxdeStatusResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `plain/text`)) {
                res.getCrxdeStatus200PlainTextString = JSON.stringify(httpRes?.data);
            }
            break;
          case 404:
            if (MatchContentType(contentType, `plain/text`)) {
                res.getCrxdeStatus404PlainTextString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  GetInstallStatus(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstallStatusResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/crx/packmgr/installstatus.jsp";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetInstallStatusResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.installStatus = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.getInstallStatusDefaultApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  GetKeystore(
    req: operations.GetKeystoreRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetKeystoreResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetKeystoreRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{intermediatePath}/{authorizableId}/keystore/store.p12", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetKeystoreResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/octet-stream`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getKeystoreDefaultApplicationOctetStreamBinaryString = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  GetLoginPage(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetLoginPageResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/libs/granite/core/content/login.html";
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetLoginPageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `text/html`)) {
                res.getLoginPageDefaultTextHtmlString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  GetNode(
    req: operations.GetNodeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNodeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNodeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{path}/{name}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetNodeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  GetPackage(
    req: operations.GetPackageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPackageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPackageRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/etc/packages/{group}/{name}-{version}.zip", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetPackageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/octet-stream`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getPackageDefaultApplicationOctetStreamBinaryString = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  GetPackageFilter(
    req: operations.GetPackageFilterRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPackageFilterResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPackageFilterRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/etc/packages/{group}/{name}-{version}.zip/jcr:content/vlt:definition/filter.tidy.2.json", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetPackageFilterResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.getPackageFilterDefaultApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  GetPackageManagerServlet(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetPackageManagerServletResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/crx/packmgr/service/script.html";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetPackageManagerServletResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 404:
            if (MatchContentType(contentType, `text/html`)) {
                res.getPackageManagerServlet404TextHtmlString = JSON.stringify(httpRes?.data);
            }
            break;
          case 405:
            if (MatchContentType(contentType, `text/html`)) {
                res.getPackageManagerServlet405TextHtmlString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  GetQuery(
    req: operations.GetQueryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetQueryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetQueryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/bin/querybuilder.json";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetQueryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.getQueryDefaultApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  GetTruststore(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetTruststoreResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/etc/truststore/truststore.p12";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetTruststoreResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/octet-stream`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.getTruststoreDefaultApplicationOctetStreamBinaryString = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  GetTruststoreInfo(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetTruststoreInfoResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/libs/granite/security/truststore.json";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetTruststoreInfoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.truststoreInfo = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.getTruststoreInfoDefaultApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  PostAgent(
    req: operations.PostAgentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAgentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAgentRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/etc/replication/agents.{runmode}/{name}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .post(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostAgentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  PostAuthorizableKeystore(
    req: operations.PostAuthorizableKeystoreRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAuthorizableKeystoreResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAuthorizableKeystoreRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{intermediatePath}/{authorizableId}.ks.html", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostAuthorizableKeystoreResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `text/plain`)) {
                res.postAuthorizableKeystoreDefaultTextPlainString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  PostAuthorizables(
    req: operations.PostAuthorizablesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAuthorizablesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAuthorizablesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/libs/granite/security/post/authorizables";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .post(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostAuthorizablesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `text/html`)) {
                res.postAuthorizablesDefaultTextHtmlString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  PostBundle(
    req: operations.PostBundleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostBundleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostBundleRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/system/console/bundles/{name}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .post(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostBundleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  PostConfigAdobeGraniteSamlAuthenticationHandler(
    req: operations.PostConfigAdobeGraniteSamlAuthenticationHandlerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostConfigAdobeGraniteSamlAuthenticationHandlerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostConfigAdobeGraniteSamlAuthenticationHandlerRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/apps/system/config/com.adobe.granite.auth.saml.SamlAuthenticationHandler.config";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .post(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostConfigAdobeGraniteSamlAuthenticationHandlerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  PostConfigAemHealthCheckServlet(
    req: operations.PostConfigAemHealthCheckServletRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostConfigAemHealthCheckServletResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostConfigAemHealthCheckServletRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/apps/system/config/com.shinesolutions.healthcheck.hc.impl.ActiveBundleHealthCheck";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .post(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostConfigAemHealthCheckServletResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  PostConfigAemPasswordReset(
    req: operations.PostConfigAemPasswordResetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostConfigAemPasswordResetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostConfigAemPasswordResetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/apps/system/config/com.shinesolutions.aem.passwordreset.Activator";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .post(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostConfigAemPasswordResetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  PostConfigApacheFelixJettyBasedHttpService(
    req: operations.PostConfigApacheFelixJettyBasedHttpServiceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostConfigApacheFelixJettyBasedHttpServiceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostConfigApacheFelixJettyBasedHttpServiceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/apps/system/config/org.apache.felix.http";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .post(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostConfigApacheFelixJettyBasedHttpServiceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  PostConfigApacheHttpComponentsProxyConfiguration(
    req: operations.PostConfigApacheHttpComponentsProxyConfigurationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostConfigApacheHttpComponentsProxyConfigurationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostConfigApacheHttpComponentsProxyConfigurationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/apps/system/config/org.apache.http.proxyconfigurator.config";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .post(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostConfigApacheHttpComponentsProxyConfigurationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  PostConfigApacheSlingDavExServlet(
    req: operations.PostConfigApacheSlingDavExServletRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostConfigApacheSlingDavExServletResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostConfigApacheSlingDavExServletRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/apps/system/config/org.apache.sling.jcr.davex.impl.servlets.SlingDavExServlet";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .post(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostConfigApacheSlingDavExServletResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  PostConfigApacheSlingGetServlet(
    req: operations.PostConfigApacheSlingGetServletRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostConfigApacheSlingGetServletResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostConfigApacheSlingGetServletRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/apps/system/config/org.apache.sling.servlets.get.DefaultGetServlet";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .post(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostConfigApacheSlingGetServletResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  PostConfigApacheSlingReferrerFilter(
    req: operations.PostConfigApacheSlingReferrerFilterRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostConfigApacheSlingReferrerFilterResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostConfigApacheSlingReferrerFilterRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/apps/system/config/org.apache.sling.security.impl.ReferrerFilter";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .post(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostConfigApacheSlingReferrerFilterResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  PostConfigProperty(
    req: operations.PostConfigPropertyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostConfigPropertyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostConfigPropertyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/apps/system/config/{configNodeName}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostConfigPropertyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  PostCqActions(
    req: operations.PostCqActionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostCqActionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostCqActionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/.cqactions.html";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .post(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostCqActionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  PostJmxRepository(
    req: operations.PostJmxRepositoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostJmxRepositoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostJmxRepositoryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/system/console/jmx/com.adobe.granite:type=Repository/op/{action}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostJmxRepositoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  PostNode(
    req: operations.PostNodeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostNodeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostNodeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{path}/{name}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostNodeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  PostNodeRw(
    req: operations.PostNodeRwRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostNodeRwResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostNodeRwRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{path}/{name}.rw.html", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .post(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostNodeRwResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  PostPackageService(
    req: operations.PostPackageServiceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPackageServiceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPackageServiceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/crx/packmgr/service.jsp";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .post(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostPackageServiceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `text/xml`)) {
                res.postPackageServiceDefaultTextXmlString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  PostPackageServiceJson(
    req: operations.PostPackageServiceJsonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPackageServiceJsonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPackageServiceJsonRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/crx/packmgr/service/.json/{path}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostPackageServiceJsonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.postPackageServiceJsonDefaultApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  PostPackageUpdate(
    req: operations.PostPackageUpdateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPackageUpdateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPackageUpdateRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/crx/packmgr/update.jsp";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .post(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostPackageUpdateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.postPackageUpdateDefaultApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  PostPath(
    req: operations.PostPathRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPathResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPathRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{path}/", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .post(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostPathResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  PostQuery(
    req: operations.PostQueryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostQueryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostQueryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/bin/querybuilder.json";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .post(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostQueryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.postQueryDefaultApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  PostSamlConfiguration(
    req: operations.PostSamlConfigurationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostSamlConfigurationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostSamlConfigurationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/system/console/configMgr/com.adobe.granite.auth.saml.SamlAuthenticationHandler";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .post(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostSamlConfigurationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 302:
            if (MatchContentType(contentType, `text/plain`)) {
                res.postSamlConfiguration302TextPlainString = JSON.stringify(httpRes?.data);
            }
            break;
          default:
            if (MatchContentType(contentType, `text/plain`)) {
                res.postSamlConfigurationDefaultTextPlainString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  PostSetPassword(
    req: operations.PostSetPasswordRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostSetPasswordResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostSetPasswordRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/crx/explorer/ui/setpassword.jsp";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .post(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostSetPasswordResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `text/plain`)) {
                res.postSetPasswordDefaultTextPlainString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  PostTreeActivation(
    req: operations.PostTreeActivationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostTreeActivationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostTreeActivationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/etc/replication/treeactivation.html";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .post(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostTreeActivationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  PostTruststore(
    req: operations.PostTruststoreRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostTruststoreResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostTruststoreRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/libs/granite/security/post/truststore";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostTruststoreResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `text/plain`)) {
                res.postTruststoreDefaultTextPlainString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  PostTruststorePkcs12(
    req: operations.PostTruststorePkcs12Request,
    config?: AxiosRequestConfig
  ): Promise<operations.PostTruststorePkcs12Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostTruststorePkcs12Request(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/etc/truststore";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostTruststorePkcs12Response = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `text/plain`)) {
                res.postTruststorePkcs12DefaultTextPlainString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  SslSetup(
    req: operations.SslSetupRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SslSetupResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SslSetupRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/libs/granite/security/post/sslSetup.html";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.SslSetupResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          default:
            if (MatchContentType(contentType, `text/plain`)) {
                res.sslSetupDefaultTextPlainString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}

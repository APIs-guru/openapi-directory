import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
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
    sdk._serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk._defaultClient = client;
  };
}

export function WithSecurity(security: Security): OptsFunc {
  if (!(security instanceof utils.SpeakeasyBase)) {
    security = new Security(security);
  }
  return (sdk: SDK) => {
    sdk._security = security;
  };
}


export class SDK {

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _security?: Security;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this._serverURL == "") {
      this._serverURL = ServerList[0];
    }

    if (!this._defaultClient) {
      this._defaultClient = axios.create({ baseURL: this._serverURL });
    }

    if (!this._securityClient) {
      if (this._security) {
        this._securityClient = utils.CreateSecurityClient(
          this._defaultClient,
          this._security
        );
      } else {
        this._securityClient = this._defaultClient;
      }
    }
    
  }
  
  deleteAgent(
    req: operations.DeleteAgentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteAgentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteAgentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/etc/replication/agents.{runmode}/{name}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteAgentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  deleteNode(
    req: operations.DeleteNodeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteNodeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteNodeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{path}/{name}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteNodeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getAemHealthCheck(
    req: operations.GetAemHealthCheckRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAemHealthCheckResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAemHealthCheckRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/system/health";
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAemHealthCheckResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getAemHealthCheckDefaultApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getAemProductInfo(
    config?: AxiosRequestConfig
  ): Promise<operations.GetAemProductInfoResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/system/console/status-productinfo.json";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAemProductInfoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getAemProductInfoDefaultApplicationJsonStrings = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getAgent(
    req: operations.GetAgentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAgentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAgentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/etc/replication/agents.{runmode}/{name}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAgentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getAgents(
    req: operations.GetAgentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAgentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAgentsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/etc/replication/agents.{runmode}.-1.json", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAgentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getAgentsDefaultApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getAuthorizableKeystore(
    req: operations.GetAuthorizableKeystoreRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAuthorizableKeystoreResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAuthorizableKeystoreRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{intermediatePath}/{authorizableId}.ks.json", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAuthorizableKeystoreResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                res.getAuthorizableKeystoreDefaultTextPlainString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getConfigMgr(
    config?: AxiosRequestConfig
  ): Promise<operations.GetConfigMgrResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/system/console/configMgr";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetConfigMgrResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/xml`)) {
                res.getConfigMgr200TextXmlString = JSON.stringify(httpRes?.data);
            }
            break;
          case (httpRes?.status >= 500 && httpRes?.status < 600):
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getCrxdeStatus(
    config?: AxiosRequestConfig
  ): Promise<operations.GetCrxdeStatusResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/crx/server/crx.default/jcr:root/.1.json";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetCrxdeStatusResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `plain/text`)) {
                res.getCrxdeStatus200PlainTextString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `plain/text`)) {
                res.getCrxdeStatus404PlainTextString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getInstallStatus(
    config?: AxiosRequestConfig
  ): Promise<operations.GetInstallStatusResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/crx/packmgr/installstatus.jsp";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetInstallStatusResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.installStatus = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getInstallStatusDefaultApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getKeystore(
    req: operations.GetKeystoreRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetKeystoreResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetKeystoreRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{intermediatePath}/{authorizableId}/keystore/store.p12", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetKeystoreResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/octet-stream`)) {
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

  
  getLoginPage(
    config?: AxiosRequestConfig
  ): Promise<operations.GetLoginPageResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/libs/granite/core/content/login.html";
    
    const client: AxiosInstance = this._defaultClient!;
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetLoginPageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `text/html`)) {
                res.getLoginPageDefaultTextHtmlString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getNode(
    req: operations.GetNodeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetNodeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetNodeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{path}/{name}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetNodeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getPackage(
    req: operations.GetPackageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPackageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPackageRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/etc/packages/{group}/{name}-{version}.zip", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPackageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/octet-stream`)) {
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

  
  getPackageFilter(
    req: operations.GetPackageFilterRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPackageFilterResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPackageFilterRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/etc/packages/{group}/{name}-{version}.zip/jcr:content/vlt:definition/filter.tidy.2.json", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPackageFilterResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getPackageFilterDefaultApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getPackageManagerServlet(
    config?: AxiosRequestConfig
  ): Promise<operations.GetPackageManagerServletResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/crx/packmgr/service/script.html";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPackageManagerServletResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `text/html`)) {
                res.getPackageManagerServlet404TextHtmlString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 405:
            if (utils.MatchContentType(contentType, `text/html`)) {
                res.getPackageManagerServlet405TextHtmlString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getQuery(
    req: operations.GetQueryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetQueryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetQueryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/bin/querybuilder.json";
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetQueryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getQueryDefaultApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  getTruststore(
    config?: AxiosRequestConfig
  ): Promise<operations.GetTruststoreResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/etc/truststore/truststore.p12";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTruststoreResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/octet-stream`)) {
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

  
  getTruststoreInfo(
    config?: AxiosRequestConfig
  ): Promise<operations.GetTruststoreInfoResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/libs/granite/security/truststore.json";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTruststoreInfoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.truststoreInfo = httpRes?.data;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getTruststoreInfoDefaultApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postAgent(
    req: operations.PostAgentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAgentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAgentRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/etc/replication/agents.{runmode}/{name}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "post",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostAgentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postAuthorizableKeystore(
    req: operations.PostAuthorizableKeystoreRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAuthorizableKeystoreResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAuthorizableKeystoreRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{intermediatePath}/{authorizableId}.ks.html", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostAuthorizableKeystoreResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                res.postAuthorizableKeystoreDefaultTextPlainString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postAuthorizables(
    req: operations.PostAuthorizablesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAuthorizablesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAuthorizablesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/libs/granite/security/post/authorizables";
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "post",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostAuthorizablesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `text/html`)) {
                res.postAuthorizablesDefaultTextHtmlString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postBundle(
    req: operations.PostBundleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostBundleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostBundleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/system/console/bundles/{name}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "post",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostBundleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postConfigAdobeGraniteSamlAuthenticationHandler(
    req: operations.PostConfigAdobeGraniteSamlAuthenticationHandlerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostConfigAdobeGraniteSamlAuthenticationHandlerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostConfigAdobeGraniteSamlAuthenticationHandlerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/apps/system/config/com.adobe.granite.auth.saml.SamlAuthenticationHandler.config";
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "post",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostConfigAdobeGraniteSamlAuthenticationHandlerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postConfigAemHealthCheckServlet(
    req: operations.PostConfigAemHealthCheckServletRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostConfigAemHealthCheckServletResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostConfigAemHealthCheckServletRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/apps/system/config/com.shinesolutions.healthcheck.hc.impl.ActiveBundleHealthCheck";
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "post",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostConfigAemHealthCheckServletResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postConfigAemPasswordReset(
    req: operations.PostConfigAemPasswordResetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostConfigAemPasswordResetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostConfigAemPasswordResetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/apps/system/config/com.shinesolutions.aem.passwordreset.Activator";
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "post",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostConfigAemPasswordResetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postConfigApacheFelixJettyBasedHttpService(
    req: operations.PostConfigApacheFelixJettyBasedHttpServiceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostConfigApacheFelixJettyBasedHttpServiceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostConfigApacheFelixJettyBasedHttpServiceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/apps/system/config/org.apache.felix.http";
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "post",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostConfigApacheFelixJettyBasedHttpServiceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postConfigApacheHttpComponentsProxyConfiguration(
    req: operations.PostConfigApacheHttpComponentsProxyConfigurationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostConfigApacheHttpComponentsProxyConfigurationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostConfigApacheHttpComponentsProxyConfigurationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/apps/system/config/org.apache.http.proxyconfigurator.config";
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "post",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostConfigApacheHttpComponentsProxyConfigurationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postConfigApacheSlingDavExServlet(
    req: operations.PostConfigApacheSlingDavExServletRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostConfigApacheSlingDavExServletResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostConfigApacheSlingDavExServletRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/apps/system/config/org.apache.sling.jcr.davex.impl.servlets.SlingDavExServlet";
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "post",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostConfigApacheSlingDavExServletResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postConfigApacheSlingGetServlet(
    req: operations.PostConfigApacheSlingGetServletRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostConfigApacheSlingGetServletResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostConfigApacheSlingGetServletRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/apps/system/config/org.apache.sling.servlets.get.DefaultGetServlet";
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "post",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostConfigApacheSlingGetServletResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postConfigApacheSlingReferrerFilter(
    req: operations.PostConfigApacheSlingReferrerFilterRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostConfigApacheSlingReferrerFilterResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostConfigApacheSlingReferrerFilterRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/apps/system/config/org.apache.sling.security.impl.ReferrerFilter";
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "post",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostConfigApacheSlingReferrerFilterResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postConfigProperty(
    req: operations.PostConfigPropertyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostConfigPropertyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostConfigPropertyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/apps/system/config/{configNodeName}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostConfigPropertyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postCqActions(
    req: operations.PostCqActionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostCqActionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostCqActionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/.cqactions.html";
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "post",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostCqActionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postJmxRepository(
    req: operations.PostJmxRepositoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostJmxRepositoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostJmxRepositoryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/system/console/jmx/com.adobe.granite:type=Repository/op/{action}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "post",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostJmxRepositoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postNode(
    req: operations.PostNodeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostNodeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostNodeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{path}/{name}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostNodeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postNodeRw(
    req: operations.PostNodeRwRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostNodeRwResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostNodeRwRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{path}/{name}.rw.html", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "post",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostNodeRwResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postPackageService(
    req: operations.PostPackageServiceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPackageServiceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPackageServiceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/crx/packmgr/service.jsp";
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "post",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPackageServiceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `text/xml`)) {
                res.postPackageServiceDefaultTextXmlString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postPackageServiceJson(
    req: operations.PostPackageServiceJsonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPackageServiceJsonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPackageServiceJsonRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/crx/packmgr/service/.json/{path}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPackageServiceJsonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postPackageServiceJsonDefaultApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postPackageUpdate(
    req: operations.PostPackageUpdateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPackageUpdateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPackageUpdateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/crx/packmgr/update.jsp";
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "post",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPackageUpdateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postPackageUpdateDefaultApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postPath(
    req: operations.PostPathRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostPathResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostPathRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/{path}/", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "post",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostPathResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postQuery(
    req: operations.PostQueryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostQueryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostQueryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/bin/querybuilder.json";
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "post",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostQueryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postQueryDefaultApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postSamlConfiguration(
    req: operations.PostSamlConfigurationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostSamlConfigurationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostSamlConfigurationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/system/console/configMgr/com.adobe.granite.auth.saml.SamlAuthenticationHandler";
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "post",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostSamlConfigurationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case httpRes?.status == 302:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                res.postSamlConfiguration302TextPlainString = JSON.stringify(httpRes?.data);
            }
            break;
          default:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                res.postSamlConfigurationDefaultTextPlainString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postSetPassword(
    req: operations.PostSetPasswordRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostSetPasswordResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostSetPasswordRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/crx/explorer/ui/setpassword.jsp";
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "post",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostSetPasswordResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                res.postSetPasswordDefaultTextPlainString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postTreeActivation(
    req: operations.PostTreeActivationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostTreeActivationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostTreeActivationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/etc/replication/treeactivation.html";
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "post",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostTreeActivationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postTruststore(
    req: operations.PostTruststoreRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostTruststoreResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostTruststoreRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/libs/granite/security/post/truststore";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostTruststoreResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                res.postTruststoreDefaultTextPlainString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  postTruststorePkcs12(
    req: operations.PostTruststorePkcs12Request,
    config?: AxiosRequestConfig
  ): Promise<operations.PostTruststorePkcs12Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostTruststorePkcs12Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/etc/truststore";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostTruststorePkcs12Response = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                res.postTruststorePkcs12DefaultTextPlainString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  sslSetup(
    req: operations.SslSetupRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SslSetupResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SslSetupRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/libs/granite/security/post/sslSetup.html";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SslSetupResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.MatchContentType(contentType, `text/plain`)) {
                res.sslSetupDefaultTextPlainString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}

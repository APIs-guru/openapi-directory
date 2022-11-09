import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { ParamsSerializerOptions } from "axios";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import {GetHeadersFromRequest} from "../internal/utils/headers";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";
import { Security } from "./models/shared";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "http://app-integrations.{region}.amazonaws.com",
  "https://app-integrations.{region}.amazonaws.com",
  "http://app-integrations.{region}.amazonaws.com.cn",
  "https://app-integrations.{region}.amazonaws.com.cn",
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

// SDK Documentation: https://docs.aws.amazon.com/app-integrations/ - Amazon Web Services documentation
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
  
  // CreateEventIntegration - Creates an EventIntegration, given a specified name, description, and a reference to an Amazon EventBridge bus in your account and a partner event source that pushes events to that bus. No objects are created in the your account, only metadata that is persisted on the EventIntegration control plane.
  CreateEventIntegration(
    req: operations.CreateEventIntegrationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateEventIntegrationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateEventIntegrationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/eventIntegrations";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateEventIntegrationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.createEventIntegrationResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceError = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceQuotaExceededException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.duplicateResourceException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.throttlingException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidRequestException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteEventIntegration - Deletes the specified existing event integration. If the event integration is associated with clients, the request is rejected.
  DeleteEventIntegration(
    req: operations.DeleteEventIntegrationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteEventIntegrationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteEventIntegrationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/eventIntegrations/{Name}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteEventIntegrationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteEventIntegrationResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceError = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.throttlingException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidRequestException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetEventIntegration - Return information about the event integration.
  GetEventIntegration(
    req: operations.GetEventIntegrationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEventIntegrationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEventIntegrationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/eventIntegrations/{Name}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetEventIntegrationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getEventIntegrationResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceError = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.throttlingException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidRequestException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListEventIntegrationAssociations - Returns a paginated list of event integration associations in the account. 
  ListEventIntegrationAssociations(
    req: operations.ListEventIntegrationAssociationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListEventIntegrationAssociationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListEventIntegrationAssociationsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/eventIntegrations/{Name}/associations", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
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
        let res: operations.ListEventIntegrationAssociationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listEventIntegrationAssociationsResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceError = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.throttlingException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidRequestException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListEventIntegrations - Returns a paginated list of event integrations in the account.
  ListEventIntegrations(
    req: operations.ListEventIntegrationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListEventIntegrationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListEventIntegrationsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/eventIntegrations";
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
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
        let res: operations.ListEventIntegrationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listEventIntegrationsResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceError = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.throttlingException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidRequestException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListTagsForResource - Lists the tags for the specified resource.
  ListTagsForResource(
    req: operations.ListTagsForResourceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListTagsForResourceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListTagsForResourceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tags/{resourceArn}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListTagsForResourceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listTagsForResourceResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidRequestException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceError = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.throttlingException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // TagResource - Adds the specified tags to the specified resource.
  TagResource(
    req: operations.TagResourceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagResourceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagResourceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tags/{resourceArn}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.TagResourceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.tagResourceResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidRequestException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceError = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.throttlingException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UntagResource - Removes the specified tags from the specified resource.
  UntagResource(
    req: operations.UntagResourceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UntagResourceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UntagResourceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tags/{resourceArn}#tagKeys", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .delete(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UntagResourceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.untagResourceResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidRequestException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceError = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.throttlingException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateEventIntegration - Updates the description of an event integration.
  UpdateEventIntegration(
    req: operations.UpdateEventIntegrationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateEventIntegrationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateEventIntegrationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/eventIntegrations/{Name}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .patch(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateEventIntegrationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateEventIntegrationResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceError = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.throttlingException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidRequestException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}

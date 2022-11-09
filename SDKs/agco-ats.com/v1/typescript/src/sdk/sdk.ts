import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { ParamsSerializerOptions } from "axios";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "https://secure.agco-ats.com",
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
  
  // ActivitiesDeleteActivity - Mark the delete flag for the Activity
  /** 
   * Deletes an Activity. When successful, the response is empty.  If unsuccessful, an appropriate
   *             ApiError is returned.
  **/
  ActivitiesDeleteActivity(
    req: operations.ActivitiesDeleteActivityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActivitiesDeleteActivityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActivitiesDeleteActivityRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/activities/{activityID}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ActivitiesDeleteActivityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ActivitiesGetActivities - Get Activities
  /** 
   * Gets a collection of Activities. When successful, the response is a PagedResponse of Activities.  
   *             If unsuccessful, an appropriate ApiError is returned.
  **/
  ActivitiesGetActivities(
    req: operations.ActivitiesGetActivitiesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActivitiesGetActivitiesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActivitiesGetActivitiesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/activities";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.ActivitiesGetActivitiesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiPagedResponseBuildSystemSharedDtoActivity = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiPagedResponseBuildSystemSharedDtoActivity = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ActivitiesGetActivity - Get an Activity by ID
  /** 
   * Gets an Activity by ID. When successful, the response is the requested Activity.  If unsuccessful,
   *             an appropriate ApiError is returned.
  **/
  ActivitiesGetActivity(
    req: operations.ActivitiesGetActivityRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActivitiesGetActivityResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActivitiesGetActivityRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/activities/{activityID}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.ActivitiesGetActivityResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.buildSystemSharedDtoActivity = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.buildSystemSharedDtoActivity = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ActivityRunsGetActivityRun - Get an ActivityRun by ID
  /** 
   * Gets an ActivityRun by ID. When successful, the response is the requested ActivityRun.  If unsuccessful,
   *             an appropriate ApiError is returned.
  **/
  ActivityRunsGetActivityRun(
    req: operations.ActivityRunsGetActivityRunRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActivityRunsGetActivityRunResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActivityRunsGetActivityRunRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/activityRuns/{activityRunID}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ActivityRunsGetActivityRunResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.buildSystemSharedDtoActivityRun = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.buildSystemSharedDtoActivityRun = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ActivityRunsGetActivityRunStatus - Get the ActivityRunStatus of an ActivityRun
  /** 
   * Gets the ActivityRunStatus of an ActivityRun.  When successful, the response is the requested ActivityRunStatus.
   *             If unsuccessful, an appropriate ApiError is returned.
  **/
  ActivityRunsGetActivityRunStatus(
    req: operations.ActivityRunsGetActivityRunStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActivityRunsGetActivityRunStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActivityRunsGetActivityRunStatusRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/activityRuns/{activityRunID}/status", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ActivityRunsGetActivityRunStatusResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.buildSystemSharedDtoActivityRunStatus = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.buildSystemSharedDtoActivityRunStatus = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ActivityRunsGetActivityRuns - Get ActivityRuns
  /** 
   * Gets a collection of ActivityRuns. When successful, the response is a PagedResponse of ActivityRuns.  
   *             If unsuccessful, an appropriate ApiError is returned.
  **/
  ActivityRunsGetActivityRuns(
    req: operations.ActivityRunsGetActivityRunsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActivityRunsGetActivityRunsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActivityRunsGetActivityRunsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/activityRuns";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.ActivityRunsGetActivityRunsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiPagedResponseBuildSystemSharedDtoActivityRun = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiPagedResponseBuildSystemSharedDtoActivityRun = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ActivityRunsPutActivityRunStatus - Update the ActivityRunStatus of an ActivityRun
  /** 
   * Updates the ActivityRunStatus of an ActivityRun.  The body of the PUT is the updated ActivityRunStatus.
   *             When successful, the response is empty.  If unsuccessful, an appropriate ApiError is returned.
  **/
  ActivityRunsPutActivityRunStatus(
    req: operations.ActivityRunsPutActivityRunStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ActivityRunsPutActivityRunStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ActivityRunsPutActivityRunStatusRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/activityRuns/{activityRunID}/status", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ActivityRunsPutActivityRunStatusResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AftermarketServicesGetCerts - No Documentation Found.
  /** 
   * No Documentation Found.
  **/
  AftermarketServicesGetCerts(
    
    config?: AxiosRequestConfig
  ): Promise<operations.AftermarketServicesGetCertsResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/AftermarketServices/Certificates";
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AftermarketServicesGetCertsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.systemObject = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.systemObject = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AftermarketServicesGetConnectionStatus - Check whether there is connectivity to AGCO Power Web Services
  /** 
   * No Documentation Found.
  **/
  AftermarketServicesGetConnectionStatus(
    
    config?: AxiosRequestConfig
  ): Promise<operations.AftermarketServicesGetConnectionStatusResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/AftermarketServices/Hello";
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AftermarketServicesGetConnectionStatusResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.aftermarketServicesGetConnectionStatus200ApplicationJsonBoolean = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.aftermarketServicesGetConnectionStatus200TextJsonBoolean = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AftermarketServicesGetEngineIqaCodes - Get injector codes given engine.
  /** 
   * No Documentation Found.
  **/
  AftermarketServicesGetEngineIqaCodes(
    req: operations.AftermarketServicesGetEngineIqaCodesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AftermarketServicesGetEngineIqaCodesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AftermarketServicesGetEngineIqaCodesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/AftermarketServices/Engines/{serialNumber}/IQACodes", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.AftermarketServicesGetEngineIqaCodesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.aftermarketServicesGetEngineIqaCodes200ApplicationJsonStrings = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.aftermarketServicesGetEngineIqaCodes200TextJsonStrings = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AftermarketServicesGetProductionData - Get production calibration data for given engine.
  /** 
   * No Documentation Found.
  **/
  AftermarketServicesGetProductionData(
    req: operations.AftermarketServicesGetProductionDataRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AftermarketServicesGetProductionDataResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AftermarketServicesGetProductionDataRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/AftermarketServices/Engines/{serialNumber}/ProductionData", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.AftermarketServicesGetProductionDataResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.agcoPowerServicesModelsProductionData = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.agcoPowerServicesModelsProductionData = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AftermarketServicesGetUserStatus - Retrieve the status of an EDT Kit Registration with AGCO Power Web Services
  /** 
   * No Documentation Found.
  **/
  AftermarketServicesGetUserStatus(
    req: operations.AftermarketServicesGetUserStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AftermarketServicesGetUserStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AftermarketServicesGetUserStatusRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/AftermarketServices/UserStatuses";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.AftermarketServicesGetUserStatusResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.agcoPowerServicesModelsUserStatus = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.agcoPowerServicesModelsUserStatus = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AftermarketServicesPutEcu - Activate or Deactivate an ECU, or Report an ECU as Damaged.
  /** 
   * No Documentation Found.
  **/
  AftermarketServicesPutEcu(
    req: operations.AftermarketServicesPutEcuRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AftermarketServicesPutEcuResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AftermarketServicesPutEcuRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/AftermarketServices/ECUs/{serialNumber}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AftermarketServicesPutEcuResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.agcoPowerServicesModelsEcu = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.agcoPowerServicesModelsEcu = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AftermarketServicesUpdateUserStatus - Update the status of an EDT Kit Registration with AGCO Power Web Services
  /** 
   * No Documentation Found.
  **/
  AftermarketServicesUpdateUserStatus(
    req: operations.AftermarketServicesUpdateUserStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AftermarketServicesUpdateUserStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AftermarketServicesUpdateUserStatusRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/AftermarketServices/UserStatuses";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AftermarketServicesUpdateUserStatusResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.aftermarketServicesUpdateUserStatus200ApplicationJsonBoolean = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.aftermarketServicesUpdateUserStatus200TextJsonBoolean = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AgentsDeleteAgent - Delete an Agent
  /** 
   * Deletes an Agent. When successful, the response is empty.  If unsuccessful, an appropriate
   *             ApiError is returned.
  **/
  AgentsDeleteAgent(
    req: operations.AgentsDeleteAgentRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AgentsDeleteAgentResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AgentsDeleteAgentRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/agents/{agentID}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AgentsDeleteAgentResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AgentsGetAgentActivityRun - Get an Agent's ActivityRun
  /** 
   * Gets the activity run assigned to an agent.  When successful, the response is the ActivityRun
   *             assigned to the Agent.  If unsuccessful, an appropriate ApiError is returned.
  **/
  AgentsGetAgentActivityRun(
    req: operations.AgentsGetAgentActivityRunRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AgentsGetAgentActivityRunResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AgentsGetAgentActivityRunRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/agents/{agentID}/ActivityRun", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AgentsGetAgentActivityRunResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.buildSystemSharedDtoActivityRun = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.buildSystemSharedDtoActivityRun = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AgentsGetAgentAsync - Get Agent
  /** 
   * Gets an Agent by ID. When successful, the response is the requested Agent.  If unsuccessful,
   *             an appropriate ApiError is returned.
  **/
  AgentsGetAgentAsync(
    req: operations.AgentsGetAgentAsyncRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AgentsGetAgentAsyncResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AgentsGetAgentAsyncRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/agents/{agentID}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AgentsGetAgentAsyncResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.buildSystemSharedDtoAgent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.buildSystemSharedDtoAgent = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AgentsGetAgents - Get Agents
  /** 
   * Gets a collection of Agents. When successful, the response is a PagedResponse of Agents.  
   *             If unsuccessful, an appropriate ApiError is returned.
  **/
  AgentsGetAgents(
    req: operations.AgentsGetAgentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AgentsGetAgentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AgentsGetAgentsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/agents";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.AgentsGetAgentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiPagedResponseBuildSystemSharedDtoAgent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiPagedResponseBuildSystemSharedDtoAgent = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AgentsGetCurrentAgentActivityRun - Get the ActivityRun of Agent associated with the current user
  /** 
   * Gets the activity run assigned to an agent.  When successful, the response is the ActivityRun
   *             assigned to the Agent.  If unsuccessful, an appropriate ApiError is returned.
  **/
  AgentsGetCurrentAgentActivityRun(
    
    config?: AxiosRequestConfig
  ): Promise<operations.AgentsGetCurrentAgentActivityRunResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/agents/Current/ActivityRun";
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AgentsGetCurrentAgentActivityRunResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.buildSystemSharedDtoActivityRun = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.buildSystemSharedDtoActivityRun = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AgentsGetCurrentAgentAsync - Get Agent associated with the current user
  /** 
   * Gets the Agent associated with the current user. When successful, the response is the requested Agent.  If unsuccessful,
   *             an appropriate ApiError is returned.
  **/
  AgentsGetCurrentAgentAsync(
    
    config?: AxiosRequestConfig
  ): Promise<operations.AgentsGetCurrentAgentAsyncResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/agents/Current";
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AgentsGetCurrentAgentAsyncResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.buildSystemSharedDtoAgent = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.buildSystemSharedDtoAgent = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AgentsPutAgentStatus - Update an Agent
  /** 
   * Updates the status of an Agent.The body of the PUT is the updated Agent status.  When successful,
   *             the response is empty.If unsuccessful, an appropriate ApiError is returned.
  **/
  AgentsPutAgentStatus(
    req: operations.AgentsPutAgentStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AgentsPutAgentStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AgentsPutAgentStatusRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/agents/{agentID}/Status", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AgentsPutAgentStatusResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AuthenticationDefault - Authenticate a user.
  /** 
   * No Documentation Found.
  **/
  AuthenticationDefault(
    req: operations.AuthenticationDefaultRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthenticationDefaultResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthenticationDefaultRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/Authentication";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.AuthenticationDefaultResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsAuthenticatedUser = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsAuthenticatedUser = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AuthenticationIsAlive - Acknowledges the connection to the API
  /** 
   * No Documentation Found.
  **/
  AuthenticationIsAlive(
    
    config?: AxiosRequestConfig
  ): Promise<operations.AuthenticationIsAliveResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/Authentication/IsAlive";
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AuthenticationIsAliveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AuthenticationPutManageTokens - Manage API tokens.
  /** 
   * No Documentation Found.
  **/
  AuthenticationPutManageTokens(
    req: operations.AuthenticationPutManageTokensRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthenticationPutManageTokensResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthenticationPutManageTokensRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/AuthenticatedUsers/{UserID}/Tokens", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AuthenticationPutManageTokensResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AuthenticationRequestPasswordReset - Request a password reset.
  /** 
   * No Documentation Found.
  **/
  AuthenticationRequestPasswordReset(
    req: operations.AuthenticationRequestPasswordResetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthenticationRequestPasswordResetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthenticationRequestPasswordResetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/Authentication/RequestPasswordReset";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.AuthenticationRequestPasswordResetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AuthenticationResetPasword - Reset a password
  /** 
   * No Documentation Found.
  **/
  AuthenticationResetPasword(
    req: operations.AuthenticationResetPaswordRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthenticationResetPaswordResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthenticationResetPaswordRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/Authentication/ResetPasword";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.AuthenticationResetPaswordResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AuthorizationCategoriesAddUser - Add a category that a user can see.
  /** 
   * No Documentation Found.
  **/
  AuthorizationCategoriesAddUser(
    req: operations.AuthorizationCategoriesAddUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthorizationCategoriesAddUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthorizationCategoriesAddUserRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/AuthorizationCategories/{id}/Users/{userID}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AuthorizationCategoriesAddUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AuthorizationCategoriesDelete - Remove an authorization category.
  /** 
   * No Documentation Found.
  **/
  AuthorizationCategoriesDelete(
    req: operations.AuthorizationCategoriesDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthorizationCategoriesDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthorizationCategoriesDeleteRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/AuthorizationCategories/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AuthorizationCategoriesDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AuthorizationCategoriesGet - Get authorization categories.
  /** 
   * No Documentation Found.
  **/
  AuthorizationCategoriesGet(
    req: operations.AuthorizationCategoriesGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthorizationCategoriesGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthorizationCategoriesGetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/AuthorizationCategories";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.AuthorizationCategoriesGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiIPagedResponseAuthorizationCodesSharedModelsCategory = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiIPagedResponseAuthorizationCodesSharedModelsCategory = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AuthorizationCategoriesGetUsers - Returns a report of access that users have to Authorization Categories.
  /** 
   * No Documentation Found.
  **/
  AuthorizationCategoriesGetUsers(
    req: operations.AuthorizationCategoriesGetUsersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthorizationCategoriesGetUsersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthorizationCategoriesGetUsersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/AuthorizationCategories/Users";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.AuthorizationCategoriesGetUsersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiIPagedResponseAuthorizationCodesSharedModelsCategoryUserReport = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiIPagedResponseAuthorizationCodesSharedModelsCategoryUserReport = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AuthorizationCategoriesPost - Add an authorization category.
  /** 
   * No Documentation Found.
  **/
  AuthorizationCategoriesPost(
    req: operations.AuthorizationCategoriesPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthorizationCategoriesPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthorizationCategoriesPostRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/AuthorizationCategories";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.AuthorizationCategoriesPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.authorizationCategoriesPost200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `application/xml`)) {
                res.authorizationCategoriesPost200ApplicationXmlString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.authorizationCategoriesPost200TextJsonString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `text/xml`)) {
                res.authorizationCategoriesPost200TextXmlString = JSON.stringify(httpRes?.data);
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AuthorizationCategoriesPut - Update an authorization category.
  /** 
   * No Documentation Found.
  **/
  AuthorizationCategoriesPut(
    req: operations.AuthorizationCategoriesPutRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthorizationCategoriesPutResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthorizationCategoriesPutRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/AuthorizationCategories/{id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AuthorizationCategoriesPutResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AuthorizationCategoriesRemoveUser - Deletes a category a user could see.
  /** 
   * No Documentation Found.
  **/
  AuthorizationCategoriesRemoveUser(
    req: operations.AuthorizationCategoriesRemoveUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthorizationCategoriesRemoveUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthorizationCategoriesRemoveUserRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/AuthorizationCategories/{id}/Users/{userID}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AuthorizationCategoriesRemoveUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AuthorizationCodeDefinitionsAddCategoryToDefinition - Add a category to an authorizationCodeDefintion.
  /** 
   * No Documentation Found.
  **/
  AuthorizationCodeDefinitionsAddCategoryToDefinition(
    req: operations.AuthorizationCodeDefinitionsAddCategoryToDefinitionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthorizationCodeDefinitionsAddCategoryToDefinitionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthorizationCodeDefinitionsAddCategoryToDefinitionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/AuthorizationCodeDefinitions/{ID}/Categories/{categoryID}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AuthorizationCodeDefinitionsAddCategoryToDefinitionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AuthorizationCodeDefinitionsDeleteAuthorizationCodeDefinition - Disable an authorization code definition
  /** 
   * No Documentation Found.
  **/
  AuthorizationCodeDefinitionsDeleteAuthorizationCodeDefinition(
    req: operations.AuthorizationCodeDefinitionsDeleteAuthorizationCodeDefinitionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthorizationCodeDefinitionsDeleteAuthorizationCodeDefinitionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthorizationCodeDefinitionsDeleteAuthorizationCodeDefinitionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/AuthorizationCodeDefinitions/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AuthorizationCodeDefinitionsDeleteAuthorizationCodeDefinitionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AuthorizationCodeDefinitionsGetAuthorizationCodeDefinition - Get authorization code definitions.
  /** 
   * Additional searches: validationFields[Name]=true and dataFields[Name]=true. These can be used to search for authorization code definitions that have the specified data or validation fields.
  **/
  AuthorizationCodeDefinitionsGetAuthorizationCodeDefinition(
    req: operations.AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/AuthorizationCodeDefinitions";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.AuthorizationCodeDefinitionsGetAuthorizationCodeDefinitionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiIPagedResponseAuthorizationCodesSharedModelsAuthorizationCodeDefinition = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiIPagedResponseAuthorizationCodesSharedModelsAuthorizationCodeDefinition = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AuthorizationCodeDefinitionsRemoveCategoryFromDefinition - Deletes the category from the authorization code definition.
  /** 
   * No Documentation Found.
  **/
  AuthorizationCodeDefinitionsRemoveCategoryFromDefinition(
    req: operations.AuthorizationCodeDefinitionsRemoveCategoryFromDefinitionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthorizationCodeDefinitionsRemoveCategoryFromDefinitionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthorizationCodeDefinitionsRemoveCategoryFromDefinitionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/AuthorizationCodeDefinitions/{ID}/Categories/{categoryID}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AuthorizationCodeDefinitionsRemoveCategoryFromDefinitionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AuthorizationCodesDeleteAuthorizationCode - Hide an authorization code.
  /** 
   * No Documentation Found.
  **/
  AuthorizationCodesDeleteAuthorizationCode(
    req: operations.AuthorizationCodesDeleteAuthorizationCodeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthorizationCodesDeleteAuthorizationCodeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthorizationCodesDeleteAuthorizationCodeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/AuthorizationCodes/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AuthorizationCodesDeleteAuthorizationCodeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AuthorizationCodesGetAuthorizationCode - Get an authorization code by its ID.
  /** 
   * No Documentation Found.
  **/
  AuthorizationCodesGetAuthorizationCode(
    req: operations.AuthorizationCodesGetAuthorizationCodeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthorizationCodesGetAuthorizationCodeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthorizationCodesGetAuthorizationCodeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/AuthorizationCodes/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AuthorizationCodesGetAuthorizationCodeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.authorizationCodesSharedModelsAuthorizationCode = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.authorizationCodesSharedModelsAuthorizationCode = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AuthorizationCodesGetAuthorizationCodes - Get authorization codes.
  /** 
   * Additional searches: validationParameters[Name]=Value and dataParameters[Name]=Value. These can be used to search for authorization codes that have been generated using specified values for data or validation parameters.
  **/
  AuthorizationCodesGetAuthorizationCodes(
    req: operations.AuthorizationCodesGetAuthorizationCodesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthorizationCodesGetAuthorizationCodesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthorizationCodesGetAuthorizationCodesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/AuthorizationCodes";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.AuthorizationCodesGetAuthorizationCodesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiIPagedResponseAuthorizationCodesSharedModelsAuthorizationCode = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiIPagedResponseAuthorizationCodesSharedModelsAuthorizationCode = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AuthorizationCodesGetContactInformation - Get contact information for an authorization code.
  /** 
   * No Documentation Found.
  **/
  AuthorizationCodesGetContactInformation(
    req: operations.AuthorizationCodesGetContactInformationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthorizationCodesGetContactInformationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthorizationCodesGetContactInformationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/AuthorizationCodes/{id}/ContactInformation", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AuthorizationCodesGetContactInformationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.authorizationCodesSharedModelsAuthorizationContactInformation = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.authorizationCodesSharedModelsAuthorizationContactInformation = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AuthorizationCodesValidateAuthorizationCode - No Documentation Found.
  /** 
   * No Documentation Found.
  **/
  AuthorizationCodesValidateAuthorizationCode(
    req: operations.AuthorizationCodesValidateAuthorizationCodeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthorizationCodesValidateAuthorizationCodeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthorizationCodesValidateAuthorizationCodeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/AuthorizationCodes/{id}/Validate", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AuthorizationCodesValidateAuthorizationCodeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.authorizationCodesSharedModelsCodeValidationModel = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.authorizationCodesSharedModelsCodeValidationModel = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AuthorizationContactInformationGet - Get contact information for authorization codes.
  /** 
   * No Documentation Found.
  **/
  AuthorizationContactInformationGet(
    req: operations.AuthorizationContactInformationGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthorizationContactInformationGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthorizationContactInformationGetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/AuthorizationContactInformation";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.AuthorizationContactInformationGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiIPagedResponseAuthorizationCodesSharedModelsAuthorizationContactInformation = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiIPagedResponseAuthorizationCodesSharedModelsAuthorizationContactInformation = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AuthorizationContactInformationPost - Add contact information for authorization code.
  /** 
   * No Documentation Found.
  **/
  AuthorizationContactInformationPost(
    req: operations.AuthorizationContactInformationPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AuthorizationContactInformationPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AuthorizationContactInformationPostRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/AuthorizationContactInformation";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.AuthorizationContactInformationPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.authorizationContactInformationPost200ApplicationJsonInt32Integer = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.authorizationContactInformationPost200TextJsonInt32Integer = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // BrandsBrands - Gets a list of Brands.
  /** 
   * No Documentation Found.
  **/
  BrandsBrands(
    
    config?: AxiosRequestConfig
  ): Promise<operations.BrandsBrandsResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/Brands";
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.BrandsBrandsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.brandsBrands200ApplicationJsonStrings = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.brandsBrands200TextJsonStrings = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // BundlesDeleteBundle - Delete a Bundle.
  /** 
   * No Documentation Found.
  **/
  BundlesDeleteBundle(
    req: operations.BundlesDeleteBundleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BundlesDeleteBundleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BundlesDeleteBundleRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/Bundles/{ID}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.BundlesDeleteBundleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // BundlesGetBundle - Get a specific Bundle by ID.
  /** 
   * No Documentation Found.
  **/
  BundlesGetBundle(
    req: operations.BundlesGetBundleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BundlesGetBundleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BundlesGetBundleRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/Bundles/{ID}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.BundlesGetBundleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateSystemModelsBundle = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.updateSystemModelsBundle = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // BundlesGetBundles - Get the list of bundles.
  /** 
   * No Documentation Found.
  **/
  BundlesGetBundles(
    req: operations.BundlesGetBundlesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BundlesGetBundlesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BundlesGetBundlesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/Bundles";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.BundlesGetBundlesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiPagedResponseUpdateSystemModelsBundle = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiPagedResponseUpdateSystemModelsBundle = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // BundlesPostBundle - Add a Bundle to the Update System.
  /** 
   * No Documentation Found.
  **/
  BundlesPostBundle(
    req: operations.BundlesPostBundleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BundlesPostBundleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BundlesPostBundleRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/Bundles";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.BundlesPostBundleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.bundlesPostBundle200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `application/xml`)) {
                res.bundlesPostBundle200ApplicationXmlString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.bundlesPostBundle200TextJsonString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `text/xml`)) {
                res.bundlesPostBundle200TextXmlString = JSON.stringify(httpRes?.data);
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // BundlesPutBundle - Modify a Bundle in the Update System.
  /** 
   * No Documentation Found.
  **/
  BundlesPutBundle(
    req: operations.BundlesPutBundleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BundlesPutBundleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BundlesPutBundleRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/Bundles/{ID}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.BundlesPutBundleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ClientsGet - Get a List of Clients in the Update System.
  /** 
   * No Documentation Found.
  **/
  ClientsGet(
    req: operations.ClientsGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ClientsGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ClientsGetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/Clients";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.ClientsGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiPagedResponseUpdateSystemModelsClient = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiPagedResponseUpdateSystemModelsClient = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ClientsGetAvailableSubscriptions - Get a Client's Available Update Group Subscriptions
  /** 
   * No Documentation Found.
  **/
  ClientsGetAvailableSubscriptions(
    req: operations.ClientsGetAvailableSubscriptionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ClientsGetAvailableSubscriptionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ClientsGetAvailableSubscriptionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/Clients/{ID}/AvailableUpdateGroupSubscriptions", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.ClientsGetAvailableSubscriptionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiPagedResponseUpdateSystemModelsAvailableUpdateGroupSubscription = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiPagedResponseUpdateSystemModelsAvailableUpdateGroupSubscription = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ClientsGetSubscriptions - Get a Client's Current Update Group Subscriptions
  /** 
   * No Documentation Found.
  **/
  ClientsGetSubscriptions(
    req: operations.ClientsGetSubscriptionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ClientsGetSubscriptionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ClientsGetSubscriptionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/Clients/{ID}/UpdateGroupSubscriptions", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.ClientsGetSubscriptionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiPagedResponseUpdateSystemModelsUpdateGroupSubscription = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiPagedResponseUpdateSystemModelsUpdateGroupSubscription = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ClientsPut - Update a Client.
  /** 
   * No Documentation Found.
  **/
  ClientsPut(
    req: operations.ClientsPutRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ClientsPutResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ClientsPutRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/Clients/{ID}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ClientsPutResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ContentDefinitionsDeleteContentDefinition - Delete a ContentDefinition
  /** 
   * Deletes an ContentDefinition. When successful, the response is empty.  If unsuccessful, an appropriate
   *             ApiError is returned.
  **/
  ContentDefinitionsDeleteContentDefinition(
    req: operations.ContentDefinitionsDeleteContentDefinitionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ContentDefinitionsDeleteContentDefinitionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ContentDefinitionsDeleteContentDefinitionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/ContentDefinitions/{contentDefinitionID}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ContentDefinitionsDeleteContentDefinitionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ContentDefinitionsDeleteContentDefinitionAttribute - Remove an Attribute from a ContentDefinition
  /** 
   * No Documentation Found.
  **/
  ContentDefinitionsDeleteContentDefinitionAttribute(
    req: operations.ContentDefinitionsDeleteContentDefinitionAttributeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ContentDefinitionsDeleteContentDefinitionAttributeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ContentDefinitionsDeleteContentDefinitionAttributeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/ContentDefinitionAttributes/{contentDefinitionAttributeID}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ContentDefinitionsDeleteContentDefinitionAttributeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ContentDefinitionsGetContentDefinition - Get a ContentDefinition by ID
  /** 
   * Gets a ContentDefinition by ID. When successful, the response is the requested ContentDefinition.
   *             If unsuccessful, an appropriate ApiError is returned.
  **/
  ContentDefinitionsGetContentDefinition(
    req: operations.ContentDefinitionsGetContentDefinitionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ContentDefinitionsGetContentDefinitionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ContentDefinitionsGetContentDefinitionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/ContentDefinitions/{contentDefinitionID}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.ContentDefinitionsGetContentDefinitionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.contentSubmissionSharedBusinessEntitiesContentDefinition = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.contentSubmissionSharedBusinessEntitiesContentDefinition = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ContentDefinitionsGetContentDefinitionAttributes - Get Attributes for a ContentDefinition
  /** 
   * No Documentation Found.
  **/
  ContentDefinitionsGetContentDefinitionAttributes(
    req: operations.ContentDefinitionsGetContentDefinitionAttributesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ContentDefinitionsGetContentDefinitionAttributesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ContentDefinitionsGetContentDefinitionAttributesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/ContentDefinitions/{contentDefinitionID}/Attributes", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.ContentDefinitionsGetContentDefinitionAttributesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinitionAttribute = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ContentDefinitionsGetContentDefinitions - Get ContentDefinitions
  /** 
   * Gets a collection of ContentDefinitions. When successful, the response is a PagedResponse of ContentDefinitions.
   *             If unsuccessful, an appropriate ApiError is returned.
  **/
  ContentDefinitionsGetContentDefinitions(
    req: operations.ContentDefinitionsGetContentDefinitionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ContentDefinitionsGetContentDefinitionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ContentDefinitionsGetContentDefinitionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/ContentDefinitions";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.ContentDefinitionsGetContentDefinitionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinition = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiPagedResponseContentSubmissionSharedBusinessEntitiesContentDefinition = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ContentDefinitionsPostContentDefinitionAttribute - Add an Attribute to a ContentDefinition
  /** 
   * No Documentation Found.
  **/
  ContentDefinitionsPostContentDefinitionAttribute(
    req: operations.ContentDefinitionsPostContentDefinitionAttributeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ContentDefinitionsPostContentDefinitionAttributeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ContentDefinitionsPostContentDefinitionAttributeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/ContentDefinitions/{contentDefinitionID}/Attributes", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.ContentDefinitionsPostContentDefinitionAttributeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.contentDefinitionsPostContentDefinitionAttribute200ApplicationJsonInt32Integer = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.contentDefinitionsPostContentDefinitionAttribute200TextJsonInt32Integer = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ContentDefinitionsPutContentDefinitionAttributeAsync - Update an Attribute for a ContentDefinition
  /** 
   * No Documentation Found.
  **/
  ContentDefinitionsPutContentDefinitionAttributeAsync(
    req: operations.ContentDefinitionsPutContentDefinitionAttributeAsyncRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ContentDefinitionsPutContentDefinitionAttributeAsyncResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ContentDefinitionsPutContentDefinitionAttributeAsyncRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/ContentDefinitionAttributes/{contentDefinitionAttributeID}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ContentDefinitionsPutContentDefinitionAttributeAsyncResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ContentReleaseDeleteContentReleaseVersionn - Delete a ContentReleaseVersion
  /** 
   * Deletes an ContentReleaseVersion. When successful, the response is empty.  If unsuccessful, an appropriate
   *             ApiError is returned.
  **/
  ContentReleaseDeleteContentReleaseVersionn(
    req: operations.ContentReleaseDeleteContentReleaseVersionnRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ContentReleaseDeleteContentReleaseVersionnResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ContentReleaseDeleteContentReleaseVersionnRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/ContentReleases/{ContentReleaseId}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ContentReleaseDeleteContentReleaseVersionnResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ContentReleaseGetContentReleaseVersion - Get ContentReleaseVersion
  /** 
   * Gets a collection of ContentReleaseVersion. When successful, the response is a PagedResponse of ContentReleaseVersion.
   *             If unsuccessful, an appropriate ApiError is returned.
  **/
  ContentReleaseGetContentReleaseVersion(
    req: operations.ContentReleaseGetContentReleaseVersionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ContentReleaseGetContentReleaseVersionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ContentReleaseGetContentReleaseVersionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/ContentReleases";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.ContentReleaseGetContentReleaseVersionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiPagedResponseContentSubmissionSharedBusinessEntitiesContentReleaseVersion = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiPagedResponseContentSubmissionSharedBusinessEntitiesContentReleaseVersion = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ContentReleasePostContentRelease - Create a ContentReleaseVersion
  /** 
   * Creates a ContentReleaseVersion.  The body of the POST is the ContentReleaseVersion to create.
   *             The ContentReleaseId will be assigned on creation of the Job.  When successful, the response
   *             is the contentReleaseId.  If unsuccessful, an appropriate ApiError is returned.
  **/
  ContentReleasePostContentRelease(
    req: operations.ContentReleasePostContentReleaseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ContentReleasePostContentReleaseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ContentReleasePostContentReleaseRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/ContentReleases";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.ContentReleasePostContentReleaseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.contentReleasePostContentRelease200ApplicationJsonInt32Integer = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.contentReleasePostContentRelease200TextJsonInt32Integer = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ContentReleasePutContentDefinition - Update a ContentReleaseVersion
  /** 
   * Updates a ContentReleaseVersion.  The body of the PUT is the updated ContentReleaseVersion.  
   *             When successful, the response is empty.  If unsuccessful, an appropriate ApiError is returned.
  **/
  ContentReleasePutContentDefinition(
    req: operations.ContentReleasePutContentDefinitionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ContentReleasePutContentDefinitionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ContentReleasePutContentDefinitionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/ContentReleases/{ContentReleaseId}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ContentReleasePutContentDefinitionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ContentSubmissionTypesDeleteContentSubmissionType - Remove a Content Submission Type
  /** 
   * No Documentation Found.
  **/
  ContentSubmissionTypesDeleteContentSubmissionType(
    req: operations.ContentSubmissionTypesDeleteContentSubmissionTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ContentSubmissionTypesDeleteContentSubmissionTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ContentSubmissionTypesDeleteContentSubmissionTypeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/ContentSubmissionTypes/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ContentSubmissionTypesDeleteContentSubmissionTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ContentSubmissionTypesGetContentSubmissionType - Retrieves a Content Submission Type by its ID.
  /** 
   * No Documentation Found.
  **/
  ContentSubmissionTypesGetContentSubmissionType(
    req: operations.ContentSubmissionTypesGetContentSubmissionTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ContentSubmissionTypesGetContentSubmissionTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ContentSubmissionTypesGetContentSubmissionTypeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/ContentSubmissionTypes/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ContentSubmissionTypesGetContentSubmissionTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.contentSubmissionSharedBusinessEntitiesContentSubmissionType = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.contentSubmissionSharedBusinessEntitiesContentSubmissionType = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ContentSubmissionTypesGetContentSubmissionTypes - Returns available Content Submission Types.
  /** 
   * No Documentation Found.
  **/
  ContentSubmissionTypesGetContentSubmissionTypes(
    req: operations.ContentSubmissionTypesGetContentSubmissionTypesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ContentSubmissionTypesGetContentSubmissionTypesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ContentSubmissionTypesGetContentSubmissionTypesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/ContentSubmissionTypes";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.ContentSubmissionTypesGetContentSubmissionTypesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.contentSubmissionSharedBusinessEntitiesContentSubmissionTypes = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.contentSubmissionSharedBusinessEntitiesContentSubmissionTypes = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ContentSubmissionTypesPostContentSubmissionType - Add a Content Submission Type
  /** 
   * No Documentation Found.
  **/
  ContentSubmissionTypesPostContentSubmissionType(
    req: operations.ContentSubmissionTypesPostContentSubmissionTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ContentSubmissionTypesPostContentSubmissionTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ContentSubmissionTypesPostContentSubmissionTypeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/ContentSubmissionTypes";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.ContentSubmissionTypesPostContentSubmissionTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.contentSubmissionTypesPostContentSubmissionType200ApplicationJsonInt32Integer = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.contentSubmissionTypesPostContentSubmissionType200TextJsonInt32Integer = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ContentSubmissionTypesPutContentSubmissionType - Update a Content Submission Type
  /** 
   * No Documentation Found.
  **/
  ContentSubmissionTypesPutContentSubmissionType(
    req: operations.ContentSubmissionTypesPutContentSubmissionTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ContentSubmissionTypesPutContentSubmissionTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ContentSubmissionTypesPutContentSubmissionTypeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/ContentSubmissionTypes/{id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ContentSubmissionTypesPutContentSubmissionTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ContentSubmissionsDeleteContentSubmission - Delete a ContentSubmission
  /** 
   * Deletes an ContentSubmission. When successful, the response is empty.  If unsuccessful, an appropriate
   *             ApiError is returned.
  **/
  ContentSubmissionsDeleteContentSubmission(
    req: operations.ContentSubmissionsDeleteContentSubmissionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ContentSubmissionsDeleteContentSubmissionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ContentSubmissionsDeleteContentSubmissionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/ContentSubmissions/{contentSubmissionID}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ContentSubmissionsDeleteContentSubmissionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ContentSubmissionsDeleteContentSubmissionAttribute - Remove an Attribute from a ContentSubmission
  /** 
   * No Documentation Found.
  **/
  ContentSubmissionsDeleteContentSubmissionAttribute(
    req: operations.ContentSubmissionsDeleteContentSubmissionAttributeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ContentSubmissionsDeleteContentSubmissionAttributeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ContentSubmissionsDeleteContentSubmissionAttributeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/ContentSubmissionAttributes/{contentSubmissionAttributeID}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ContentSubmissionsDeleteContentSubmissionAttributeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ContentSubmissionsGetContentSubmission - Get a ContentSubmission by ID
  /** 
   * Gets a ContentSubmission by ID. When successful, the response is the requested ContentSubmission.
   *             If unsuccessful, an appropriate ApiError is returned.
  **/
  ContentSubmissionsGetContentSubmission(
    req: operations.ContentSubmissionsGetContentSubmissionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ContentSubmissionsGetContentSubmissionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ContentSubmissionsGetContentSubmissionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/ContentSubmissions/{contentSubmissionID}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.ContentSubmissionsGetContentSubmissionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.contentSubmissionSharedBusinessEntitiesContentSubmission = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.contentSubmissionSharedBusinessEntitiesContentSubmission = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ContentSubmissionsGetContentSubmissionAttributes - Get Attributes for a ContentSubmission
  /** 
   * No Documentation Found.
  **/
  ContentSubmissionsGetContentSubmissionAttributes(
    req: operations.ContentSubmissionsGetContentSubmissionAttributesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ContentSubmissionsGetContentSubmissionAttributesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ContentSubmissionsGetContentSubmissionAttributesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/ContentSubmissions/{contentSubmissionID}/Attributes", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.ContentSubmissionsGetContentSubmissionAttributesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmissionAttribute = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ContentSubmissionsGetContentSubmissions - Get ContentSubmissions
  /** 
   * Gets a collection of ContentSubmissions. When successful, the response is a PagedResponse of ContentSubmissions. Additional searches: attributes[Name]=Value. This can be used to search for submissions that have the specified values for attributes. Beginning and ending wildcard (*) supported for value.
   *             If unsuccessful, an appropriate ApiError is returned.
  **/
  ContentSubmissionsGetContentSubmissions(
    req: operations.ContentSubmissionsGetContentSubmissionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ContentSubmissionsGetContentSubmissionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ContentSubmissionsGetContentSubmissionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/ContentSubmissions";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.ContentSubmissionsGetContentSubmissionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmission = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiPagedResponseContentSubmissionSharedBusinessEntitiesContentSubmission = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ContentSubmissionsPostContentSubmissionAttribute - Add an Attribute to a ContentSubmission
  /** 
   * No Documentation Found.
  **/
  ContentSubmissionsPostContentSubmissionAttribute(
    req: operations.ContentSubmissionsPostContentSubmissionAttributeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ContentSubmissionsPostContentSubmissionAttributeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ContentSubmissionsPostContentSubmissionAttributeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/ContentSubmissions/{contentSubmissionID}/Attributes", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.ContentSubmissionsPostContentSubmissionAttributeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.contentSubmissionsPostContentSubmissionAttribute200ApplicationJsonInt32Integer = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.contentSubmissionsPostContentSubmissionAttribute200TextJsonInt32Integer = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ContentSubmissionsPutContentSubmissionAttributeAsync - Update an Attribute for a ContentSubmission
  /** 
   * No Documentation Found.
  **/
  ContentSubmissionsPutContentSubmissionAttributeAsync(
    req: operations.ContentSubmissionsPutContentSubmissionAttributeAsyncRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ContentSubmissionsPutContentSubmissionAttributeAsyncResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ContentSubmissionsPutContentSubmissionAttributeAsyncRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/ContentSubmissionAttributes/{contentSubmissionAttributeID}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ContentSubmissionsPutContentSubmissionAttributeAsyncResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DealerByCountryGetCountries - Get a total count of dealers per country
  /** 
   * No Documentation Found.
  **/
  DealerByCountryGetCountries(
    req: operations.DealerByCountryGetCountriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DealerByCountryGetCountriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DealerByCountryGetCountriesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/DealerByCountry";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.DealerByCountryGetCountriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiPagedResponseDealerDbModelsDealersPerCountry = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiPagedResponseDealerDbModelsDealersPerCountry = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DealersGetDealerbyDealerCode - Lookup a dealer using a dealer code.
  /** 
   * No Documentation Found.
  **/
  DealersGetDealerbyDealerCode(
    req: operations.DealersGetDealerbyDealerCodeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DealersGetDealerbyDealerCodeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DealersGetDealerbyDealerCodeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/Dealers/{DealerCode}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DealersGetDealerbyDealerCodeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.dealerDbModelsDealer = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.dealerDbModelsDealer = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DealersGetDealers - Get a list of dealers.
  /** 
   * No Documentation Found.
  **/
  DealersGetDealers(
    req: operations.DealersGetDealersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DealersGetDealersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DealersGetDealersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/Dealers";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.DealersGetDealersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiPagedResponseDealerDbModelsDealer = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiPagedResponseDealerDbModelsDealer = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FilesDeleteFile - Mark a file as 'Removed'. Disables download of the file and hides metadata from GET all method
  /** 
   * No Documentation Found.
  **/
  FilesDeleteFile(
    req: operations.FilesDeleteFileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FilesDeleteFileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FilesDeleteFileRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/Files/{ID}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FilesDeleteFileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FilesGetFile - Gets a file's metadata.
  /** 
   * No Documentation Found.
  **/
  FilesGetFile(
    req: operations.FilesGetFileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FilesGetFileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FilesGetFileRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/Files/{ID}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FilesGetFileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.globalResourcesSharedModelsFileDownload = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.globalResourcesSharedModelsFileDownload = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FilesGetFileContents - Download the contents of a file. The current State of the File should be 'Available'.
  /** 
   * No Documentation Found.
  **/
  FilesGetFileContents(
    req: operations.FilesGetFileContentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FilesGetFileContentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FilesGetFileContentsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/Files/{ID}/FileContents", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FilesGetFileContentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.systemObject = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.systemObject = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FilesGetFiles - Get a paged response of file metadata.
  /** 
   * No Documentation Found.
  **/
  FilesGetFiles(
    req: operations.FilesGetFilesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FilesGetFilesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FilesGetFilesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/Files";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.FilesGetFilesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiIPagedResponseGlobalResourcesSharedModelsFileDownload = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiIPagedResponseGlobalResourcesSharedModelsFileDownload = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FilesPostFile - Create the metadata for a file before uploading. The State of the File should be 'Created'.
  /** 
   * No Documentation Found.
  **/
  FilesPostFile(
    req: operations.FilesPostFileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FilesPostFileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FilesPostFileRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/Files";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.FilesPostFileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.filesPostFile200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `application/xml`)) {
                res.filesPostFile200ApplicationXmlString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.filesPostFile200TextJsonString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `text/xml`)) {
                res.filesPostFile200TextXmlString = JSON.stringify(httpRes?.data);
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FilesPutFile - Update the metadata for a file. Size may not be modified by the client.
  /** 
   * Update the metadata for a file. Size may not be modified by the client. 
   *                 Set status to 'Available' to publish a file. The file must be uploaded.
   *                 Set status to 'Created' to reset a file's contents and re-upload. 
   *                 A file may only be 'Removed' by the DELETE method.
  **/
  FilesPutFile(
    req: operations.FilesPutFileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FilesPutFileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FilesPutFileRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/Files/{ID}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FilesPutFileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // FilesPutFileContents - Upload the contents of a file. The current State of the File should be 'Created'.
  /** 
   * No Documentation Found.
  **/
  FilesPutFileContents(
    req: operations.FilesPutFileContentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FilesPutFileContentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FilesPutFileContentsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/Files/{ID}/FileContents", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.FilesPutFileContentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.systemObject = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.systemObject = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiV2AuthorizationCodeDefinitionsId - Get an authorization code definition by its ID
  /** 
   * No Documentation Found.
  **/
  GetApiV2AuthorizationCodeDefinitionsId(
    req: operations.GetApiV2AuthorizationCodeDefinitionsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiV2AuthorizationCodeDefinitionsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiV2AuthorizationCodeDefinitionsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/AuthorizationCodeDefinitions/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiV2AuthorizationCodeDefinitionsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.authorizationCodesSharedModelsAuthorizationCodeDefinition = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.authorizationCodesSharedModelsAuthorizationCodeDefinition = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiV2ClientsId - Get a Client in the Update System.
  /** 
   * No Documentation Found.
  **/
  GetApiV2ClientsId(
    req: operations.GetApiV2ClientsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiV2ClientsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiV2ClientsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/Clients/{ID}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiV2ClientsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateSystemModelsClient = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.updateSystemModelsClient = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiV2ContentReleasesContentReleaseId - Get a Content Release Version by ID
  /** 
   * Gets a ContentReleaseVersion by ID. When successful, the response is the requested ContentReleaseVersion.
   *             If unsuccessful, an appropriate ApiError is returned.
  **/
  GetApiV2ContentReleasesContentReleaseId(
    req: operations.GetApiV2ContentReleasesContentReleaseIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiV2ContentReleasesContentReleaseIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiV2ContentReleasesContentReleaseIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/ContentReleases/{ContentReleaseId}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiV2ContentReleasesContentReleaseIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.contentSubmissionSharedBusinessEntitiesContentReleaseVersion = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.contentSubmissionSharedBusinessEntitiesContentReleaseVersion = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiV2LicensesId - Get a license.
  /** 
   * No Documentation Found.
  **/
  GetApiV2LicensesId(
    req: operations.GetApiV2LicensesIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiV2LicensesIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiV2LicensesIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/Licenses/{ID}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiV2LicensesIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.dealerDbModelsLicense = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.dealerDbModelsLicense = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiV2PackageTypesId - Get a specific Package Type.
  /** 
   * No Documentation Found.
  **/
  GetApiV2PackageTypesId(
    req: operations.GetApiV2PackageTypesIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiV2PackageTypesIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiV2PackageTypesIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/PackageTypes/{ID}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiV2PackageTypesIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateSystemModelsPackageType = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.updateSystemModelsPackageType = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiV2UpdateGroupsId - Get a specific Update Group by ID.
  /** 
   * No Documentation Found.
  **/
  GetApiV2UpdateGroupsId(
    req: operations.GetApiV2UpdateGroupsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiV2UpdateGroupsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiV2UpdateGroupsIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/UpdateGroups/{ID}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiV2UpdateGroupsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateSystemModelsUpdateGroup = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.updateSystemModelsUpdateGroup = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiV2UsersCurrentPermissions - Get a user's permissions
  /** 
   * No Documentation Found.
  **/
  GetApiV2UsersCurrentPermissions(
    req: operations.GetApiV2UsersCurrentPermissionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiV2UsersCurrentPermissionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiV2UsersCurrentPermissionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/Users/Current/Permissions";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.GetApiV2UsersCurrentPermissionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiPagedResponseApiModelsUserEffectivePermission = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiPagedResponseApiModelsUserEffectivePermission = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiV2UsersId - Get a specific user
  /** 
   * No Documentation Found.
  **/
  GetApiV2UsersId(
    req: operations.GetApiV2UsersIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiV2UsersIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiV2UsersIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/Users/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetApiV2UsersIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsUser = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsUser = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetApiV2VouchersVoucherCode - Get a voucher
  /** 
   * No Documentation Found.
  **/
  GetApiV2VouchersVoucherCode(
    req: operations.GetApiV2VouchersVoucherCodeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetApiV2VouchersVoucherCodeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetApiV2VouchersVoucherCodeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/Vouchers/{VoucherCode}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.GetApiV2VouchersVoucherCodeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.dealerDbModelsVoucher = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.dealerDbModelsVoucher = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GlobalImageCategoriesGetFile - Gets a file's metadata.
  /** 
   * No Documentation Found.
  **/
  GlobalImageCategoriesGetFile(
    req: operations.GlobalImageCategoriesGetFileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GlobalImageCategoriesGetFileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GlobalImageCategoriesGetFileRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/GlobalImageCategories/{ID}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GlobalImageCategoriesGetFileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.globalResourcesSharedModelsGlobalImageCategory = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.globalResourcesSharedModelsGlobalImageCategory = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GlobalImageCategoriesGetFiles - Get a paged response of file metadata.
  /** 
   * No Documentation Found.
  **/
  GlobalImageCategoriesGetFiles(
    req: operations.GlobalImageCategoriesGetFilesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GlobalImageCategoriesGetFilesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GlobalImageCategoriesGetFilesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/GlobalImageCategories";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.GlobalImageCategoriesGetFilesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiIPagedResponseGlobalResourcesSharedModelsGlobalImageCategory = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiIPagedResponseGlobalResourcesSharedModelsGlobalImageCategory = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GlobalImageCategoriesPostFile - Create the metadata for a file before uploading. The State should be 'Created'.
  /** 
   * No Documentation Found.
  **/
  GlobalImageCategoriesPostFile(
    req: operations.GlobalImageCategoriesPostFileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GlobalImageCategoriesPostFileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GlobalImageCategoriesPostFileRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/GlobalImageCategories";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.GlobalImageCategoriesPostFileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.globalImageCategoriesPostFile200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `application/xml`)) {
                res.globalImageCategoriesPostFile200ApplicationXmlString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.globalImageCategoriesPostFile200TextJsonString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `text/xml`)) {
                res.globalImageCategoriesPostFile200TextXmlString = JSON.stringify(httpRes?.data);
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GlobalImagesDeleteFile - Mark a file as 'Removed'. Disables download of the image and hides metadata from GET all method
  /** 
   * No Documentation Found.
  **/
  GlobalImagesDeleteFile(
    req: operations.GlobalImagesDeleteFileRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GlobalImagesDeleteFileResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GlobalImagesDeleteFileRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/GlobalImages/{ID}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GlobalImagesDeleteFileResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GlobalImagesGetGlobalImage - Gets a GlobalImage's metadata.
  /** 
   * No Documentation Found.
  **/
  GlobalImagesGetGlobalImage(
    req: operations.GlobalImagesGetGlobalImageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GlobalImagesGetGlobalImageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GlobalImagesGetGlobalImageRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/GlobalImages/{ID}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GlobalImagesGetGlobalImageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.globalResourcesSharedModelsGlobalImage = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.globalResourcesSharedModelsGlobalImage = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GlobalImagesGetGlobalImageContents - Download the contents of a GlobalImage. The current State of the GlobalImage should be 'Available'.
  /** 
   * No Documentation Found.
  **/
  GlobalImagesGetGlobalImageContents(
    req: operations.GlobalImagesGetGlobalImageContentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GlobalImagesGetGlobalImageContentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GlobalImagesGetGlobalImageContentsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/GlobalImages/{ID}/ImageContents", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.GlobalImagesGetGlobalImageContentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.systemObject = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.systemObject = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GlobalImagesGetGlobalImages - Get a paged response of GlobalImage.
  /** 
   * No Documentation Found.
  **/
  GlobalImagesGetGlobalImages(
    req: operations.GlobalImagesGetGlobalImagesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GlobalImagesGetGlobalImagesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GlobalImagesGetGlobalImagesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/GlobalImages";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.GlobalImagesGetGlobalImagesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiIPagedResponseGlobalResourcesSharedModelsGlobalImage = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiIPagedResponseGlobalResourcesSharedModelsGlobalImage = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GlobalImagesPutGlobalImageContents - Upload the contents of a GlobalImage. The current State of the File for the GlobalImage should be 'Created'.
  /** 
   * Both the image and thumbnail must be uploaded.
   *                 Set isFullImage = 'True' for Full Image, isFullImage = 'False' for Thumbnail
  **/
  GlobalImagesPutGlobalImageContents(
    req: operations.GlobalImagesPutGlobalImageContentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GlobalImagesPutGlobalImageContentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GlobalImagesPutGlobalImageContentsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/GlobalImages/{ID}/ImageContents", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .put(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GlobalImagesPutGlobalImageContentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.systemObject = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.systemObject = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // JobRunsDeleteJobRun - Delete a JobRun
  /** 
   * Deletes a JobRun. When successful, the response is empty.  If unsuccessful, an appropriate
   *             ApiError is returned.
  **/
  JobRunsDeleteJobRun(
    req: operations.JobRunsDeleteJobRunRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.JobRunsDeleteJobRunResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.JobRunsDeleteJobRunRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/jobRuns/{jobRunID}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.JobRunsDeleteJobRunResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // JobRunsGetJobRun - Get a JobRun by ID
  /** 
   * Gets a JobRun by ID. When successful, the response is the requested JobRun.
   *             If unsuccessful, an appropriate ApiError is returned.
  **/
  JobRunsGetJobRun(
    req: operations.JobRunsGetJobRunRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.JobRunsGetJobRunResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.JobRunsGetJobRunRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/jobRuns/{jobRunID}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.JobRunsGetJobRunResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.buildSystemSharedDtoJobRun = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.buildSystemSharedDtoJobRun = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // JobRunsGetJobRuns - Get JobRuns
  /** 
   * Gets a collection of JobRuns. When successful, the response is a PagedResponse of JobRuns.
   *             If unsuccessful, an appropriate ApiError is returned.
  **/
  JobRunsGetJobRuns(
    req: operations.JobRunsGetJobRunsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.JobRunsGetJobRunsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.JobRunsGetJobRunsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/jobRuns";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.JobRunsGetJobRunsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiPagedResponseBuildSystemSharedDtoJobRun = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiPagedResponseBuildSystemSharedDtoJobRun = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // JobsDeleteJob - Mark the delete flag for the Job
  /** 
   * Deletes a Job. When successful, the response is empty.  If unsuccessful, an appropriate
   *             ApiError is returned.
  **/
  JobsDeleteJob(
    req: operations.JobsDeleteJobRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.JobsDeleteJobResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.JobsDeleteJobRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/jobs/{jobID}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.JobsDeleteJobResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // JobsGetJob - Get a Job by ID
  /** 
   * Gets a Job by ID. When successful, the response is the requested Job.
   *             If unsuccessful, an appropriate ApiError is returned.
  **/
  JobsGetJob(
    req: operations.JobsGetJobRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.JobsGetJobResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.JobsGetJobRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/jobs/{jobID}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.JobsGetJobResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.buildSystemSharedDtoJob = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.buildSystemSharedDtoJob = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // JobsGetJobs - Get Jobs
  /** 
   * Gets a collection of Jobs. When successful, the response is a PagedResponse of Jobs.
   *             If unsuccessful, an appropriate ApiError is returned. 
   *             ///
  **/
  JobsGetJobs(
    req: operations.JobsGetJobsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.JobsGetJobsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.JobsGetJobsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/jobs";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.JobsGetJobsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiPagedResponseBuildSystemSharedDtoJob = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiPagedResponseBuildSystemSharedDtoJob = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // LanguagesCreateLanguage - Add a Language to support for translations. Accepts a Language object. Returns the Id of the created object.
  /** 
   * No Documentation Found.
  **/
  LanguagesCreateLanguage(
    req: operations.LanguagesCreateLanguageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LanguagesCreateLanguageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LanguagesCreateLanguageRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/Languages";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.LanguagesCreateLanguageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.languagesCreateLanguage200ApplicationJsonInt32Integer = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.languagesCreateLanguage200TextJsonInt32Integer = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // LanguagesDeleteLanguage - Remove a Language from those supported for translations. Marks language as deleted.
  /** 
   * No Documentation Found.
  **/
  LanguagesDeleteLanguage(
    req: operations.LanguagesDeleteLanguageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LanguagesDeleteLanguageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LanguagesDeleteLanguageRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/Languages/{LocaleID}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.LanguagesDeleteLanguageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // LanguagesGetLanguage - Get a language by its id. Returns a Language object
  /** 
   * No Documentation Found.
  **/
  LanguagesGetLanguage(
    req: operations.LanguagesGetLanguageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LanguagesGetLanguageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LanguagesGetLanguageRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/Languages/{LocaleID}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.LanguagesGetLanguageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.globalResourcesSharedModelsLanguage = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.globalResourcesSharedModelsLanguage = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // LanguagesGetLanguages - Get a list of the languages for which translations are supported. Returns a PagedResponse of Language objects.
  /** 
   * No Documentation Found.
  **/
  LanguagesGetLanguages(
    req: operations.LanguagesGetLanguagesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LanguagesGetLanguagesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LanguagesGetLanguagesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/Languages";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.LanguagesGetLanguagesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiIPagedResponseGlobalResourcesSharedModelsLanguage = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiIPagedResponseGlobalResourcesSharedModelsLanguage = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // LanguagesUpdateLanguage - Update a language’s description. Accepts a Language object.
  /** 
   * No Documentation Found.
  **/
  LanguagesUpdateLanguage(
    req: operations.LanguagesUpdateLanguageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LanguagesUpdateLanguageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LanguagesUpdateLanguageRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/Languages/{LocaleID}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.LanguagesUpdateLanguageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // LicenseActivationsPost - Create a license activation.
  /** 
   * No Documentation Found.
  **/
  LicenseActivationsPost(
    req: operations.LicenseActivationsPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LicenseActivationsPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LicenseActivationsPostRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/LicenseActivations";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.LicenseActivationsPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.dealerDbModelsLicenseActivation = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.dealerDbModelsLicenseActivation = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // LicenseActivationsPostRegisterEdtLite - Register an EDT Lite with the Server
  /** 
   * No Documentation Found.
  **/
  LicenseActivationsPostRegisterEdtLite(
    req: operations.LicenseActivationsPostRegisterEdtLiteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LicenseActivationsPostRegisterEdtLiteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LicenseActivationsPostRegisterEdtLiteRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/LicenseActivations/RegisterEDTLite";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.LicenseActivationsPostRegisterEdtLiteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.licenseActivationsPostRegisterEdtLite200ApplicationJsonBoolean = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.licenseActivationsPostRegisterEdtLite200TextJsonBoolean = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // LicenseActivationsPut - Update a license activiation.
  /** 
   * No Documentation Found.
  **/
  LicenseActivationsPut(
    req: operations.LicenseActivationsPutRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LicenseActivationsPutResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LicenseActivationsPutRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/LicenseActivations/{ID}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.LicenseActivationsPutResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.dealerDbModelsLicenseActivation = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.dealerDbModelsLicenseActivation = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // LicenseActivationsPutConfirm - Confirm that the client has applied the updated license.
  /** 
   * No Documentation Found.
  **/
  LicenseActivationsPutConfirm(
    req: operations.LicenseActivationsPutConfirmRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LicenseActivationsPutConfirmResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LicenseActivationsPutConfirmRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/LicenseActivations/{ID}/Confirm", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.LicenseActivationsPutConfirmResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // LicensesGet - Gets a list of licenses with the specified criteria.
  /** 
   * No Documentation Found.
  **/
  LicensesGet(
    req: operations.LicensesGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LicensesGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LicensesGetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/Licenses";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.LicensesGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiPagedResponseDealerDbModelsLicense = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiPagedResponseDealerDbModelsLicense = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // LogsGetLog - Get a log by ID
  /** 
   * No Documentation Found.
  **/
  LogsGetLog(
    req: operations.LogsGetLogRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LogsGetLogResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LogsGetLogRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/Logs/{ID}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.LogsGetLogResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsLog = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsLog = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // LogsGetLogs - Get the API System logs, most recent first.
  /** 
   * No Documentation Found.
  **/
  LogsGetLogs(
    req: operations.LogsGetLogsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LogsGetLogsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LogsGetLogsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/Logs";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.LogsGetLogsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiPagedResponseApiModelsLog = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiPagedResponseApiModelsLog = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // LogsPostLog - Add a Log entry
  /** 
   * No Documentation Found.
  **/
  LogsPostLog(
    req: operations.LogsPostLogRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LogsPostLogResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LogsPostLogRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/Logs";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.LogsPostLogResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.logsPostLog200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `application/xml`)) {
                res.logsPostLog200ApplicationXmlString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.logsPostLog200TextJsonString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `text/xml`)) {
                res.logsPostLog200TextXmlString = JSON.stringify(httpRes?.data);
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // NotificationsPostMail - Sends an email message.
  /** 
   * No Documentation Found.
  **/
  NotificationsPostMail(
    req: operations.NotificationsPostMailRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.NotificationsPostMailResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.NotificationsPostMailRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/Notifications";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.NotificationsPostMailResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PackageReportsDefault - Get the package reports for a client.
  /** 
   * No Documentation Found.
  **/
  PackageReportsDefault(
    req: operations.PackageReportsDefaultRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PackageReportsDefaultResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PackageReportsDefaultRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/Clients/{ClientID}/PackageReports", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PackageReportsDefaultResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateSystemModelsPackageReports = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.updateSystemModelsPackageReports = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PackageTypesAddPackageTypeUser - Add a package type that a user can see.
  /** 
   * No Documentation Found.
  **/
  PackageTypesAddPackageTypeUser(
    req: operations.PackageTypesAddPackageTypeUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PackageTypesAddPackageTypeUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PackageTypesAddPackageTypeUserRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/PackageTypes/{id}/Users/{userID}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PackageTypesAddPackageTypeUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PackageTypesDelete - Delete a Package Type.
  /** 
   * No Documentation Found.
  **/
  PackageTypesDelete(
    req: operations.PackageTypesDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PackageTypesDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PackageTypesDeleteRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/PackageTypes/{ID}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PackageTypesDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PackageTypesGet - Get all of the Package Types.
  /** 
   * No Documentation Found.
  **/
  PackageTypesGet(
    req: operations.PackageTypesGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PackageTypesGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PackageTypesGetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/PackageTypes";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.PackageTypesGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiPagedResponseUpdateSystemModelsPackageType = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiPagedResponseUpdateSystemModelsPackageType = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PackageTypesPost - Add a Package Type.
  /** 
   * No Documentation Found.
  **/
  PackageTypesPost(
    req: operations.PackageTypesPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PackageTypesPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PackageTypesPostRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/PackageTypes";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PackageTypesPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.packageTypesPost200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `application/xml`)) {
                res.packageTypesPost200ApplicationXmlString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.packageTypesPost200TextJsonString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `text/xml`)) {
                res.packageTypesPost200TextXmlString = JSON.stringify(httpRes?.data);
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PackageTypesPut - Modify a Package Type.
  /** 
   * No Documentation Found.
  **/
  PackageTypesPut(
    req: operations.PackageTypesPutRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PackageTypesPutResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PackageTypesPutRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/PackageTypes/{ID}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PackageTypesPutResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PackageTypesRemovePackageTypeUser - Deletes a package type a user could see.
  /** 
   * No Documentation Found.
  **/
  PackageTypesRemovePackageTypeUser(
    req: operations.PackageTypesRemovePackageTypeUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PackageTypesRemovePackageTypeUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PackageTypesRemovePackageTypeUserRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/PackageTypes/{id}/Users/{userID}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PackageTypesRemovePackageTypeUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PackageTypetoBundlesDelete - Delete a Package Type to Bundle Relationship.
  /** 
   * No Documentation Found.
  **/
  PackageTypetoBundlesDelete(
    req: operations.PackageTypetoBundlesDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PackageTypetoBundlesDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PackageTypetoBundlesDeleteRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/PackageTypetoBundles";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.PackageTypetoBundlesDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PackageTypetoBundlesGet - Get all of the Package Type to Bundle Relationships.
  /** 
   * No Documentation Found.
  **/
  PackageTypetoBundlesGet(
    req: operations.PackageTypetoBundlesGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PackageTypetoBundlesGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PackageTypetoBundlesGetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/PackageTypetoBundles";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.PackageTypetoBundlesGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiPagedResponseUpdateSystemModelsPackageTypeIDtoBundle = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiPagedResponseUpdateSystemModelsPackageTypeIDtoBundle = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PackageTypetoBundlesPost - Add a new Package Type ID to Bundle Relationship.
  /** 
   * No Documentation Found.
  **/
  PackageTypetoBundlesPost(
    req: operations.PackageTypetoBundlesPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PackageTypetoBundlesPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PackageTypetoBundlesPostRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/PackageTypetoBundles";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PackageTypetoBundlesPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PackageTypetoBundlesPut - Update a Package Type ID to Bundle Relationship.
  /** 
   * No Documentation Found.
  **/
  PackageTypetoBundlesPut(
    req: operations.PackageTypetoBundlesPutRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PackageTypetoBundlesPutResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PackageTypetoBundlesPutRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/PackageTypetoBundles";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PackageTypetoBundlesPutResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PackagesDeletePackage - Delete a Package.
  /** 
   * No Documentation Found.
  **/
  PackagesDeletePackage(
    req: operations.PackagesDeletePackageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PackagesDeletePackageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PackagesDeletePackageRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/Packages/{ID}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PackagesDeletePackageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PackagesGetPackage - Find a Package.
  /** 
   * No Documentation Found.
  **/
  PackagesGetPackage(
    req: operations.PackagesGetPackageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PackagesGetPackageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PackagesGetPackageRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/Packages/{ID}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PackagesGetPackageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateSystemModelsPackage = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.updateSystemModelsPackage = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PackagesGetPackages - List Packages.
  /** 
   * No Documentation Found.
  **/
  PackagesGetPackages(
    req: operations.PackagesGetPackagesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PackagesGetPackagesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PackagesGetPackagesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/Packages";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.PackagesGetPackagesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiPagedResponseUpdateSystemModelsPackage = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiPagedResponseUpdateSystemModelsPackage = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PackagesPostPackage - Add a Package to the Update System.
  /** 
   * No Documentation Found.
  **/
  PackagesPostPackage(
    req: operations.PackagesPostPackageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PackagesPostPackageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PackagesPostPackageRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/Packages";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PackagesPostPackageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.packagesPostPackage200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `application/xml`)) {
                res.packagesPostPackage200ApplicationXmlString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.packagesPostPackage200TextJsonString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `text/xml`)) {
                res.packagesPostPackage200TextXmlString = JSON.stringify(httpRes?.data);
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PackagesPutPackage - Modify a Packge to the Update System.
  /** 
   * No Documentation Found.
  **/
  PackagesPutPackage(
    req: operations.PackagesPutPackageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PackagesPutPackageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PackagesPutPackageRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/Packages/{ID}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PackagesPutPackageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PermissionsDeletePermission - Deletes a Permission
  /** 
   * No Documentation Found.
  **/
  PermissionsDeletePermission(
    req: operations.PermissionsDeletePermissionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PermissionsDeletePermissionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PermissionsDeletePermissionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/Permissions/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PermissionsDeletePermissionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PermissionsGetPermission - Gets a Permission
  /** 
   * No Documentation Found.
  **/
  PermissionsGetPermission(
    req: operations.PermissionsGetPermissionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PermissionsGetPermissionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PermissionsGetPermissionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/Permissions/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PermissionsGetPermissionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsPermission = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsPermission = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PermissionsGetPermissions - List Permissions
  /** 
   * No Documentation Found.
  **/
  PermissionsGetPermissions(
    req: operations.PermissionsGetPermissionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PermissionsGetPermissionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PermissionsGetPermissionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/Permissions";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.PermissionsGetPermissionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiPagedResponseApiModelsPermission = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiPagedResponseApiModelsPermission = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PermissionsPostPermission - Adds a Permission
  /** 
   * No Documentation Found.
  **/
  PermissionsPostPermission(
    req: operations.PermissionsPostPermissionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PermissionsPostPermissionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PermissionsPostPermissionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/Permissions";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PermissionsPostPermissionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.permissionsPostPermission200ApplicationJsonInt32Integer = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.permissionsPostPermission200TextJsonInt32Integer = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PermissionsPutPermission - Updates a Permission
  /** 
   * No Documentation Found.
  **/
  PermissionsPutPermission(
    req: operations.PermissionsPutPermissionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PermissionsPutPermissionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PermissionsPutPermissionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/Permissions/{id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PermissionsPutPermissionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PriorityPackagesDeletePriorityPackages - Delete a Priority Package for a Client.
  /** 
   * No Documentation Found.
  **/
  PriorityPackagesDeletePriorityPackages(
    req: operations.PriorityPackagesDeletePriorityPackagesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PriorityPackagesDeletePriorityPackagesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PriorityPackagesDeletePriorityPackagesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/PriorityPackages/{ID}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PriorityPackagesDeletePriorityPackagesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PriorityPackagesGetPriorityPackage - Get a Priority Packages for a Client.
  /** 
   * No Documentation Found.
  **/
  PriorityPackagesGetPriorityPackage(
    req: operations.PriorityPackagesGetPriorityPackageRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PriorityPackagesGetPriorityPackageResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PriorityPackagesGetPriorityPackageRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/PriorityPackages/{ID}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PriorityPackagesGetPriorityPackageResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateSystemModelsPriorityPackage = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.updateSystemModelsPriorityPackage = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PriorityPackagesGetPriorityPackages - Get a list of Priority Packages by Client.
  /** 
   * No Documentation Found.
  **/
  PriorityPackagesGetPriorityPackages(
    req: operations.PriorityPackagesGetPriorityPackagesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PriorityPackagesGetPriorityPackagesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PriorityPackagesGetPriorityPackagesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/PriorityPackages";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.PriorityPackagesGetPriorityPackagesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiPagedResponseUpdateSystemModelsPriorityPackage = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiPagedResponseUpdateSystemModelsPriorityPackage = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PriorityPackagesPostPriorityPackages - Add a Priority Package for a Client.
  /** 
   * No Documentation Found.
  **/
  PriorityPackagesPostPriorityPackages(
    req: operations.PriorityPackagesPostPriorityPackagesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PriorityPackagesPostPriorityPackagesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PriorityPackagesPostPriorityPackagesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/PriorityPackages";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.PriorityPackagesPostPriorityPackagesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.priorityPackagesPostPriorityPackages200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `application/xml`)) {
                res.priorityPackagesPostPriorityPackages200ApplicationXmlString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.priorityPackagesPostPriorityPackages200TextJsonString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `text/xml`)) {
                res.priorityPackagesPostPriorityPackages200TextXmlString = JSON.stringify(httpRes?.data);
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ReleaseDeleteReleaseBundle - Deletes the association between a release and a bundle.
  /** 
   * No Documentation Found.
  **/
  ReleaseDeleteReleaseBundle(
    req: operations.ReleaseDeleteReleaseBundleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReleaseDeleteReleaseBundleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReleaseDeleteReleaseBundleRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/Releases/{ReleaseId}/Bundle/{BundleId}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ReleaseDeleteReleaseBundleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ReleaseGetRelease - Get a  Release by ID
  /** 
   * Gets a Release by ID. When successful, the response is the requested Release.
   *             If unsuccessful, an appropriate ApiError is returned.
  **/
  ReleaseGetRelease(
    req: operations.ReleaseGetReleaseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReleaseGetReleaseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReleaseGetReleaseRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/Releases/{ReleaseId}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ReleaseGetReleaseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.contentSubmissionSharedBusinessEntitiesRelease = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.contentSubmissionSharedBusinessEntitiesRelease = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ReleaseGetReleases - Get Release
  /** 
   * Gets a collection of Release. When successful, the response is a PagedResponse of Release.
   *             If unsuccessful, an appropriate ApiError is returned.
  **/
  ReleaseGetReleases(
    req: operations.ReleaseGetReleasesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReleaseGetReleasesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReleaseGetReleasesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/Releases";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.ReleaseGetReleasesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiPagedResponseContentSubmissionSharedBusinessEntitiesRelease = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiPagedResponseContentSubmissionSharedBusinessEntitiesRelease = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ReleasePostRelease - Create a Release
  /** 
   * Creates a Release.  The body of the POST is the Release to create.
   *             The ReleaseId will be assigned on creation of the Job.  When successful, the response
   *             is the Release Id.  If unsuccessful, an appropriate ApiError is returned.
  **/
  ReleasePostRelease(
    req: operations.ReleasePostReleaseRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReleasePostReleaseResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReleasePostReleaseRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/Releases";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.ReleasePostReleaseResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.releasePostRelease200ApplicationJsonInt32Integer = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.releasePostRelease200TextJsonInt32Integer = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ReleasePostReleaseBundle - Associates the release with a bundle.
  /** 
   * No Documentation Found.
  **/
  ReleasePostReleaseBundle(
    req: operations.ReleasePostReleaseBundleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReleasePostReleaseBundleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReleasePostReleaseBundleRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/Releases/{ReleaseId}/Bundle/{BundleId}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ReleasePostReleaseBundleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ReleasePutContentDefinition - Update a Release
  /** 
   * Updates a Release.  The body of the PUT is the updated Release.  
   *             When successful, the response is empty.  If unsuccessful, an appropriate ApiError is returned.
  **/
  ReleasePutContentDefinition(
    req: operations.ReleasePutContentDefinitionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReleasePutContentDefinitionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReleasePutContentDefinitionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/Releases/{releaseId}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ReleasePutContentDefinitionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ReportingBundleStatusSummary - Get a summary of all Packages in a Bundle
  /** 
   * No Documentation Found.
  **/
  ReportingBundleStatusSummary(
    req: operations.ReportingBundleStatusSummaryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReportingBundleStatusSummaryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReportingBundleStatusSummaryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/Reporting/BundleStatusSummary";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.ReportingBundleStatusSummaryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiPagedResponseUpdateSystemModelsPackageStatusSummary = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiPagedResponseUpdateSystemModelsPackageStatusSummary = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ReportingBundlesInUpdateGroup - Get a list of bundles for UpdateGroup.
  /** 
   * No Documentation Found.
  **/
  ReportingBundlesInUpdateGroup(
    req: operations.ReportingBundlesInUpdateGroupRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReportingBundlesInUpdateGroupResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReportingBundlesInUpdateGroupRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/Reporting/BundlesInUpdateGroup";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.ReportingBundlesInUpdateGroupResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiPagedResponseUpdateSystemModelsBundle = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiPagedResponseUpdateSystemModelsBundle = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ReportingClientInfo - Get Client Information
  /** 
   * No Documentation Found.
  **/
  ReportingClientInfo(
    req: operations.ReportingClientInfoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReportingClientInfoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReportingClientInfoRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/Reporting/ClientInfo";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.ReportingClientInfoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateSystemModelsClientInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.updateSystemModelsClientInfo = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ReportingCurrentPackagesInUpdateGroup - Get the current packages for an update group.
  /** 
   * No Documentation Found.
  **/
  ReportingCurrentPackagesInUpdateGroup(
    req: operations.ReportingCurrentPackagesInUpdateGroupRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReportingCurrentPackagesInUpdateGroupResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReportingCurrentPackagesInUpdateGroupRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/Reporting/CurrentPackagesInUpdateGroup";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.ReportingCurrentPackagesInUpdateGroupResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateSystemModelsPackages = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.updateSystemModelsPackages = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ReportingGetClient - Get a Client in the Update System.
  /** 
   * No Documentation Found.
  **/
  ReportingGetClient(
    req: operations.ReportingGetClientRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReportingGetClientResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReportingGetClientRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/Reporting/GetClient";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.ReportingGetClientResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateSystemModelsClient = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.updateSystemModelsClient = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ReportingGetSubscriptions - Get a list of current Client Subscriptions.
  /** 
   * No Documentation Found.
  **/
  ReportingGetSubscriptions(
    req: operations.ReportingGetSubscriptionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReportingGetSubscriptionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReportingGetSubscriptionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/Reporting/GetSubscriptions";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.ReportingGetSubscriptionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiPagedResponseUpdateSystemModelsUpdateGroupClientRelationship = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiPagedResponseUpdateSystemModelsUpdateGroupClientRelationship = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ReportingPackageStatusSummary - Get a summary report for a Specific Package
  /** 
   * No Documentation Found.
  **/
  ReportingPackageStatusSummary(
    req: operations.ReportingPackageStatusSummaryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReportingPackageStatusSummaryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReportingPackageStatusSummaryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/Reporting/PackageStatusSummary";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.ReportingPackageStatusSummaryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateSystemModelsPackageStatusSummary = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.updateSystemModelsPackageStatusSummary = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ReportingRegisteredClients - Get a list of subscribed clients
  /** 
   * No Documentation Found.
  **/
  ReportingRegisteredClients(
    req: operations.ReportingRegisteredClientsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReportingRegisteredClientsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReportingRegisteredClientsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/Reporting/RegisteredClients";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.ReportingRegisteredClientsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiPagedResponseUpdateSystemModelsClientStatusUpdateSystemModelsPagedClientStatusMetadata = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiPagedResponseUpdateSystemModelsClientStatusUpdateSystemModelsPagedClientStatusMetadata = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ReportingUpdateGroups - Get a list of Update Groups.  Update Groups are used by the client to register for a specific type of update.
  /** 
   * No Documentation Found.
  **/
  ReportingUpdateGroups(
    req: operations.ReportingUpdateGroupsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReportingUpdateGroupsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReportingUpdateGroupsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/Reporting/UpdateGroups";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.ReportingUpdateGroupsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiPagedResponseUpdateSystemModelsUpdateGroup = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiPagedResponseUpdateSystemModelsUpdateGroup = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ReportingUpdateMetrics - Get data for pie charts in UpdateMetrics.
  /** 
   * No Documentation Found.
  **/
  ReportingUpdateMetrics(
    req: operations.ReportingUpdateMetricsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ReportingUpdateMetricsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ReportingUpdateMetricsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/Reporting/UpdateMetrics";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.ReportingUpdateMetricsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateSystemModelsUpdateMetricsData = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.updateSystemModelsUpdateMetricsData = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // RolesDeleteRole - Deletes a User Role
  /** 
   * No Documentation Found.
  **/
  RolesDeleteRole(
    req: operations.RolesDeleteRoleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RolesDeleteRoleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RolesDeleteRoleRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/Roles/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.RolesDeleteRoleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // RolesGetRole - Gets a User Role
  /** 
   * No Documentation Found.
  **/
  RolesGetRole(
    req: operations.RolesGetRoleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RolesGetRoleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RolesGetRoleRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/Roles/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.RolesGetRoleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsRole = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsRole = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // RolesGetRolePermissions - Get the Permissions for a Role
  /** 
   * No Documentation Found.
  **/
  RolesGetRolePermissions(
    req: operations.RolesGetRolePermissionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RolesGetRolePermissionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RolesGetRolePermissionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/Roles/{id}/Permissions", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.RolesGetRolePermissionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiPagedResponseApiModelsPermission = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiPagedResponseApiModelsPermission = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // RolesGetRoles - List Roles
  /** 
   * No Documentation Found.
  **/
  RolesGetRoles(
    req: operations.RolesGetRolesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RolesGetRolesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RolesGetRolesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/Roles";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.RolesGetRolesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiPagedResponseApiModelsRole = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiPagedResponseApiModelsRole = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // RolesPostRole - Adds a User Role
  /** 
   * No Documentation Found.
  **/
  RolesPostRole(
    req: operations.RolesPostRoleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RolesPostRoleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RolesPostRoleRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/Roles";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.RolesPostRoleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.rolesPostRole200ApplicationJsonInt32Integer = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.rolesPostRole200TextJsonInt32Integer = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // RolesPutRole - Updates a User Role
  /** 
   * No Documentation Found.
  **/
  RolesPutRole(
    req: operations.RolesPutRoleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RolesPutRoleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RolesPutRoleRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/Roles/{id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.RolesPutRoleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // StepsGetStep - Get a Step by ID
  /** 
   * Gets a Step by ID. When successful, the response is the requested Step.
   *             If unsuccessful, an appropriate ApiError is returned.  Steps.Read permission is required.
  **/
  StepsGetStep(
    req: operations.StepsGetStepRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StepsGetStepResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StepsGetStepRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/steps/{stepID}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.StepsGetStepResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.buildSystemSharedDtoStep = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.buildSystemSharedDtoStep = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // StepsGetSteps - Get Steps
  /** 
   * Gets a collection of Steps. When successful, the response is a PagedResponse of Steps.
   *             If unsuccessful, an appropriate ApiError is returned.  Steps.Read permission is required.
  **/
  StepsGetSteps(
    req: operations.StepsGetStepsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StepsGetStepsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StepsGetStepsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/steps";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.StepsGetStepsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiPagedResponseBuildSystemSharedDtoStep = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiPagedResponseBuildSystemSharedDtoStep = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // StringDefinitionsGetDefinition - Get a paged response of Global String Definitions.
  /** 
   * No Documentation Found.
  **/
  StringDefinitionsGetDefinition(
    req: operations.StringDefinitionsGetDefinitionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StringDefinitionsGetDefinitionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StringDefinitionsGetDefinitionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/StringDefinitions/{ID}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.StringDefinitionsGetDefinitionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.globalResourcesSharedModelsStringDefinition = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.globalResourcesSharedModelsStringDefinition = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // StringDefinitionsGetDefinitions - Get a paged response of Global String Definitions.
  /** 
   * No Documentation Found.
  **/
  StringDefinitionsGetDefinitions(
    req: operations.StringDefinitionsGetDefinitionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StringDefinitionsGetDefinitionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StringDefinitionsGetDefinitionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/StringDefinitions";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.StringDefinitionsGetDefinitionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiIPagedResponseGlobalResourcesSharedModelsStringDefinition = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiIPagedResponseGlobalResourcesSharedModelsStringDefinition = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // StringTranslationsGetTranslation - Get a single translation based upon stringId and languageId
  /** 
   * No Documentation Found.
  **/
  StringTranslationsGetTranslation(
    req: operations.StringTranslationsGetTranslationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StringTranslationsGetTranslationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StringTranslationsGetTranslationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/StringTranslations/{stringId}/{languageId}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.StringTranslationsGetTranslationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.globalResourcesSharedModelsStringTranslation = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.globalResourcesSharedModelsStringTranslation = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // StringTranslationsGetTranslations - Get a paged response of Global String Translations.
  /** 
   * No Documentation Found.
  **/
  StringTranslationsGetTranslations(
    req: operations.StringTranslationsGetTranslationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StringTranslationsGetTranslationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StringTranslationsGetTranslationsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/StringTranslations";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.StringTranslationsGetTranslationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiIPagedResponseGlobalResourcesSharedModelsStringTranslation = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiIPagedResponseGlobalResourcesSharedModelsStringTranslation = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // StringTranslationsUpdateTranslation - Update a string value or a state for a string translation.
  /** 
   * No Documentation Found.
  **/
  StringTranslationsUpdateTranslation(
    req: operations.StringTranslationsUpdateTranslationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StringTranslationsUpdateTranslationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StringTranslationsUpdateTranslationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/StringTranslations/{stringId}/{languageId}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.StringTranslationsUpdateTranslationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // TranslationKeysCreateTranslationKey - Create a translationKey object.
  /** 
   * No Documentation Found.
  **/
  TranslationKeysCreateTranslationKey(
    req: operations.TranslationKeysCreateTranslationKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TranslationKeysCreateTranslationKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TranslationKeysCreateTranslationKeyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/TranslationKeys";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.TranslationKeysCreateTranslationKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.translationKeysCreateTranslationKey200ApplicationJsonInt32Integer = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.translationKeysCreateTranslationKey200TextJsonInt32Integer = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // TranslationKeysGet - Get a paged response of TranslationKeys.
  TranslationKeysGet(
    req: operations.TranslationKeysGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TranslationKeysGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TranslationKeysGetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/TranslationKeys";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.TranslationKeysGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiIPagedResponseOasSupportSharedModelsTranslationKey = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiIPagedResponseOasSupportSharedModelsTranslationKey = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // TranslationKeysGetTranslationKey - Get TranslationKey by ID
  /** 
   * No Documentation Found.
  **/
  TranslationKeysGetTranslationKey(
    req: operations.TranslationKeysGetTranslationKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TranslationKeysGetTranslationKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TranslationKeysGetTranslationKeyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/TranslationKeys/{ID}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.TranslationKeysGetTranslationKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.oasSupportSharedModelsTranslationKey = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.oasSupportSharedModelsTranslationKey = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // TranslationKeysUpdateTranslationKey - Update the StringID of the translationKey object.
  /** 
   * No Documentation Found.
  **/
  TranslationKeysUpdateTranslationKey(
    req: operations.TranslationKeysUpdateTranslationKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TranslationKeysUpdateTranslationKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TranslationKeysUpdateTranslationKeyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/TranslationKeys/{ID}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.TranslationKeysUpdateTranslationKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // TranslationRequestsCreateTranslationRequest - Create a translation request. Accepts a TranslationRequest object. Returns the Id of the created object. The state of the TranslationRequest must be ‘NotSubmitted’.
  /** 
   * No Documentation Found.
  **/
  TranslationRequestsCreateTranslationRequest(
    req: operations.TranslationRequestsCreateTranslationRequestRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TranslationRequestsCreateTranslationRequestResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TranslationRequestsCreateTranslationRequestRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/TranslationRequests";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.TranslationRequestsCreateTranslationRequestResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.translationRequestsCreateTranslationRequest200ApplicationJsonInt32Integer = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.translationRequestsCreateTranslationRequest200TextJsonInt32Integer = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // TranslationRequestsGetTranslationRequest - Get a TranslationRequest object by id. Returns TranslationRequest object with its language ids and string ids.
  /** 
   * No Documentation Found.
  **/
  TranslationRequestsGetTranslationRequest(
    req: operations.TranslationRequestsGetTranslationRequestRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TranslationRequestsGetTranslationRequestResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TranslationRequestsGetTranslationRequestRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/TranslationRequests/{Id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.TranslationRequestsGetTranslationRequestResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.globalResourcesSharedModelsTranslationRequest = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.globalResourcesSharedModelsTranslationRequest = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // TranslationRequestsGetTranslationRequests - Get all TranslationRequest objects. Returns a PagedResponse of TranslationRequest objects with their language ids and string ids.
  /** 
   * No Documentation Found.
  **/
  TranslationRequestsGetTranslationRequests(
    req: operations.TranslationRequestsGetTranslationRequestsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TranslationRequestsGetTranslationRequestsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TranslationRequestsGetTranslationRequestsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/TranslationRequests";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.TranslationRequestsGetTranslationRequestsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiIPagedResponseGlobalResourcesSharedModelsTranslationRequest = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiIPagedResponseGlobalResourcesSharedModelsTranslationRequest = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // TranslationRequestsUpdateTranslationRequest - Update a TranslationRequest object by id. Accepts a TranslationRequest object.
  /** 
   * No Documentation Found.
  **/
  TranslationRequestsUpdateTranslationRequest(
    req: operations.TranslationRequestsUpdateTranslationRequestRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TranslationRequestsUpdateTranslationRequestResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TranslationRequestsUpdateTranslationRequestRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/TranslationRequests/{Id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.TranslationRequestsUpdateTranslationRequestResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // TranslationSetsDeleteTranslationSetAttribute - Delete a set of TranslationSetAttribute object
  /** 
   * No Documentation Found.
  **/
  TranslationSetsDeleteTranslationSetAttribute(
    req: operations.TranslationSetsDeleteTranslationSetAttributeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TranslationSetsDeleteTranslationSetAttributeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TranslationSetsDeleteTranslationSetAttributeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/TranslationSetAttributes/{ID}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.TranslationSetsDeleteTranslationSetAttributeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // TranslationSetsGetSourceStrings - Gets the information needed to translate a string in a translation set
  /** 
   * No Documentation Found.
  **/
  TranslationSetsGetSourceStrings(
    req: operations.TranslationSetsGetSourceStringsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TranslationSetsGetSourceStringsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TranslationSetsGetSourceStringsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/TranslationSets/{ID}/SourceStrings", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.TranslationSetsGetSourceStringsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiIPagedResponseGlobalResourcesSharedModelsTranslationSetSourceString = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiIPagedResponseGlobalResourcesSharedModelsTranslationSetSourceString = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // TranslationSetsGetStatistics - Gets the statistics for translation sets such as the language ids and count of string definitions.
  /** 
   * No Documentation Found.
  **/
  TranslationSetsGetStatistics(
    req: operations.TranslationSetsGetStatisticsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TranslationSetsGetStatisticsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TranslationSetsGetStatisticsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/TranslationSets/{ID}/Statistics", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.TranslationSetsGetStatisticsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.globalResourcesSharedModelsTranslationSetStatistics = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.globalResourcesSharedModelsTranslationSetStatistics = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // TranslationSetsGetTranslationSet - Get a TranslationSet object by its id. Related TranslationSetStrings are NOT returned.
  /** 
   * No Documentation Found.
  **/
  TranslationSetsGetTranslationSet(
    req: operations.TranslationSetsGetTranslationSetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TranslationSetsGetTranslationSetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TranslationSetsGetTranslationSetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/TranslationSets/{ID}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.TranslationSetsGetTranslationSetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.globalResourcesSharedModelsTranslationSet = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.globalResourcesSharedModelsTranslationSet = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // TranslationSetsGetTranslationSetAttributes - Get a PagedResponse of TranslationSetAttribute objects
  /** 
   * No Documentation Found.
  **/
  TranslationSetsGetTranslationSetAttributes(
    req: operations.TranslationSetsGetTranslationSetAttributesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TranslationSetsGetTranslationSetAttributesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TranslationSetsGetTranslationSetAttributesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/TranslationSets/{ID}/Attributes", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.TranslationSetsGetTranslationSetAttributesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiIPagedResponseGlobalResourcesSharedModelsTranslationSetAttribute = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiIPagedResponseGlobalResourcesSharedModelsTranslationSetAttribute = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // TranslationSetsGetTranslationSetStrings - Get a PagedResponse of TranslationSetString objects
  /** 
   * No Documentation Found.
  **/
  TranslationSetsGetTranslationSetStrings(
    req: operations.TranslationSetsGetTranslationSetStringsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TranslationSetsGetTranslationSetStringsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TranslationSetsGetTranslationSetStringsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/TranslationSets/{ID}/Strings", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.TranslationSetsGetTranslationSetStringsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiIPagedResponseGlobalResourcesSharedModelsTranslationSetString = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiIPagedResponseGlobalResourcesSharedModelsTranslationSetString = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // TranslationSetsGetTranslationSets - Get a PagedResponse of TranslationSet objects. Related TranslationSetStrings are NOT returned
  /** 
   * No Documentation Found.
  **/
  TranslationSetsGetTranslationSets(
    req: operations.TranslationSetsGetTranslationSetsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TranslationSetsGetTranslationSetsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TranslationSetsGetTranslationSetsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/TranslationSets";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.TranslationSetsGetTranslationSetsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiIPagedResponseGlobalResourcesSharedModelsTranslationSet = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiIPagedResponseGlobalResourcesSharedModelsTranslationSet = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // TranslationSetsPostTranslationSetAttribute - Create a TranslationSetAttribute object
  /** 
   * No Documentation Found.
  **/
  TranslationSetsPostTranslationSetAttribute(
    req: operations.TranslationSetsPostTranslationSetAttributeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TranslationSetsPostTranslationSetAttributeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TranslationSetsPostTranslationSetAttributeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/TranslationSets/{ID}/Attributes", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.TranslationSetsPostTranslationSetAttributeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.translationSetsPostTranslationSetAttribute200ApplicationJsonInt32Integer = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.translationSetsPostTranslationSetAttribute200TextJsonInt32Integer = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // TranslationSetsUpdateTranslationSetAttribute - Update a TranslationSetAttribute object
  /** 
   * No Documentation Found.
  **/
  TranslationSetsUpdateTranslationSetAttribute(
    req: operations.TranslationSetsUpdateTranslationSetAttributeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TranslationSetsUpdateTranslationSetAttributeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TranslationSetsUpdateTranslationSetAttributeRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/TranslationSetAttributes/{ID}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.TranslationSetsUpdateTranslationSetAttributeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateGroupClientRelationshipsGetSubscription - Get a subscription by RelationshipID
  /** 
   * No Documentation Found.
  **/
  UpdateGroupClientRelationshipsGetSubscription(
    req: operations.UpdateGroupClientRelationshipsGetSubscriptionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateGroupClientRelationshipsGetSubscriptionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateGroupClientRelationshipsGetSubscriptionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/UpdateGroupClientRelationships/{RelationshipID}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateGroupClientRelationshipsGetSubscriptionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateSystemModelsUpdateGroupClientRelationship = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.updateSystemModelsUpdateGroupClientRelationship = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateGroupClientRelationshipsGetSubscriptions - Get a list of current Client Subscriptions.
  /** 
   * No Documentation Found.
  **/
  UpdateGroupClientRelationshipsGetSubscriptions(
    req: operations.UpdateGroupClientRelationshipsGetSubscriptionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateGroupClientRelationshipsGetSubscriptionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateGroupClientRelationshipsGetSubscriptionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/UpdateGroupClientRelationships";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.UpdateGroupClientRelationshipsGetSubscriptionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiPagedResponseUpdateSystemModelsUpdateGroupClientRelationship = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiPagedResponseUpdateSystemModelsUpdateGroupClientRelationship = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateGroupClientRelationshipsPostSubscription - Add a subscription
  /** 
   * No Documentation Found.
  **/
  UpdateGroupClientRelationshipsPostSubscription(
    req: operations.UpdateGroupClientRelationshipsPostSubscriptionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateGroupClientRelationshipsPostSubscriptionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateGroupClientRelationshipsPostSubscriptionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/UpdateGroupClientRelationships";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.UpdateGroupClientRelationshipsPostSubscriptionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateGroupClientRelationshipsPostSubscription200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `application/xml`)) {
                res.updateGroupClientRelationshipsPostSubscription200ApplicationXmlString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.updateGroupClientRelationshipsPostSubscription200TextJsonString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `text/xml`)) {
                res.updateGroupClientRelationshipsPostSubscription200TextXmlString = JSON.stringify(httpRes?.data);
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateGroupClientRelationshipsPutSubscription - Updates a Subscription
  /** 
   * No Documentation Found.
  **/
  UpdateGroupClientRelationshipsPutSubscription(
    req: operations.UpdateGroupClientRelationshipsPutSubscriptionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateGroupClientRelationshipsPutSubscriptionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateGroupClientRelationshipsPutSubscriptionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/UpdateGroupClientRelationships/{RelationshipID}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateGroupClientRelationshipsPutSubscriptionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateGroupClientRelationshipsPutSubscriptionByClientIdUpdateGroupId - DEPRECATED. Set client subscription status for an update group.
  /** 
   * No Documentation Found.
  **/
  UpdateGroupClientRelationshipsPutSubscriptionByClientIdUpdateGroupId(
    req: operations.UpdateGroupClientRelationshipsPutSubscriptionByClientIdUpdateGroupIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateGroupClientRelationshipsPutSubscriptionByClientIdUpdateGroupIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateGroupClientRelationshipsPutSubscriptionByClientIdUpdateGroupIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/UpdateGroupClientRelationships";
    
    const client: AxiosInstance = this.defaultClient!;
    
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .put(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateGroupClientRelationshipsPutSubscriptionByClientIdUpdateGroupIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateGroupSubscriptionsDeleteUpdateGroupSubscription - Delete an Update Group Subscription
  /** 
   * No Documentation Found.
  **/
  UpdateGroupSubscriptionsDeleteUpdateGroupSubscription(
    req: operations.UpdateGroupSubscriptionsDeleteUpdateGroupSubscriptionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateGroupSubscriptionsDeleteUpdateGroupSubscriptionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateGroupSubscriptionsDeleteUpdateGroupSubscriptionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/UpdateGroupSubscriptions/{UpdateGroupSubscriptionID}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateGroupSubscriptionsDeleteUpdateGroupSubscriptionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateGroupSubscriptionsGetUpdateGroupSubscription - Get an Update Group Subscription
  /** 
   * No Documentation Found.
  **/
  UpdateGroupSubscriptionsGetUpdateGroupSubscription(
    req: operations.UpdateGroupSubscriptionsGetUpdateGroupSubscriptionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateGroupSubscriptionsGetUpdateGroupSubscriptionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateGroupSubscriptionsGetUpdateGroupSubscriptionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/UpdateGroupSubscriptions/{UpdateGroupSubscriptionID}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateGroupSubscriptionsGetUpdateGroupSubscriptionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateSystemModelsUpdateGroupSubscription = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.updateSystemModelsUpdateGroupSubscription = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateGroupSubscriptionsGetUpdateGroupSubscriptions - Get Update Group Subscriptions
  /** 
   * No Documentation Found.
  **/
  UpdateGroupSubscriptionsGetUpdateGroupSubscriptions(
    req: operations.UpdateGroupSubscriptionsGetUpdateGroupSubscriptionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateGroupSubscriptionsGetUpdateGroupSubscriptionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateGroupSubscriptionsGetUpdateGroupSubscriptionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/UpdateGroupSubscriptions";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.UpdateGroupSubscriptionsGetUpdateGroupSubscriptionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiPagedResponseUpdateSystemModelsUpdateGroupSubscription = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiPagedResponseUpdateSystemModelsUpdateGroupSubscription = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateGroupSubscriptionsPostUpdateGroupSubscription - Add an Update Group Subscription
  /** 
   * No Documentation Found.
  **/
  UpdateGroupSubscriptionsPostUpdateGroupSubscription(
    req: operations.UpdateGroupSubscriptionsPostUpdateGroupSubscriptionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateGroupSubscriptionsPostUpdateGroupSubscriptionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateGroupSubscriptionsPostUpdateGroupSubscriptionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/UpdateGroupSubscriptions";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.UpdateGroupSubscriptionsPostUpdateGroupSubscriptionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateGroupSubscriptionsPostUpdateGroupSubscription200ApplicationJsonInt32Integer = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.updateGroupSubscriptionsPostUpdateGroupSubscription200TextJsonInt32Integer = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateGroupSubscriptionsPutUpdateGroupSubscription - Update an Update Group Subscription
  /** 
   * No Documentation Found.
  **/
  UpdateGroupSubscriptionsPutUpdateGroupSubscription(
    req: operations.UpdateGroupSubscriptionsPutUpdateGroupSubscriptionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateGroupSubscriptionsPutUpdateGroupSubscriptionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateGroupSubscriptionsPutUpdateGroupSubscriptionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/UpdateGroupSubscriptions/{UpdateGroupSubscriptionID}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateGroupSubscriptionsPutUpdateGroupSubscriptionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateGroupsAddUpdateGroupUser - Add an updateGroup that a user can see.
  /** 
   * No Documentation Found.
  **/
  UpdateGroupsAddUpdateGroupUser(
    req: operations.UpdateGroupsAddUpdateGroupUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateGroupsAddUpdateGroupUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateGroupsAddUpdateGroupUserRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/UpdateGroups/{id}/Users/{userID}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateGroupsAddUpdateGroupUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateGroupsDelete - Delete an Update Group.
  /** 
   * No Documentation Found.
  **/
  UpdateGroupsDelete(
    req: operations.UpdateGroupsDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateGroupsDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateGroupsDeleteRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/UpdateGroups/{ID}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateGroupsDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateGroupsGet - Get a list of Update Groups.  Update Groups are used by the client to register for a specific type of update.
  /** 
   * No Documentation Found.
  **/
  UpdateGroupsGet(
    req: operations.UpdateGroupsGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateGroupsGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateGroupsGetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/UpdateGroups";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.UpdateGroupsGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiPagedResponseUpdateSystemModelsUpdateGroup = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiPagedResponseUpdateSystemModelsUpdateGroup = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateGroupsGetUpdateGroupBundles - Get a list of bundles for UpdateGroup.
  /** 
   * No Documentation Found.
  **/
  UpdateGroupsGetUpdateGroupBundles(
    req: operations.UpdateGroupsGetUpdateGroupBundlesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateGroupsGetUpdateGroupBundlesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateGroupsGetUpdateGroupBundlesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/UpdateGroups/{ID}/Bundles", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.UpdateGroupsGetUpdateGroupBundlesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiPagedResponseUpdateSystemModelsBundle = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiPagedResponseUpdateSystemModelsBundle = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateGroupsPost - Add a new Update Group.  The report field is a string that has a dot based request for a specific piece of submitted data.
  /** 
   * No Documentation Found.
  **/
  UpdateGroupsPost(
    req: operations.UpdateGroupsPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateGroupsPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateGroupsPostRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/UpdateGroups";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.UpdateGroupsPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateGroupsPost200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `application/xml`)) {
                res.updateGroupsPost200ApplicationXmlString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.updateGroupsPost200TextJsonString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `text/xml`)) {
                res.updateGroupsPost200TextXmlString = JSON.stringify(httpRes?.data);
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateGroupsPut - Modify an Update Group.
  /** 
   * No Documentation Found.
  **/
  UpdateGroupsPut(
    req: operations.UpdateGroupsPutRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateGroupsPutResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateGroupsPutRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/UpdateGroups/{ID}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateGroupsPutResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateGroupsRemoveUpdateGroupUser - Deletes an update group a user could see.
  /** 
   * No Documentation Found.
  **/
  UpdateGroupsRemoveUpdateGroupUser(
    req: operations.UpdateGroupsRemoveUpdateGroupUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateGroupsRemoveUpdateGroupUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateGroupsRemoveUpdateGroupUserRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/UpdateGroups/{id}/Users/{userID}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateGroupsRemoveUpdateGroupUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateSystemGetCachedFiles - Get a list of Cached Files installed on the client Machine.
  /** 
   * No Documentation Found.
  **/
  UpdateSystemGetCachedFiles(
    req: operations.UpdateSystemGetCachedFilesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSystemGetCachedFilesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSystemGetCachedFilesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/Clients/{ClientID}/CachedFiles", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.UpdateSystemGetCachedFilesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateSystemGetCachedFiles200ApplicationJsonStrings = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.updateSystemGetCachedFiles200TextJsonStrings = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateSystemGetCheckin - Checks the Client ID into the Update System.
  /** 
   * No Documentation Found.
  **/
  UpdateSystemGetCheckin(
    req: operations.UpdateSystemGetCheckinRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSystemGetCheckinResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSystemGetCheckinRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/UpdateSystem";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.UpdateSystemGetCheckinResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateSystemModelsCheckinResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.updateSystemModelsCheckinResult = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UserContentDefinitionsDeleteUserContentDefinition - Delete a UserContentDefinition
  /** 
   * Deletes an UserContentDefinition. When successful, the response is empty.  If unsuccessful, an appropriate
   *             ApiError is returned.
  **/
  UserContentDefinitionsDeleteUserContentDefinition(
    req: operations.UserContentDefinitionsDeleteUserContentDefinitionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UserContentDefinitionsDeleteUserContentDefinitionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UserContentDefinitionsDeleteUserContentDefinitionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/UserContentDefinitions/{userContentDefinitionID}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UserContentDefinitionsDeleteUserContentDefinitionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
          default:
            if (MatchContentType(contentType, `*/*`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UserContentDefinitionsGetUserContentDefinition - Get a UserContentDefinition by ID
  /** 
   * Gets a UserContentDefinition by ID. When successful, the response is the requested UserContentDefinition.
   *             If unsuccessful, an appropriate ApiError is returned.
  **/
  UserContentDefinitionsGetUserContentDefinition(
    req: operations.UserContentDefinitionsGetUserContentDefinitionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UserContentDefinitionsGetUserContentDefinitionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UserContentDefinitionsGetUserContentDefinitionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/UserContentDefinitions/{userContentDefinitionID}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UserContentDefinitionsGetUserContentDefinitionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.contentSubmissionSharedBusinessEntitiesUserContentDefinition = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.contentSubmissionSharedBusinessEntitiesUserContentDefinition = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UserContentDefinitionsGetUserContentDefinitions - Get UserContentDefinitions
  /** 
   * Gets a collection of UserContentDefinitions. When successful, the response is a PagedResponse of UserContentDefinitions.
   *             If unsuccessful, an appropriate ApiError is returned.
  **/
  UserContentDefinitionsGetUserContentDefinitions(
    req: operations.UserContentDefinitionsGetUserContentDefinitionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UserContentDefinitionsGetUserContentDefinitionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UserContentDefinitionsGetUserContentDefinitionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/UserContentDefinitions";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.UserContentDefinitionsGetUserContentDefinitionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiPagedResponseContentSubmissionSharedBusinessEntitiesUserContentDefinition = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiPagedResponseContentSubmissionSharedBusinessEntitiesUserContentDefinition = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UserContentDefinitionsPostUserContentDefinition - Create a UserContentDefinition
  /** 
   * Creates a UserContentDefinition.  The body of the POST is the UserContentDefinition to create.
   *             The UserContentDefinitionID will be assigned on creation of the Job.  When successful, the response
   *             is the UserContentDefinitionID.  If unsuccessful, an appropriate ApiError is returned.
  **/
  UserContentDefinitionsPostUserContentDefinition(
    req: operations.UserContentDefinitionsPostUserContentDefinitionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UserContentDefinitionsPostUserContentDefinitionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UserContentDefinitionsPostUserContentDefinitionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/UserContentDefinitions";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.UserContentDefinitionsPostUserContentDefinitionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.userContentDefinitionsPostUserContentDefinition200ApplicationJsonInt32Integer = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.userContentDefinitionsPostUserContentDefinition200TextJsonInt32Integer = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UserPermissionsGetCurrentUserRoles - Gets the current user's roles
  /** 
   * No Documentation Found.
  **/
  UserPermissionsGetCurrentUserRoles(
    req: operations.UserPermissionsGetCurrentUserRolesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UserPermissionsGetCurrentUserRolesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UserPermissionsGetCurrentUserRolesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/Users/Current/Roles";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.UserPermissionsGetCurrentUserRolesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiPagedResponseApiModelsRole = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiPagedResponseApiModelsRole = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UserPermissionsGetPermissions - Get a user's permissions
  /** 
   * No Documentation Found.
  **/
  UserPermissionsGetPermissions(
    req: operations.UserPermissionsGetPermissionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UserPermissionsGetPermissionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UserPermissionsGetPermissionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/Users/{id}/Permissions", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.UserPermissionsGetPermissionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiPagedResponseApiModelsUserEffectivePermission = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiPagedResponseApiModelsUserEffectivePermission = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UserPermissionsGetRoles - Get a user's roles
  /** 
   * No Documentation Found.
  **/
  UserPermissionsGetRoles(
    req: operations.UserPermissionsGetRolesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UserPermissionsGetRolesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UserPermissionsGetRolesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/Users/{id}/Roles", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.UserPermissionsGetRolesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiPagedResponseApiModelsRole = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiPagedResponseApiModelsRole = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UserPermissionsGetUsers - Get all user's in a role
  /** 
   * No Documentation Found.
  **/
  UserPermissionsGetUsers(
    req: operations.UserPermissionsGetUsersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UserPermissionsGetUsersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UserPermissionsGetUsersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/Roles/{id}/Users", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.UserPermissionsGetUsersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiPagedResponseApiModelsUser = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiPagedResponseApiModelsUser = httpRes?.data;
            }
            break;
          default:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsApiError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UsersDelete - Delete a user
  /** 
   * No Documentation Found.
  **/
  UsersDelete(
    req: operations.UsersDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersDeleteRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/Users/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UsersDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UsersGet - Get users
  /** 
   * No Documentation Found.
  **/
  UsersGet(
    req: operations.UsersGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersGetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/Users";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.UsersGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiPagedResponseApiModelsUser = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiPagedResponseApiModelsUser = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UsersGetCurrentUser - Gets the current user
  /** 
   * No Documentation Found.
  **/
  UsersGetCurrentUser(
    
    config?: AxiosRequestConfig
  ): Promise<operations.UsersGetCurrentUserResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/Users/Current";
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UsersGetCurrentUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsUser = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsUser = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UsersPost - Create a user
  /** 
   * No Documentation Found.
  **/
  UsersPost(
    req: operations.UsersPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersPostRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/Users";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.UsersPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiModelsUser = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiModelsUser = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `text/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UsersPut - Update a user
  /** 
   * No Documentation Found.
  **/
  UsersPut(
    req: operations.UsersPutRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersPutResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersPutRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/Users/{id}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UsersPutResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UsersPutCurrentUser - Update a user
  /** 
   * No Documentation Found.
  **/
  UsersPutCurrentUser(
    req: operations.UsersPutCurrentUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UsersPutCurrentUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UsersPutCurrentUserRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/Users/Current";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UsersPutCurrentUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // VoucherHistoryGetVoucherHistory - Gets voucher history data
  /** 
   * No Documentation Found.
  **/
  VoucherHistoryGetVoucherHistory(
    req: operations.VoucherHistoryGetVoucherHistoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.VoucherHistoryGetVoucherHistoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.VoucherHistoryGetVoucherHistoryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/VoucherHistory";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.VoucherHistoryGetVoucherHistoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiPagedResponseDealerDbModelsVoucherHistory = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiPagedResponseDealerDbModelsVoucherHistory = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // VouchersDelete - Delete a voucher
  /** 
   * No Documentation Found.
  **/
  VouchersDelete(
    req: operations.VouchersDeleteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.VouchersDeleteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.VouchersDeleteRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/Vouchers/{VoucherCode}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.VouchersDeleteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // VouchersGet - Gets a list of vouchers
  /** 
   * No Documentation Found.
  **/
  VouchersGet(
    req: operations.VouchersGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.VouchersGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.VouchersGetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/Vouchers";
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.VouchersGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiPagedResponseDealerDbModelsVoucher = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiPagedResponseDealerDbModelsVoucher = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // VouchersGetVoucherHistory - Get a voucher's history.
  /** 
   * No Documentation Found.
  **/
  VouchersGetVoucherHistory(
    req: operations.VouchersGetVoucherHistoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.VouchersGetVoucherHistoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.VouchersGetVoucherHistoryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/Vouchers/{VoucherCode}/VoucherHistory", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
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
        let res: operations.VouchersGetVoucherHistoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.apiPagedResponseDealerDbModelsVoucherHistory = httpRes?.data;
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.apiPagedResponseDealerDbModelsVoucherHistory = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // VouchersPost - Create a voucher
  /** 
   * No Documentation Found.
  **/
  VouchersPost(
    req: operations.VouchersPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.VouchersPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.VouchersPostRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v2/Vouchers";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
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
        let res: operations.VouchersPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.vouchersPost200ApplicationJsonString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `application/xml`)) {
                res.vouchersPost200ApplicationXmlString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `text/json`)) {
                res.vouchersPost200TextJsonString = JSON.stringify(httpRes?.data);
            }
            if (MatchContentType(contentType, `text/xml`)) {
                res.vouchersPost200TextXmlString = JSON.stringify(httpRes?.data);
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // VouchersPut - Update a voucher
  /** 
   * No Documentation Found.
  **/
  VouchersPut(
    req: operations.VouchersPutRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.VouchersPutResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.VouchersPutRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/api/v2/Vouchers/{VoucherCode}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.defaultClient!;
    const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.VouchersPutResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 204:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}

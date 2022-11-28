import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"http://access-analyzer.{region}.amazonaws.com",
	"https://access-analyzer.{region}.amazonaws.com",
	"http://access-analyzer.{region}.amazonaws.com.cn",
	"https://access-analyzer.{region}.amazonaws.com.cn",
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

/* SDK Documentation: https://docs.aws.amazon.com/access-analyzer/ - Amazon Web Services documentation*/
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
  
  /**
   * applyArchiveRule - Retroactively applies the archive rule to existing findings that meet the archive rule criteria.
  **/
  applyArchiveRule(
    req: operations.ApplyArchiveRuleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ApplyArchiveRuleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ApplyArchiveRuleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/archive-rule";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ApplyArchiveRuleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalServerException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.throttlingException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * cancelPolicyGeneration - Cancels the requested policy generation.
  **/
  cancelPolicyGeneration(
    req: operations.CancelPolicyGenerationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CancelPolicyGenerationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CancelPolicyGenerationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/policy/generation/{jobId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CancelPolicyGenerationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.cancelPolicyGenerationResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalServerException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.throttlingException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createAccessPreview - Creates an access preview that allows you to preview IAM Access Analyzer findings for your resource before deploying resource permissions.
  **/
  createAccessPreview(
    req: operations.CreateAccessPreviewRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateAccessPreviewResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateAccessPreviewRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/access-preview";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateAccessPreviewResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createAccessPreviewResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.conflictException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalServerException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.serviceQuotaExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.throttlingException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createAnalyzer - Creates an analyzer for your account.
  **/
  createAnalyzer(
    req: operations.CreateAnalyzerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateAnalyzerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateAnalyzerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/analyzer";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateAnalyzerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createAnalyzerResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.conflictException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalServerException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.serviceQuotaExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.throttlingException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createArchiveRule - <p>Creates an archive rule for the specified analyzer. Archive rules automatically archive new findings that meet the criteria you define when you create the rule.</p> <p>To learn about filter keys that you can use to create an archive rule, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-reference-filter-keys.html">IAM Access Analyzer filter keys</a> in the <b>IAM User Guide</b>.</p>
  **/
  createArchiveRule(
    req: operations.CreateArchiveRuleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateArchiveRuleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateArchiveRuleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/analyzer/{analyzerName}/archive-rule", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateArchiveRuleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.conflictException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalServerException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.serviceQuotaExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.throttlingException = httpRes?.data;
            }
            break;
          case httpRes?.status == 486:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteAnalyzer - Deletes the specified analyzer. When you delete an analyzer, IAM Access Analyzer is disabled for the account or organization in the current or specific Region. All findings that were generated by the analyzer are deleted. You cannot undo this action.
  **/
  deleteAnalyzer(
    req: operations.DeleteAnalyzerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteAnalyzerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteAnalyzerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/analyzer/{analyzerName}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteAnalyzerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalServerException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.throttlingException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteArchiveRule - Deletes the specified archive rule.
  **/
  deleteArchiveRule(
    req: operations.DeleteArchiveRuleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteArchiveRuleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteArchiveRuleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/analyzer/{analyzerName}/archive-rule/{ruleName}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteArchiveRuleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalServerException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.throttlingException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getAccessPreview - Retrieves information about an access preview for the specified analyzer.
  **/
  getAccessPreview(
    req: operations.GetAccessPreviewRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccessPreviewResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccessPreviewRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/access-preview/{accessPreviewId}#analyzerArn", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAccessPreviewResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getAccessPreviewResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalServerException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.throttlingException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getAnalyzedResource - Retrieves information about a resource that was analyzed.
  **/
  getAnalyzedResource(
    req: operations.GetAnalyzedResourceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAnalyzedResourceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAnalyzedResourceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/analyzed-resource#analyzerArn&resourceArn";
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAnalyzedResourceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getAnalyzedResourceResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalServerException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.throttlingException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getAnalyzer - Retrieves information about the specified analyzer.
  **/
  getAnalyzer(
    req: operations.GetAnalyzerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAnalyzerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAnalyzerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/analyzer/{analyzerName}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAnalyzerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getAnalyzerResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalServerException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.throttlingException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getArchiveRule - <p>Retrieves information about an archive rule.</p> <p>To learn about filter keys that you can use to create an archive rule, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-reference-filter-keys.html">IAM Access Analyzer filter keys</a> in the <b>IAM User Guide</b>.</p>
  **/
  getArchiveRule(
    req: operations.GetArchiveRuleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetArchiveRuleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetArchiveRuleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/analyzer/{analyzerName}/archive-rule/{ruleName}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetArchiveRuleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getArchiveRuleResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalServerException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.throttlingException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getFinding - Retrieves information about the specified finding.
  **/
  getFinding(
    req: operations.GetFindingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFindingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFindingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/finding/{id}#analyzerArn", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetFindingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getFindingResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalServerException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.throttlingException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getGeneratedPolicy - Retrieves the policy that was generated using <code>StartPolicyGeneration</code>. 
  **/
  getGeneratedPolicy(
    req: operations.GetGeneratedPolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetGeneratedPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetGeneratedPolicyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/policy/generation/{jobId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetGeneratedPolicyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getGeneratedPolicyResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalServerException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.throttlingException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listAccessPreviewFindings - Retrieves a list of access preview findings generated by the specified access preview.
  **/
  listAccessPreviewFindings(
    req: operations.ListAccessPreviewFindingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAccessPreviewFindingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAccessPreviewFindingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/access-preview/{accessPreviewId}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

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
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListAccessPreviewFindingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listAccessPreviewFindingsResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.conflictException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalServerException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.throttlingException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listAccessPreviews - Retrieves a list of access previews for the specified analyzer.
  **/
  listAccessPreviews(
    req: operations.ListAccessPreviewsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAccessPreviewsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAccessPreviewsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/access-preview#analyzerArn";
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListAccessPreviewsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listAccessPreviewsResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalServerException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.throttlingException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listAnalyzedResources - Retrieves a list of resources of the specified type that have been analyzed by the specified analyzer..
  **/
  listAnalyzedResources(
    req: operations.ListAnalyzedResourcesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAnalyzedResourcesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAnalyzedResourcesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/analyzed-resource";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

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
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListAnalyzedResourcesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listAnalyzedResourcesResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalServerException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.throttlingException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listAnalyzers - Retrieves a list of analyzers.
  **/
  listAnalyzers(
    req: operations.ListAnalyzersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAnalyzersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAnalyzersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/analyzer";
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListAnalyzersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listAnalyzersResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalServerException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.throttlingException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listArchiveRules - Retrieves a list of archive rules created for the specified analyzer.
  **/
  listArchiveRules(
    req: operations.ListArchiveRulesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListArchiveRulesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListArchiveRulesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/analyzer/{analyzerName}/archive-rule", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListArchiveRulesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listArchiveRulesResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalServerException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.throttlingException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listFindings - <p>Retrieves a list of findings generated by the specified analyzer.</p> <p>To learn about filter keys that you can use to retrieve a list of findings, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-reference-filter-keys.html">IAM Access Analyzer filter keys</a> in the <b>IAM User Guide</b>.</p>
  **/
  listFindings(
    req: operations.ListFindingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListFindingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListFindingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/finding";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

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
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListFindingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listFindingsResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalServerException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.throttlingException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listPolicyGenerations - Lists all of the policy generations requested in the last seven days.
  **/
  listPolicyGenerations(
    req: operations.ListPolicyGenerationsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListPolicyGenerationsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListPolicyGenerationsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/policy/generation";
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
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
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListPolicyGenerationsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listPolicyGenerationsResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalServerException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.throttlingException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listTagsForResource - Retrieves a list of tags applied to the specified resource.
  **/
  listTagsForResource(
    req: operations.ListTagsForResourceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListTagsForResourceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListTagsForResourceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tags/{resourceArn}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    return client
      .request({
        url: url,
        method: "get",
        headers: headers,
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListTagsForResourceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listTagsForResourceResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalServerException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.throttlingException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * startPolicyGeneration - Starts the policy generation request.
  **/
  startPolicyGeneration(
    req: operations.StartPolicyGenerationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StartPolicyGenerationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StartPolicyGenerationRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/policy/generation";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.StartPolicyGenerationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.startPolicyGenerationResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.conflictException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalServerException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.serviceQuotaExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.throttlingException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * startResourceScan - Immediately starts a scan of the policies applied to the specified resource.
  **/
  startResourceScan(
    req: operations.StartResourceScanRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.StartResourceScanResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.StartResourceScanRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/resource/scan";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.StartResourceScanResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalServerException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.throttlingException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * tagResource - Adds a tag to the specified resource.
  **/
  tagResource(
    req: operations.TagResourceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagResourceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagResourceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tags/{resourceArn}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
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
        const res: operations.TagResourceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.tagResourceResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalServerException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.throttlingException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * untagResource - Removes a tag from the specified resource.
  **/
  untagResource(
    req: operations.UntagResourceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UntagResourceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UntagResourceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/tags/{resourceArn}#tagKeys", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "delete",
        headers: headers,
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UntagResourceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.untagResourceResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalServerException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.throttlingException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateArchiveRule - Updates the criteria and values for the specified archive rule.
  **/
  updateArchiveRule(
    req: operations.UpdateArchiveRuleRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateArchiveRuleResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateArchiveRuleRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/analyzer/{analyzerName}/archive-rule/{ruleName}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateArchiveRuleResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalServerException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.throttlingException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateFindings - Updates the status for the specified findings.
  **/
  updateFindings(
    req: operations.UpdateFindingsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateFindingsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateFindingsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/finding";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UpdateFindingsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalServerException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.throttlingException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * validatePolicy - Requests the validation of a policy and returns a list of findings. The findings help you identify issues and provide actionable recommendations to resolve the issue and enable you to author functional policies that meet security best practices. 
  **/
  validatePolicy(
    req: operations.ValidatePolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ValidatePolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ValidatePolicyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/policy/validation";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

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
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ValidatePolicyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.validatePolicyResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalServerException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.throttlingException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}

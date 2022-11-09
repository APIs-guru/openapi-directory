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
  "http://clouddirectory.{region}.amazonaws.com",
  "https://clouddirectory.{region}.amazonaws.com",
  "http://clouddirectory.{region}.amazonaws.com.cn",
  "https://clouddirectory.{region}.amazonaws.com.cn",
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

// SDK Documentation: https://docs.aws.amazon.com/clouddirectory/ - Amazon Web Services documentation
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
  
  // AddFacetToObject - Adds a new <a>Facet</a> to an object. An object can have more than one facet applied on it.
  AddFacetToObject(
    req: operations.AddFacetToObjectRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddFacetToObjectResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddFacetToObjectRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/object/facets#x-amz-data-partition";
    
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
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AddFacetToObjectResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.addFacetToObjectResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.directoryNotEnabledException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 488:
            if (MatchContentType(contentType, `application/json`)) {
                res.facetValidationException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ApplySchema - Copies the input published schema, at the specified version, into the <a>Directory</a> with the same name and version as that of the published schema.
  ApplySchema(
    req: operations.ApplySchemaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ApplySchemaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ApplySchemaRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/schema/apply#x-amz-data-partition";
    
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
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ApplySchemaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.applySchemaResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidAttachmentException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AttachObject - <p>Attaches an existing object to another object. An object can be accessed in two ways:</p> <ol> <li> <p>Using the path</p> </li> <li> <p>Using <code>ObjectIdentifier</code> </p> </li> </ol>
  AttachObject(
    req: operations.AttachObjectRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AttachObjectResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AttachObjectRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/object/attach#x-amz-data-partition";
    
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
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AttachObjectResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.attachObjectResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.directoryNotEnabledException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 488:
            if (MatchContentType(contentType, `application/json`)) {
                res.linkNameAlreadyInUseException = httpRes?.data;
            }
            break;
          case 489:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidAttachmentException = httpRes?.data;
            }
            break;
          case 490:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 491:
            if (MatchContentType(contentType, `application/json`)) {
                res.facetValidationException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AttachPolicy - Attaches a policy object to a regular object. An object can have a limited number of attached policies.
  AttachPolicy(
    req: operations.AttachPolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AttachPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AttachPolicyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/policy/attach#x-amz-data-partition";
    
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
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AttachPolicyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.attachPolicyResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.directoryNotEnabledException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 488:
            if (MatchContentType(contentType, `application/json`)) {
                res.notPolicyException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AttachToIndex - Attaches the specified object to the specified index.
  AttachToIndex(
    req: operations.AttachToIndexRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AttachToIndexResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AttachToIndexRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/index/attach#x-amz-data-partition";
    
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
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AttachToIndexResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.attachToIndexResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.directoryNotEnabledException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidAttachmentException = httpRes?.data;
            }
            break;
          case 488:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 489:
            if (MatchContentType(contentType, `application/json`)) {
                res.linkNameAlreadyInUseException = httpRes?.data;
            }
            break;
          case 490:
            if (MatchContentType(contentType, `application/json`)) {
                res.indexedAttributeMissingException = httpRes?.data;
            }
            break;
          case 491:
            if (MatchContentType(contentType, `application/json`)) {
                res.notIndexException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // AttachTypedLink - Attaches a typed link to a specified source and target object. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
  AttachTypedLink(
    req: operations.AttachTypedLinkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AttachTypedLinkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AttachTypedLinkRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/typedlink/attach#x-amz-data-partition";
    
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
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.AttachTypedLinkResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.attachTypedLinkResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.directoryNotEnabledException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 488:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidAttachmentException = httpRes?.data;
            }
            break;
          case 489:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 490:
            if (MatchContentType(contentType, `application/json`)) {
                res.facetValidationException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // BatchRead - Performs all the read operations in a batch. 
  BatchRead(
    req: operations.BatchReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BatchReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BatchReadRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/batchread#x-amz-data-partition";
    
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
        let res: operations.BatchReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.batchReadResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.directoryNotEnabledException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // BatchWrite - Performs all the write operations in a batch. Either all the operations succeed or none.
  BatchWrite(
    req: operations.BatchWriteRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BatchWriteResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BatchWriteRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/batchwrite#x-amz-data-partition";
    
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
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.BatchWriteResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.batchWriteResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.directoryNotEnabledException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.batchWriteException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateDirectory - Creates a <a>Directory</a> by copying the published schema into the directory. A directory cannot be created without a schema.
  CreateDirectory(
    req: operations.CreateDirectoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateDirectoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateDirectoryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/directory/create#x-amz-data-partition";
    
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
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateDirectoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.createDirectoryResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.directoryAlreadyExistsException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateFacet - Creates a new <a>Facet</a> in a schema. Facet creation is allowed only in development or applied schemas.
  CreateFacet(
    req: operations.CreateFacetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateFacetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateFacetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/facet/create#x-amz-data-partition";
    
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
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateFacetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.createFacetResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.facetAlreadyExistsException = httpRes?.data;
            }
            break;
          case 488:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidRuleException = httpRes?.data;
            }
            break;
          case 489:
            if (MatchContentType(contentType, `application/json`)) {
                res.facetValidationException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateIndex - Creates an index object. See <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_indexing.html">Indexing</a> for more information.
  CreateIndex(
    req: operations.CreateIndexRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateIndexResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateIndexRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/index#x-amz-data-partition";
    
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
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateIndexResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.createIndexResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.directoryNotEnabledException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 488:
            if (MatchContentType(contentType, `application/json`)) {
                res.facetValidationException = httpRes?.data;
            }
            break;
          case 489:
            if (MatchContentType(contentType, `application/json`)) {
                res.linkNameAlreadyInUseException = httpRes?.data;
            }
            break;
          case 490:
            if (MatchContentType(contentType, `application/json`)) {
                res.unsupportedIndexTypeException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateObject - Creates an object in a <a>Directory</a>. Additionally attaches the object to a parent, if a parent reference and <code>LinkName</code> is specified. An object is simply a collection of <a>Facet</a> attributes. You can also use this API call to create a policy object, if the facet from which you create the object is a policy facet. 
  CreateObject(
    req: operations.CreateObjectRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateObjectResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateObjectRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/object#x-amz-data-partition";
    
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
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateObjectResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.createObjectResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.directoryNotEnabledException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 488:
            if (MatchContentType(contentType, `application/json`)) {
                res.facetValidationException = httpRes?.data;
            }
            break;
          case 489:
            if (MatchContentType(contentType, `application/json`)) {
                res.linkNameAlreadyInUseException = httpRes?.data;
            }
            break;
          case 490:
            if (MatchContentType(contentType, `application/json`)) {
                res.unsupportedIndexTypeException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateSchema - <p>Creates a new schema in a development state. A schema can exist in three phases:</p> <ul> <li> <p> <i>Development:</i> This is a mutable phase of the schema. All new schemas are in the development phase. Once the schema is finalized, it can be published.</p> </li> <li> <p> <i>Published:</i> Published schemas are immutable and have a version associated with them.</p> </li> <li> <p> <i>Applied:</i> Applied schemas are mutable in a way that allows you to add new schema facets. You can also add new, nonrequired attributes to existing schema facets. You can apply only published schemas to directories. </p> </li> </ul>
  CreateSchema(
    req: operations.CreateSchemaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateSchemaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateSchemaRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/schema/create";
    
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
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateSchemaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.createSchemaResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.schemaAlreadyExistsException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // CreateTypedLinkFacet - Creates a <a>TypedLinkFacet</a>. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
  CreateTypedLinkFacet(
    req: operations.CreateTypedLinkFacetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateTypedLinkFacetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateTypedLinkFacetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/typedlink/facet/create#x-amz-data-partition";
    
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
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.CreateTypedLinkFacetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.createTypedLinkFacetResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.facetAlreadyExistsException = httpRes?.data;
            }
            break;
          case 488:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidRuleException = httpRes?.data;
            }
            break;
          case 489:
            if (MatchContentType(contentType, `application/json`)) {
                res.facetValidationException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteDirectory - Deletes a directory. Only disabled directories can be deleted. A deleted directory cannot be undone. Exercise extreme caution when deleting directories.
  DeleteDirectory(
    req: operations.DeleteDirectoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteDirectoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteDirectoryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/directory#x-amz-data-partition";
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteDirectoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteDirectoryResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.directoryNotDisabledException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.directoryDeletedException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 488:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteFacet - Deletes a given <a>Facet</a>. All attributes and <a>Rule</a>s that are associated with the facet will be deleted. Only development schema facets are allowed deletion.
  DeleteFacet(
    req: operations.DeleteFacetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteFacetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteFacetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/facet/delete#x-amz-data-partition";
    
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
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteFacetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteFacetResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.facetNotFoundException = httpRes?.data;
            }
            break;
          case 488:
            if (MatchContentType(contentType, `application/json`)) {
                res.facetInUseException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteObject - Deletes an object and its associated attributes. Only objects with no children and no parents can be deleted.
  DeleteObject(
    req: operations.DeleteObjectRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteObjectResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteObjectRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/object/delete#x-amz-data-partition";
    
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
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteObjectResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteObjectResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.directoryNotEnabledException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 488:
            if (MatchContentType(contentType, `application/json`)) {
                res.objectNotDetachedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteSchema - Deletes a given schema. Schemas in a development and published state can only be deleted. 
  DeleteSchema(
    req: operations.DeleteSchemaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteSchemaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteSchemaRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/schema#x-amz-data-partition";
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteSchemaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteSchemaResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.stillContainsLinksException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DeleteTypedLinkFacet - Deletes a <a>TypedLinkFacet</a>. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
  DeleteTypedLinkFacet(
    req: operations.DeleteTypedLinkFacetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteTypedLinkFacetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteTypedLinkFacetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/typedlink/facet/delete#x-amz-data-partition";
    
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
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteTypedLinkFacetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteTypedLinkFacetResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.facetNotFoundException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DetachFromIndex - Detaches the specified object from the specified index.
  DetachFromIndex(
    req: operations.DetachFromIndexRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DetachFromIndexResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DetachFromIndexRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/index/detach#x-amz-data-partition";
    
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
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DetachFromIndexResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.detachFromIndexResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.directoryNotEnabledException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 488:
            if (MatchContentType(contentType, `application/json`)) {
                res.objectAlreadyDetachedException = httpRes?.data;
            }
            break;
          case 489:
            if (MatchContentType(contentType, `application/json`)) {
                res.notIndexException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DetachObject - Detaches a given object from the parent object. The object that is to be detached from the parent is specified by the link name.
  DetachObject(
    req: operations.DetachObjectRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DetachObjectResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DetachObjectRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/object/detach#x-amz-data-partition";
    
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
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DetachObjectResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.detachObjectResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.directoryNotEnabledException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 488:
            if (MatchContentType(contentType, `application/json`)) {
                res.notNodeException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DetachPolicy - Detaches a policy from an object.
  DetachPolicy(
    req: operations.DetachPolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DetachPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DetachPolicyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/policy/detach#x-amz-data-partition";
    
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
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DetachPolicyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.detachPolicyResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.directoryNotEnabledException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 488:
            if (MatchContentType(contentType, `application/json`)) {
                res.notPolicyException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DetachTypedLink - Detaches a typed link from a specified source and target object. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
  DetachTypedLink(
    req: operations.DetachTypedLinkRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DetachTypedLinkResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DetachTypedLinkRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/typedlink/detach#x-amz-data-partition";
    
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
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DetachTypedLinkResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.directoryNotEnabledException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 488:
            if (MatchContentType(contentType, `application/json`)) {
                res.facetValidationException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // DisableDirectory - Disables the specified directory. Disabled directories cannot be read or written to. Only enabled directories can be disabled. Disabled directories may be reenabled.
  DisableDirectory(
    req: operations.DisableDirectoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DisableDirectoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DisableDirectoryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/directory/disable#x-amz-data-partition";
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DisableDirectoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.disableDirectoryResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.directoryDeletedException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // EnableDirectory - Enables the specified directory. Only disabled directories can be enabled. Once enabled, the directory can then be read and written to.
  EnableDirectory(
    req: operations.EnableDirectoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.EnableDirectoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.EnableDirectoryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/directory/enable#x-amz-data-partition";
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .put(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.EnableDirectoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.enableDirectoryResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.directoryDeletedException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetAppliedSchemaVersion - Returns current applied schema version ARN, including the minor version in use.
  GetAppliedSchemaVersion(
    req: operations.GetAppliedSchemaVersionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAppliedSchemaVersionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAppliedSchemaVersionRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/schema/getappliedschema";
    
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
        let res: operations.GetAppliedSchemaVersionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getAppliedSchemaVersionResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetDirectory - Retrieves metadata about a directory.
  GetDirectory(
    req: operations.GetDirectoryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDirectoryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDirectoryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/directory/get#x-amz-data-partition";
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetDirectoryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getDirectoryResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
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

  
  // GetFacet - Gets details of the <a>Facet</a>, such as facet name, attributes, <a>Rule</a>s, or <code>ObjectType</code>. You can call this on all kinds of schema facets -- published, development, or applied.
  GetFacet(
    req: operations.GetFacetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetFacetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetFacetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/facet#x-amz-data-partition";
    
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
        let res: operations.GetFacetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getFacetResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.facetNotFoundException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetLinkAttributes - Retrieves attributes that are associated with a typed link.
  GetLinkAttributes(
    req: operations.GetLinkAttributesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLinkAttributesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLinkAttributesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/typedlink/attributes/get#x-amz-data-partition";
    
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
        let res: operations.GetLinkAttributesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getLinkAttributesResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.directoryNotEnabledException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 488:
            if (MatchContentType(contentType, `application/json`)) {
                res.facetValidationException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetObjectAttributes - Retrieves attributes within a facet that are associated with an object.
  GetObjectAttributes(
    req: operations.GetObjectAttributesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetObjectAttributesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetObjectAttributesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/object/attributes/get#x-amz-data-partition";
    
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
        let res: operations.GetObjectAttributesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getObjectAttributesResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.directoryNotEnabledException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 488:
            if (MatchContentType(contentType, `application/json`)) {
                res.facetValidationException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetObjectInformation - Retrieves metadata about an object.
  GetObjectInformation(
    req: operations.GetObjectInformationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetObjectInformationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetObjectInformationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/object/information#x-amz-data-partition";
    
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
        let res: operations.GetObjectInformationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getObjectInformationResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.directoryNotEnabledException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSchemaAsJson - Retrieves a JSON representation of the schema. See <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_schemas.html#jsonformat">JSON Schema Format</a> for more information.
  GetSchemaAsJson(
    req: operations.GetSchemaAsJsonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSchemaAsJsonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSchemaAsJsonRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/schema/json#x-amz-data-partition";
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...config?.headers};
    
    return client
      .post(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSchemaAsJsonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getSchemaAsJsonResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetTypedLinkFacetInformation - Returns the identity attribute order for a specific <a>TypedLinkFacet</a>. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
  GetTypedLinkFacetInformation(
    req: operations.GetTypedLinkFacetInformationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTypedLinkFacetInformationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTypedLinkFacetInformationRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/typedlink/facet/get#x-amz-data-partition";
    
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
        let res: operations.GetTypedLinkFacetInformationResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getTypedLinkFacetInformationResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidNextTokenException = httpRes?.data;
            }
            break;
          case 488:
            if (MatchContentType(contentType, `application/json`)) {
                res.facetNotFoundException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListAppliedSchemaArns - Lists schema major versions applied to a directory. If <code>SchemaArn</code> is provided, lists the minor version.
  ListAppliedSchemaArns(
    req: operations.ListAppliedSchemaArnsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAppliedSchemaArnsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAppliedSchemaArnsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/schema/applied";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
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
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListAppliedSchemaArnsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listAppliedSchemaArnsResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidNextTokenException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListAttachedIndices - Lists indices attached to the specified object.
  ListAttachedIndices(
    req: operations.ListAttachedIndicesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListAttachedIndicesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListAttachedIndicesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/object/indices#x-amz-data-partition";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
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
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListAttachedIndicesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listAttachedIndicesResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.directoryNotEnabledException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListDevelopmentSchemaArns - Retrieves each Amazon Resource Name (ARN) of schemas in the development state.
  ListDevelopmentSchemaArns(
    req: operations.ListDevelopmentSchemaArnsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListDevelopmentSchemaArnsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListDevelopmentSchemaArnsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/schema/development";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
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
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListDevelopmentSchemaArnsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listDevelopmentSchemaArnsResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidNextTokenException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListDirectories - Lists directories created within an account.
  ListDirectories(
    req: operations.ListDirectoriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListDirectoriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListDirectoriesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/directory/list";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
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
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListDirectoriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listDirectoriesResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidNextTokenException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListFacetAttributes - Retrieves attributes attached to the facet.
  ListFacetAttributes(
    req: operations.ListFacetAttributesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListFacetAttributesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListFacetAttributesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/facet/attributes#x-amz-data-partition";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
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
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListFacetAttributesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listFacetAttributesResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.facetNotFoundException = httpRes?.data;
            }
            break;
          case 488:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidNextTokenException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListFacetNames - Retrieves the names of facets that exist in a schema.
  ListFacetNames(
    req: operations.ListFacetNamesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListFacetNamesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListFacetNamesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/facet/list#x-amz-data-partition";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
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
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListFacetNamesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listFacetNamesResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidNextTokenException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListIncomingTypedLinks - Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a> information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
  ListIncomingTypedLinks(
    req: operations.ListIncomingTypedLinksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListIncomingTypedLinksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListIncomingTypedLinksRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/typedlink/incoming#x-amz-data-partition";
    
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
        let res: operations.ListIncomingTypedLinksResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listIncomingTypedLinksResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.directoryNotEnabledException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 488:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidNextTokenException = httpRes?.data;
            }
            break;
          case 489:
            if (MatchContentType(contentType, `application/json`)) {
                res.facetValidationException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListIndex - Lists objects attached to the specified index.
  ListIndex(
    req: operations.ListIndexRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListIndexResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListIndexRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/index/targets#x-amz-data-partition";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
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
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListIndexResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listIndexResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.facetValidationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.directoryNotEnabledException = httpRes?.data;
            }
            break;
          case 488:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidNextTokenException = httpRes?.data;
            }
            break;
          case 489:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 490:
            if (MatchContentType(contentType, `application/json`)) {
                res.notIndexException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListObjectAttributes - Lists all attributes that are associated with an object. 
  ListObjectAttributes(
    req: operations.ListObjectAttributesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListObjectAttributesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListObjectAttributesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/object/attributes#x-amz-data-partition";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
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
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListObjectAttributesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listObjectAttributesResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.directoryNotEnabledException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 488:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidNextTokenException = httpRes?.data;
            }
            break;
          case 489:
            if (MatchContentType(contentType, `application/json`)) {
                res.facetValidationException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListObjectChildren - Returns a paginated list of child objects that are associated with a given object.
  ListObjectChildren(
    req: operations.ListObjectChildrenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListObjectChildrenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListObjectChildrenRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/object/children#x-amz-data-partition";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
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
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListObjectChildrenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listObjectChildrenResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.directoryNotEnabledException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 488:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidNextTokenException = httpRes?.data;
            }
            break;
          case 489:
            if (MatchContentType(contentType, `application/json`)) {
                res.notNodeException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListObjectParentPaths - <p>Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects. For more information about objects, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_key_concepts.html#dirstructure">Directory Structure</a>.</p> <p>Use this API to evaluate all parents for an object. The call returns all objects from the root of the directory up to the requested object. The API returns the number of paths based on user-defined <code>MaxResults</code>, in case there are multiple paths to the parent. The order of the paths and nodes returned is consistent among multiple API calls unless the objects are deleted or moved. Paths not leading to the directory root are ignored from the target object.</p>
  ListObjectParentPaths(
    req: operations.ListObjectParentPathsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListObjectParentPathsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListObjectParentPathsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/object/parentpaths#x-amz-data-partition";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
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
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListObjectParentPathsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listObjectParentPathsResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.directoryNotEnabledException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidNextTokenException = httpRes?.data;
            }
            break;
          case 488:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListObjectParents - Lists parent objects that are associated with a given object in pagination fashion.
  ListObjectParents(
    req: operations.ListObjectParentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListObjectParentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListObjectParentsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/object/parent#x-amz-data-partition";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
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
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListObjectParentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listObjectParentsResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.directoryNotEnabledException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 488:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidNextTokenException = httpRes?.data;
            }
            break;
          case 489:
            if (MatchContentType(contentType, `application/json`)) {
                res.cannotListParentOfRootException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListObjectPolicies - Returns policies attached to an object in pagination fashion.
  ListObjectPolicies(
    req: operations.ListObjectPoliciesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListObjectPoliciesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListObjectPoliciesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/object/policy#x-amz-data-partition";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
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
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListObjectPoliciesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listObjectPoliciesResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.directoryNotEnabledException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 488:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidNextTokenException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListOutgoingTypedLinks - Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a> information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
  ListOutgoingTypedLinks(
    req: operations.ListOutgoingTypedLinksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListOutgoingTypedLinksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListOutgoingTypedLinksRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/typedlink/outgoing#x-amz-data-partition";
    
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
        let res: operations.ListOutgoingTypedLinksResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listOutgoingTypedLinksResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.directoryNotEnabledException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 488:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidNextTokenException = httpRes?.data;
            }
            break;
          case 489:
            if (MatchContentType(contentType, `application/json`)) {
                res.facetValidationException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListPolicyAttachments - Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached.
  ListPolicyAttachments(
    req: operations.ListPolicyAttachmentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListPolicyAttachmentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListPolicyAttachmentsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/policy/attachment#x-amz-data-partition";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
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
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListPolicyAttachmentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listPolicyAttachmentsResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.directoryNotEnabledException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidNextTokenException = httpRes?.data;
            }
            break;
          case 488:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 489:
            if (MatchContentType(contentType, `application/json`)) {
                res.notPolicyException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListPublishedSchemaArns - Lists the major version families of each published schema. If a major version ARN is provided as <code>SchemaArn</code>, the minor version revisions in that family are listed instead.
  ListPublishedSchemaArns(
    req: operations.ListPublishedSchemaArnsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListPublishedSchemaArnsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListPublishedSchemaArnsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/schema/published";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
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
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListPublishedSchemaArnsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listPublishedSchemaArnsResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidNextTokenException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListTagsForResource - Returns tags for a resource. Tagging is currently supported only for directories with a limit of 50 tags per directory. All 50 tags are returned for a given directory with this API call.
  ListTagsForResource(
    req: operations.ListTagsForResourceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListTagsForResourceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListTagsForResourceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/tags";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
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
      .post(url, body, {
        headers: headers,
        ...requestConfig,
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
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidTaggingRequestException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListTypedLinkFacetAttributes - Returns a paginated list of all attribute definitions for a particular <a>TypedLinkFacet</a>. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
  ListTypedLinkFacetAttributes(
    req: operations.ListTypedLinkFacetAttributesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListTypedLinkFacetAttributesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListTypedLinkFacetAttributesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/typedlink/facet/attributes#x-amz-data-partition";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
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
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListTypedLinkFacetAttributesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listTypedLinkFacetAttributesResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.facetNotFoundException = httpRes?.data;
            }
            break;
          case 488:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidNextTokenException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // ListTypedLinkFacetNames - Returns a paginated list of <code>TypedLink</code> facet names for a particular schema. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
  ListTypedLinkFacetNames(
    req: operations.ListTypedLinkFacetNamesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListTypedLinkFacetNamesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListTypedLinkFacetNamesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/typedlink/facet/list#x-amz-data-partition";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
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
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.ListTypedLinkFacetNamesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.listTypedLinkFacetNamesResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidNextTokenException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // LookupPolicy - Lists all policies from the root of the <a>Directory</a> to the object specified. If there are no policies present, an empty list is returned. If policies are present, and if some objects don't have the policies attached, it returns the <code>ObjectIdentifier</code> for such objects. If policies are present, it returns <code>ObjectIdentifier</code>, <code>policyId</code>, and <code>policyType</code>. Paths that don't lead to the root from the target object are ignored. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_key_concepts.html#policies">Policies</a>.
  LookupPolicy(
    req: operations.LookupPolicyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LookupPolicyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LookupPolicyRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/policy/lookup#x-amz-data-partition";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    
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
      .post(url, body, {
        headers: headers,
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.LookupPolicyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.lookupPolicyResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.directoryNotEnabledException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidNextTokenException = httpRes?.data;
            }
            break;
          case 488:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PublishSchema - Publishes a development schema with a major version and a recommended minor version.
  PublishSchema(
    req: operations.PublishSchemaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PublishSchemaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PublishSchemaRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/schema/publish#x-amz-data-partition";
    
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
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PublishSchemaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.publishSchemaResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.schemaAlreadyPublishedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutSchemaFromJson - Allows a schema to be updated using JSON upload. Only available for development schemas. See <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_schemas.html#jsonformat">JSON Schema Format</a> for more information.
  PutSchemaFromJson(
    req: operations.PutSchemaFromJsonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutSchemaFromJsonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutSchemaFromJsonRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/schema/json#x-amz-data-partition";
    
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
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutSchemaFromJsonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.putSchemaFromJsonResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidSchemaDocException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidRuleException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // RemoveFacetFromObject - Removes the specified facet from the specified object.
  RemoveFacetFromObject(
    req: operations.RemoveFacetFromObjectRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RemoveFacetFromObjectResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RemoveFacetFromObjectRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/object/facets/delete#x-amz-data-partition";
    
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
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.RemoveFacetFromObjectResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.removeFacetFromObjectResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.directoryNotEnabledException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 488:
            if (MatchContentType(contentType, `application/json`)) {
                res.facetValidationException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // TagResource - An API operation for adding tags to a resource.
  TagResource(
    req: operations.TagResourceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagResourceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagResourceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/tags/add";
    
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
      .put(url, body, {
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
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidTaggingRequestException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UntagResource - An API operation for removing tags from a resource.
  UntagResource(
    req: operations.UntagResourceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UntagResourceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UntagResourceRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/tags/remove";
    
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
      .put(url, body, {
        headers: headers,
        ...config,
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
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidTaggingRequestException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateFacet - <p>Does the following:</p> <ol> <li> <p>Adds new <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> <li> <p>Updates existing <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> <li> <p>Deletes existing <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> </ol>
  UpdateFacet(
    req: operations.UpdateFacetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateFacetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateFacetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/facet#x-amz-data-partition";
    
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
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateFacetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateFacetResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidFacetUpdateException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 488:
            if (MatchContentType(contentType, `application/json`)) {
                res.facetNotFoundException = httpRes?.data;
            }
            break;
          case 489:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidRuleException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateLinkAttributes - Updates a given typed link’s attributes. Attributes to be updated must not contribute to the typed link’s identity, as defined by its <code>IdentityAttributeOrder</code>.
  UpdateLinkAttributes(
    req: operations.UpdateLinkAttributesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateLinkAttributesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateLinkAttributesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/typedlink/attributes/update#x-amz-data-partition";
    
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
        let res: operations.UpdateLinkAttributesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateLinkAttributesResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.directoryNotEnabledException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 488:
            if (MatchContentType(contentType, `application/json`)) {
                res.facetValidationException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateObjectAttributes - Updates a given object's attributes.
  UpdateObjectAttributes(
    req: operations.UpdateObjectAttributesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateObjectAttributesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateObjectAttributesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/object/update#x-amz-data-partition";
    
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
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateObjectAttributesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateObjectAttributesResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.directoryNotEnabledException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 488:
            if (MatchContentType(contentType, `application/json`)) {
                res.linkNameAlreadyInUseException = httpRes?.data;
            }
            break;
          case 489:
            if (MatchContentType(contentType, `application/json`)) {
                res.facetValidationException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateSchema - Updates the schema name with a new name. Only development schema names can be updated.
  UpdateSchema(
    req: operations.UpdateSchemaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateSchemaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateSchemaRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/schema/update#x-amz-data-partition";
    
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
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateSchemaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateSchemaResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpdateTypedLinkFacet - Updates a <a>TypedLinkFacet</a>. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
  UpdateTypedLinkFacet(
    req: operations.UpdateTypedLinkFacetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateTypedLinkFacetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateTypedLinkFacetRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/typedlink/facet#x-amz-data-partition";
    
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
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpdateTypedLinkFacetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.updateTypedLinkFacetResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.facetValidationException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidFacetUpdateException = httpRes?.data;
            }
            break;
          case 488:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 489:
            if (MatchContentType(contentType, `application/json`)) {
                res.facetNotFoundException = httpRes?.data;
            }
            break;
          case 490:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidRuleException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpgradeAppliedSchema - Upgrades a single directory in-place using the <code>PublishedSchemaArn</code> with schema updates found in <code>MinorVersion</code>. Backwards-compatible minor version upgrades are instantaneously available for readers on all objects in the directory. Note: This is a synchronous API call and upgrades only one schema on a given directory per call. To upgrade multiple directories from one schema, you would need to call this API on each directory.
  UpgradeAppliedSchema(
    req: operations.UpgradeAppliedSchemaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpgradeAppliedSchemaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpgradeAppliedSchemaRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/schema/upgradeapplied";
    
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
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpgradeAppliedSchemaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.upgradeAppliedSchemaResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.incompatibleSchemaException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidAttachmentException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // UpgradePublishedSchema - Upgrades a published schema under a new minor version revision using the current contents of <code>DevelopmentSchemaArn</code>.
  UpgradePublishedSchema(
    req: operations.UpgradePublishedSchemaRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpgradePublishedSchemaResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpgradePublishedSchemaRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/amazonclouddirectory/2017-01-11/schema/upgradepublished";
    
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
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.UpgradePublishedSchemaResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.upgradePublishedSchemaResponse = httpRes?.data;
            }
            break;
          case 480:
            if (MatchContentType(contentType, `application/json`)) {
                res.internalServiceException = httpRes?.data;
            }
            break;
          case 481:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidArnException = httpRes?.data;
            }
            break;
          case 482:
            if (MatchContentType(contentType, `application/json`)) {
                res.retryableConflictException = httpRes?.data;
            }
            break;
          case 483:
            if (MatchContentType(contentType, `application/json`)) {
                res.validationException = httpRes?.data;
            }
            break;
          case 484:
            if (MatchContentType(contentType, `application/json`)) {
                res.incompatibleSchemaException = httpRes?.data;
            }
            break;
          case 485:
            if (MatchContentType(contentType, `application/json`)) {
                res.accessDeniedException = httpRes?.data;
            }
            break;
          case 486:
            if (MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case 487:
            if (MatchContentType(contentType, `application/json`)) {
                res.invalidAttachmentException = httpRes?.data;
            }
            break;
          case 488:
            if (MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}

import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"http://dynamodb.{region}.amazonaws.com",
	"https://dynamodb.{region}.amazonaws.com",
	"http://dynamodb.{region}.amazonaws.com.cn",
	"https://dynamodb.{region}.amazonaws.com.cn",
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

/* SDK Documentation: https://docs.aws.amazon.com/dynamodb/ - Amazon Web Services documentation*/
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
   * batchGetItem - <p>Retrieves the attributes for multiple items from multiple tables using their primary keys.</p> <p>The maximum number of item attributes that can be retrieved for a single operation is 100. Also, the number of items retrieved is constrained by a 1 MB the size limit. If the response size limit is exceeded or a partial result is returned due to an internal processing failure, Amazon DynamoDB returns an <code>UnprocessedKeys</code> value so you can retry the operation starting with the next item to get.</p> <p>Amazon DynamoDB automatically adjusts the number of items returned per page to enforce this limit. For example, even if you ask to retrieve 100 items, but each individual item is 50k in size, the system returns 20 items and an appropriate <code>UnprocessedKeys</code> value so you can get the next page of results. If necessary, your application needs its own logic to assemble the pages of results into one set.</p>
  **/
  batchGetItem(
    req: operations.BatchGetItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BatchGetItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BatchGetItemRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=DynamoDB_20111205.BatchGetItem";

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
        const res: operations.BatchGetItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.batchGetItemOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.provisionedThroughputExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.requestLimitExceeded = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalServerError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * batchWriteItem - <p>Allows to execute a batch of Put and/or Delete Requests for many tables in a single call. A total of 25 requests are allowed.</p> <p>There are no transaction guarantees provided by this API. It does not allow conditional puts nor does it support return values.</p>
  **/
  batchWriteItem(
    req: operations.BatchWriteItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BatchWriteItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BatchWriteItemRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=DynamoDB_20111205.BatchWriteItem";

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
        const res: operations.BatchWriteItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.batchWriteItemOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.provisionedThroughputExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.requestLimitExceeded = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalServerError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * createTable - <p>Adds a new table to your account.</p> <p>The table name must be unique among those associated with the AWS Account issuing the request, and the AWS Region that receives the request (e.g. <code>us-east-1</code>).</p> <p>The <code>CreateTable</code> operation triggers an asynchronous workflow to begin creating the table. Amazon DynamoDB immediately returns the state of the table (<code>CREATING</code>) until the table is in the <code>ACTIVE</code> state. Once the table is in the <code>ACTIVE</code> state, you can perform data plane operations.</p>
  **/
  createTable(
    req: operations.CreateTableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateTableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateTableRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=DynamoDB_20111205.CreateTable";

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
        const res: operations.CreateTableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.createTableOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.resourceInUseException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalServerError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteItem - <p>Deletes a single item in a table by primary key.</p> <p>You can perform a conditional delete operation that deletes the item if it exists, or if it has an expected attribute value.</p>
  **/
  deleteItem(
    req: operations.DeleteItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteItemRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=DynamoDB_20111205.DeleteItem";

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
        const res: operations.DeleteItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.deleteItemOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.conditionalCheckFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.provisionedThroughputExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.requestLimitExceeded = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalServerError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * deleteTable - <p>Deletes a table and all of its items.</p> <p>If the table is in the <code>ACTIVE</code> state, you can delete it. If a table is in <code>CREATING</code> or <code>UPDATING</code> states then Amazon DynamoDB returns a <code>ResourceInUseException</code>. If the specified table does not exist, Amazon DynamoDB returns a <code>ResourceNotFoundException</code>.</p>
  **/
  deleteTable(
    req: operations.DeleteTableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteTableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteTableRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=DynamoDB_20111205.DeleteTable";

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
        const res: operations.DeleteTableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.deleteTableOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.resourceInUseException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalServerError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * describeTable - <p>Retrieves information about the table, including the current status of the table, the primary key schema and when the table was created.</p> <p>If the table does not exist, Amazon DynamoDB returns a <code>ResourceNotFoundException</code>.</p>
  **/
  describeTable(
    req: operations.DescribeTableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DescribeTableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DescribeTableRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=DynamoDB_20111205.DescribeTable";

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
        const res: operations.DescribeTableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.describeTableOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalServerError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getItem - <p>Retrieves a set of Attributes for an item that matches the primary key.</p> <p>The <code>GetItem</code> operation provides an eventually-consistent read by default. If eventually-consistent reads are not acceptable for your application, use <code>ConsistentRead</code>. Although this operation might take longer than a standard read, it always returns the last updated value.</p>
  **/
  getItem(
    req: operations.GetItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetItemRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=DynamoDB_20111205.GetItem";

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
        const res: operations.GetItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getItemOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.provisionedThroughputExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.requestLimitExceeded = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalServerError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * listTables - Retrieves a paginated list of table names created by the AWS Account of the caller in the AWS Region (e.g. <code>us-east-1</code>).
  **/
  listTables(
    req: operations.ListTablesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListTablesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListTablesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=DynamoDB_20111205.ListTables";

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
        const res: operations.ListTablesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.listTablesOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalServerError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putItem - <p>Creates a new item, or replaces an old item with a new item (including all the attributes).</p> <p>If an item already exists in the specified table with the same primary key, the new item completely replaces the existing item. You can perform a conditional put (insert a new item if one with the specified primary key doesn't exist), or replace an existing item if it has certain attribute values.</p>
  **/
  putItem(
    req: operations.PutItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutItemRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=DynamoDB_20111205.PutItem";

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
        const res: operations.PutItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.putItemOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.conditionalCheckFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.provisionedThroughputExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.requestLimitExceeded = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalServerError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * query - <p>Gets the values of one or more items and its attributes by primary key (composite primary key, only).</p> <p>Narrow the scope of the query using comparison operators on the <code>RangeKeyValue</code> of the composite key. Use the <code>ScanIndexForward</code> parameter to get results in forward or reverse order by range key.</p>
  **/
  query(
    req: operations.QueryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.QueryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.QueryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=DynamoDB_20111205.Query";

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
        const res: operations.QueryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.queryOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.provisionedThroughputExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.requestLimitExceeded = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalServerError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * scan - <p>Retrieves one or more items and its attributes by performing a full scan of a table.</p> <p>Provide a <code>ScanFilter</code> to get more specific results.</p>
  **/
  scan(
    req: operations.ScanRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ScanResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ScanRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=DynamoDB_20111205.Scan";

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
        const res: operations.ScanResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.scanOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.provisionedThroughputExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.requestLimitExceeded = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalServerError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateItem - <p>Edits an existing item's attributes.</p> <p>You can perform a conditional update (insert a new attribute name-value pair if it doesn't exist, or replace an existing name-value pair if it has certain expected attribute values).</p>
  **/
  updateItem(
    req: operations.UpdateItemRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateItemResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateItemRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=DynamoDB_20111205.UpdateItem";

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
        const res: operations.UpdateItemResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateItemOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.conditionalCheckFailedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.provisionedThroughputExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.requestLimitExceeded = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalServerError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * updateTable - <p>Updates the provisioned throughput for the given table.</p> <p>Setting the throughput for a table helps you manage performance and is part of the Provisioned Throughput feature of Amazon DynamoDB.</p>
  **/
  updateTable(
    req: operations.UpdateTableRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateTableResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateTableRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=DynamoDB_20111205.UpdateTable";

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
        const res: operations.UpdateTableResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.updateTableOutput = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.resourceInUseException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.resourceNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.limitExceededException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.internalServerError = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}

import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://dynamodb.{region}.amazonaws.com", "https://dynamodb.{region}.amazonaws.com", "http://dynamodb.{region}.amazonaws.com.cn", "https://dynamodb.{region}.amazonaws.com.cn"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * batchGetItem - <p>Retrieves the attributes for multiple items from multiple tables using their primary keys.</p> <p>The maximum number of item attributes that can be retrieved for a single operation is 100. Also, the number of items retrieved is constrained by a 1 MB the size limit. If the response size limit is exceeded or a partial result is returned due to an internal processing failure, Amazon DynamoDB returns an <code>UnprocessedKeys</code> value so you can retry the operation starting with the next item to get.</p> <p>Amazon DynamoDB automatically adjusts the number of items returned per page to enforce this limit. For example, even if you ask to retrieve 100 items, but each individual item is 50k in size, the system returns 20 items and an appropriate <code>UnprocessedKeys</code> value so you can get the next page of results. If necessary, your application needs its own logic to assemble the pages of results into one set.</p>
    **/
    batchGetItem(req: operations.BatchGetItemRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetItemResponse>;
    /**
     * batchWriteItem - <p>Allows to execute a batch of Put and/or Delete Requests for many tables in a single call. A total of 25 requests are allowed.</p> <p>There are no transaction guarantees provided by this API. It does not allow conditional puts nor does it support return values.</p>
    **/
    batchWriteItem(req: operations.BatchWriteItemRequest, config?: AxiosRequestConfig): Promise<operations.BatchWriteItemResponse>;
    /**
     * createTable - <p>Adds a new table to your account.</p> <p>The table name must be unique among those associated with the AWS Account issuing the request, and the AWS Region that receives the request (e.g. <code>us-east-1</code>).</p> <p>The <code>CreateTable</code> operation triggers an asynchronous workflow to begin creating the table. Amazon DynamoDB immediately returns the state of the table (<code>CREATING</code>) until the table is in the <code>ACTIVE</code> state. Once the table is in the <code>ACTIVE</code> state, you can perform data plane operations.</p>
    **/
    createTable(req: operations.CreateTableRequest, config?: AxiosRequestConfig): Promise<operations.CreateTableResponse>;
    /**
     * deleteItem - <p>Deletes a single item in a table by primary key.</p> <p>You can perform a conditional delete operation that deletes the item if it exists, or if it has an expected attribute value.</p>
    **/
    deleteItem(req: operations.DeleteItemRequest, config?: AxiosRequestConfig): Promise<operations.DeleteItemResponse>;
    /**
     * deleteTable - <p>Deletes a table and all of its items.</p> <p>If the table is in the <code>ACTIVE</code> state, you can delete it. If a table is in <code>CREATING</code> or <code>UPDATING</code> states then Amazon DynamoDB returns a <code>ResourceInUseException</code>. If the specified table does not exist, Amazon DynamoDB returns a <code>ResourceNotFoundException</code>.</p>
    **/
    deleteTable(req: operations.DeleteTableRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTableResponse>;
    /**
     * describeTable - <p>Retrieves information about the table, including the current status of the table, the primary key schema and when the table was created.</p> <p>If the table does not exist, Amazon DynamoDB returns a <code>ResourceNotFoundException</code>.</p>
    **/
    describeTable(req: operations.DescribeTableRequest, config?: AxiosRequestConfig): Promise<operations.DescribeTableResponse>;
    /**
     * getItem - <p>Retrieves a set of Attributes for an item that matches the primary key.</p> <p>The <code>GetItem</code> operation provides an eventually-consistent read by default. If eventually-consistent reads are not acceptable for your application, use <code>ConsistentRead</code>. Although this operation might take longer than a standard read, it always returns the last updated value.</p>
    **/
    getItem(req: operations.GetItemRequest, config?: AxiosRequestConfig): Promise<operations.GetItemResponse>;
    /**
     * listTables - Retrieves a paginated list of table names created by the AWS Account of the caller in the AWS Region (e.g. <code>us-east-1</code>).
    **/
    listTables(req: operations.ListTablesRequest, config?: AxiosRequestConfig): Promise<operations.ListTablesResponse>;
    /**
     * putItem - <p>Creates a new item, or replaces an old item with a new item (including all the attributes).</p> <p>If an item already exists in the specified table with the same primary key, the new item completely replaces the existing item. You can perform a conditional put (insert a new item if one with the specified primary key doesn't exist), or replace an existing item if it has certain attribute values.</p>
    **/
    putItem(req: operations.PutItemRequest, config?: AxiosRequestConfig): Promise<operations.PutItemResponse>;
    /**
     * query - <p>Gets the values of one or more items and its attributes by primary key (composite primary key, only).</p> <p>Narrow the scope of the query using comparison operators on the <code>RangeKeyValue</code> of the composite key. Use the <code>ScanIndexForward</code> parameter to get results in forward or reverse order by range key.</p>
    **/
    query(req: operations.QueryRequest, config?: AxiosRequestConfig): Promise<operations.QueryResponse>;
    /**
     * scan - <p>Retrieves one or more items and its attributes by performing a full scan of a table.</p> <p>Provide a <code>ScanFilter</code> to get more specific results.</p>
    **/
    scan(req: operations.ScanRequest, config?: AxiosRequestConfig): Promise<operations.ScanResponse>;
    /**
     * updateItem - <p>Edits an existing item's attributes.</p> <p>You can perform a conditional update (insert a new attribute name-value pair if it doesn't exist, or replace an existing name-value pair if it has certain expected attribute values).</p>
    **/
    updateItem(req: operations.UpdateItemRequest, config?: AxiosRequestConfig): Promise<operations.UpdateItemResponse>;
    /**
     * updateTable - <p>Updates the provisioned throughput for the given table.</p> <p>Setting the throughput for a table helps you manage performance and is part of the Provisioned Throughput feature of Amazon DynamoDB.</p>
    **/
    updateTable(req: operations.UpdateTableRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTableResponse>;
}
export {};

import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://appsync.{region}.amazonaws.com", "https://appsync.{region}.amazonaws.com", "http://appsync.{region}.amazonaws.com.cn", "https://appsync.{region}.amazonaws.com.cn"];
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
     * createApiCache - Creates a cache for the GraphQL API.
    **/
    createApiCache(req: operations.CreateApiCacheRequest, config?: AxiosRequestConfig): Promise<operations.CreateApiCacheResponse>;
    /**
     * createApiKey - Creates a unique key that you can distribute to clients who are executing your API.
    **/
    createApiKey(req: operations.CreateApiKeyRequest, config?: AxiosRequestConfig): Promise<operations.CreateApiKeyResponse>;
    /**
     * createDataSource - Creates a <code>DataSource</code> object.
    **/
    createDataSource(req: operations.CreateDataSourceRequest, config?: AxiosRequestConfig): Promise<operations.CreateDataSourceResponse>;
    /**
     * createFunction - <p>Creates a <code>Function</code> object.</p> <p>A function is a reusable entity. Multiple functions can be used to compose the resolver logic.</p>
    **/
    createFunction(req: operations.CreateFunctionRequest, config?: AxiosRequestConfig): Promise<operations.CreateFunctionResponse>;
    /**
     * createGraphqlApi - Creates a <code>GraphqlApi</code> object.
    **/
    createGraphqlApi(req: operations.CreateGraphqlApiRequest, config?: AxiosRequestConfig): Promise<operations.CreateGraphqlApiResponse>;
    /**
     * createResolver - <p>Creates a <code>Resolver</code> object.</p> <p>A resolver converts incoming requests into a format that a data source can understand and converts the data source's responses into GraphQL.</p>
    **/
    createResolver(req: operations.CreateResolverRequest, config?: AxiosRequestConfig): Promise<operations.CreateResolverResponse>;
    /**
     * createType - Creates a <code>Type</code> object.
    **/
    createType(req: operations.CreateTypeRequest, config?: AxiosRequestConfig): Promise<operations.CreateTypeResponse>;
    /**
     * deleteApiCache - Deletes an <code>ApiCache</code> object.
    **/
    deleteApiCache(req: operations.DeleteApiCacheRequest, config?: AxiosRequestConfig): Promise<operations.DeleteApiCacheResponse>;
    /**
     * deleteApiKey - Deletes an API key.
    **/
    deleteApiKey(req: operations.DeleteApiKeyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteApiKeyResponse>;
    /**
     * deleteDataSource - Deletes a <code>DataSource</code> object.
    **/
    deleteDataSource(req: operations.DeleteDataSourceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDataSourceResponse>;
    /**
     * deleteFunction - Deletes a <code>Function</code>.
    **/
    deleteFunction(req: operations.DeleteFunctionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFunctionResponse>;
    /**
     * deleteGraphqlApi - Deletes a <code>GraphqlApi</code> object.
    **/
    deleteGraphqlApi(req: operations.DeleteGraphqlApiRequest, config?: AxiosRequestConfig): Promise<operations.DeleteGraphqlApiResponse>;
    /**
     * deleteResolver - Deletes a <code>Resolver</code> object.
    **/
    deleteResolver(req: operations.DeleteResolverRequest, config?: AxiosRequestConfig): Promise<operations.DeleteResolverResponse>;
    /**
     * deleteType - Deletes a <code>Type</code> object.
    **/
    deleteType(req: operations.DeleteTypeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTypeResponse>;
    /**
     * flushApiCache - Flushes an <code>ApiCache</code> object.
    **/
    flushApiCache(req: operations.FlushApiCacheRequest, config?: AxiosRequestConfig): Promise<operations.FlushApiCacheResponse>;
    /**
     * getApiCache - Retrieves an <code>ApiCache</code> object.
    **/
    getApiCache(req: operations.GetApiCacheRequest, config?: AxiosRequestConfig): Promise<operations.GetApiCacheResponse>;
    /**
     * getDataSource - Retrieves a <code>DataSource</code> object.
    **/
    getDataSource(req: operations.GetDataSourceRequest, config?: AxiosRequestConfig): Promise<operations.GetDataSourceResponse>;
    /**
     * getFunction - Get a <code>Function</code>.
    **/
    getFunction(req: operations.GetFunctionRequest, config?: AxiosRequestConfig): Promise<operations.GetFunctionResponse>;
    /**
     * getGraphqlApi - Retrieves a <code>GraphqlApi</code> object.
    **/
    getGraphqlApi(req: operations.GetGraphqlApiRequest, config?: AxiosRequestConfig): Promise<operations.GetGraphqlApiResponse>;
    /**
     * getIntrospectionSchema - Retrieves the introspection schema for a GraphQL API.
    **/
    getIntrospectionSchema(req: operations.GetIntrospectionSchemaRequest, config?: AxiosRequestConfig): Promise<operations.GetIntrospectionSchemaResponse>;
    /**
     * getResolver - Retrieves a <code>Resolver</code> object.
    **/
    getResolver(req: operations.GetResolverRequest, config?: AxiosRequestConfig): Promise<operations.GetResolverResponse>;
    /**
     * getSchemaCreationStatus - Retrieves the current status of a schema creation operation.
    **/
    getSchemaCreationStatus(req: operations.GetSchemaCreationStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetSchemaCreationStatusResponse>;
    /**
     * getType - Retrieves a <code>Type</code> object.
    **/
    getType(req: operations.GetTypeRequest, config?: AxiosRequestConfig): Promise<operations.GetTypeResponse>;
    /**
     * listApiKeys - <p>Lists the API keys for a given API.</p> <note> <p>API keys are deleted automatically 60 days after they expire. However, they may still be included in the response until they have actually been deleted. You can safely call <code>DeleteApiKey</code> to manually delete a key before it's automatically deleted.</p> </note>
    **/
    listApiKeys(req: operations.ListApiKeysRequest, config?: AxiosRequestConfig): Promise<operations.ListApiKeysResponse>;
    /**
     * listDataSources - Lists the data sources for a given API.
    **/
    listDataSources(req: operations.ListDataSourcesRequest, config?: AxiosRequestConfig): Promise<operations.ListDataSourcesResponse>;
    /**
     * listFunctions - List multiple functions.
    **/
    listFunctions(req: operations.ListFunctionsRequest, config?: AxiosRequestConfig): Promise<operations.ListFunctionsResponse>;
    /**
     * listGraphqlApis - Lists your GraphQL APIs.
    **/
    listGraphqlApis(req: operations.ListGraphqlApisRequest, config?: AxiosRequestConfig): Promise<operations.ListGraphqlApisResponse>;
    /**
     * listResolvers - Lists the resolvers for a given API and type.
    **/
    listResolvers(req: operations.ListResolversRequest, config?: AxiosRequestConfig): Promise<operations.ListResolversResponse>;
    /**
     * listResolversByFunction - List the resolvers that are associated with a specific function.
    **/
    listResolversByFunction(req: operations.ListResolversByFunctionRequest, config?: AxiosRequestConfig): Promise<operations.ListResolversByFunctionResponse>;
    /**
     * listTagsForResource - Lists the tags for a resource.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * listTypes - Lists the types for a given API.
    **/
    listTypes(req: operations.ListTypesRequest, config?: AxiosRequestConfig): Promise<operations.ListTypesResponse>;
    /**
     * startSchemaCreation - <p>Adds a new schema to your GraphQL API.</p> <p>This operation is asynchronous. Use to determine when it has completed.</p>
    **/
    startSchemaCreation(req: operations.StartSchemaCreationRequest, config?: AxiosRequestConfig): Promise<operations.StartSchemaCreationResponse>;
    /**
     * tagResource - Tags a resource with user-supplied tags.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - Untags a resource.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateApiCache - Updates the cache for the GraphQL API.
    **/
    updateApiCache(req: operations.UpdateApiCacheRequest, config?: AxiosRequestConfig): Promise<operations.UpdateApiCacheResponse>;
    /**
     * updateApiKey - Updates an API key. The key can be updated while it is not deleted.
    **/
    updateApiKey(req: operations.UpdateApiKeyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateApiKeyResponse>;
    /**
     * updateDataSource - Updates a <code>DataSource</code> object.
    **/
    updateDataSource(req: operations.UpdateDataSourceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDataSourceResponse>;
    /**
     * updateFunction - Updates a <code>Function</code> object.
    **/
    updateFunction(req: operations.UpdateFunctionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFunctionResponse>;
    /**
     * updateGraphqlApi - Updates a <code>GraphqlApi</code> object.
    **/
    updateGraphqlApi(req: operations.UpdateGraphqlApiRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGraphqlApiResponse>;
    /**
     * updateResolver - Updates a <code>Resolver</code> object.
    **/
    updateResolver(req: operations.UpdateResolverRequest, config?: AxiosRequestConfig): Promise<operations.UpdateResolverResponse>;
    /**
     * updateType - Updates a <code>Type</code> object.
    **/
    updateType(req: operations.UpdateTypeRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTypeResponse>;
}
export {};

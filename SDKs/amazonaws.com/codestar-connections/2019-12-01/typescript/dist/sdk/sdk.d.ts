import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://codestar-connections.{region}.amazonaws.com", "https://codestar-connections.{region}.amazonaws.com", "http://codestar-connections.{region}.amazonaws.com.cn", "https://codestar-connections.{region}.amazonaws.com.cn"];
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
     * createConnection - Creates a connection that can then be given to other AWS services like CodePipeline so that it can access third-party code repositories. The connection is in pending status until the third-party connection handshake is completed from the console.
    **/
    createConnection(req: operations.CreateConnectionRequest, config?: AxiosRequestConfig): Promise<operations.CreateConnectionResponse>;
    /**
     * createHost - <p>Creates a resource that represents the infrastructure where a third-party provider is installed. The host is used when you create connections to an installed third-party provider type, such as GitHub Enterprise Server. You create one host for all connections to that provider.</p> <note> <p>A host created through the CLI or the SDK is in `PENDING` status by default. You can make its status `AVAILABLE` by setting up the host in the console.</p> </note>
    **/
    createHost(req: operations.CreateHostRequest, config?: AxiosRequestConfig): Promise<operations.CreateHostResponse>;
    /**
     * deleteConnection - The connection to be deleted.
    **/
    deleteConnection(req: operations.DeleteConnectionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConnectionResponse>;
    /**
     * deleteHost - <p>The host to be deleted. Before you delete a host, all connections associated to the host must be deleted.</p> <note> <p>A host cannot be deleted if it is in the VPC_CONFIG_INITIALIZING or VPC_CONFIG_DELETING state.</p> </note>
    **/
    deleteHost(req: operations.DeleteHostRequest, config?: AxiosRequestConfig): Promise<operations.DeleteHostResponse>;
    /**
     * getConnection - Returns the connection ARN and details such as status, owner, and provider type.
    **/
    getConnection(req: operations.GetConnectionRequest, config?: AxiosRequestConfig): Promise<operations.GetConnectionResponse>;
    /**
     * getHost - Returns the host ARN and details such as status, provider type, endpoint, and, if applicable, the VPC configuration.
    **/
    getHost(req: operations.GetHostRequest, config?: AxiosRequestConfig): Promise<operations.GetHostResponse>;
    /**
     * listConnections - Lists the connections associated with your account.
    **/
    listConnections(req: operations.ListConnectionsRequest, config?: AxiosRequestConfig): Promise<operations.ListConnectionsResponse>;
    /**
     * listHosts - Lists the hosts associated with your account.
    **/
    listHosts(req: operations.ListHostsRequest, config?: AxiosRequestConfig): Promise<operations.ListHostsResponse>;
    /**
     * listTagsForResource - Gets the set of key-value pairs (metadata) that are used to manage the resource.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * tagResource - Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - Removes tags from an AWS resource.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateHost - Updates a specified host with the provided configurations.
    **/
    updateHost(req: operations.UpdateHostRequest, config?: AxiosRequestConfig): Promise<operations.UpdateHostResponse>;
}
export {};

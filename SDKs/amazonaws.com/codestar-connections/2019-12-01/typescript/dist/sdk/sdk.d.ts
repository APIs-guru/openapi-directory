import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    CreateConnection(req: operations.CreateConnectionRequest, config?: AxiosRequestConfig): Promise<operations.CreateConnectionResponse>;
    CreateHost(req: operations.CreateHostRequest, config?: AxiosRequestConfig): Promise<operations.CreateHostResponse>;
    DeleteConnection(req: operations.DeleteConnectionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConnectionResponse>;
    DeleteHost(req: operations.DeleteHostRequest, config?: AxiosRequestConfig): Promise<operations.DeleteHostResponse>;
    GetConnection(req: operations.GetConnectionRequest, config?: AxiosRequestConfig): Promise<operations.GetConnectionResponse>;
    GetHost(req: operations.GetHostRequest, config?: AxiosRequestConfig): Promise<operations.GetHostResponse>;
    ListConnections(req: operations.ListConnectionsRequest, config?: AxiosRequestConfig): Promise<operations.ListConnectionsResponse>;
    ListHosts(req: operations.ListHostsRequest, config?: AxiosRequestConfig): Promise<operations.ListHostsResponse>;
    ListTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    TagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    UntagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    UpdateHost(req: operations.UpdateHostRequest, config?: AxiosRequestConfig): Promise<operations.UpdateHostResponse>;
}
export {};

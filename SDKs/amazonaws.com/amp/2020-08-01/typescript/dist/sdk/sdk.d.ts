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
    CreateWorkspace(req: operations.CreateWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.CreateWorkspaceResponse>;
    DeleteWorkspace(req: operations.DeleteWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWorkspaceResponse>;
    DescribeWorkspace(req: operations.DescribeWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.DescribeWorkspaceResponse>;
    ListTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    ListWorkspaces(req: operations.ListWorkspacesRequest, config?: AxiosRequestConfig): Promise<operations.ListWorkspacesResponse>;
    TagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    UntagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    UpdateWorkspaceAlias(req: operations.UpdateWorkspaceAliasRequest, config?: AxiosRequestConfig): Promise<operations.UpdateWorkspaceAliasResponse>;
}
export {};

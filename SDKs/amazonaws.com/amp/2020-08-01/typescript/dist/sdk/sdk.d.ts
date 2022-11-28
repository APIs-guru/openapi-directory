import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://aps.{region}.amazonaws.com", "https://aps.{region}.amazonaws.com", "http://aps.{region}.amazonaws.com.cn", "https://aps.{region}.amazonaws.com.cn"];
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
     * createWorkspace - Creates a new AMP workspace.
    **/
    createWorkspace(req: operations.CreateWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.CreateWorkspaceResponse>;
    /**
     * deleteWorkspace - Deletes an AMP workspace.
    **/
    deleteWorkspace(req: operations.DeleteWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWorkspaceResponse>;
    /**
     * describeWorkspace - Describes an existing AMP workspace.
    **/
    describeWorkspace(req: operations.DescribeWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.DescribeWorkspaceResponse>;
    /**
     * listTagsForResource - Lists the tags you have assigned to the resource.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * listWorkspaces - Lists all AMP workspaces, including workspaces being created or deleted.
    **/
    listWorkspaces(req: operations.ListWorkspacesRequest, config?: AxiosRequestConfig): Promise<operations.ListWorkspacesResponse>;
    /**
     * tagResource - Creates tags for the specified resource.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - Deletes tags from the specified resource.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateWorkspaceAlias - Updates an AMP workspace alias.
    **/
    updateWorkspaceAlias(req: operations.UpdateWorkspaceAliasRequest, config?: AxiosRequestConfig): Promise<operations.UpdateWorkspaceAliasResponse>;
}
export {};

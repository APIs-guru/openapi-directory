import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://finspace.{region}.amazonaws.com", "https://finspace.{region}.amazonaws.com", "http://finspace.{region}.amazonaws.com.cn", "https://finspace.{region}.amazonaws.com.cn"];
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
     * createEnvironment - Create a new FinSpace environment.
    **/
    createEnvironment(req: operations.CreateEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.CreateEnvironmentResponse>;
    /**
     * deleteEnvironment - Delete an FinSpace environment.
    **/
    deleteEnvironment(req: operations.DeleteEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEnvironmentResponse>;
    /**
     * getEnvironment - Returns the FinSpace environment object.
    **/
    getEnvironment(req: operations.GetEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.GetEnvironmentResponse>;
    /**
     * listEnvironments - A list of all of your FinSpace environments.
    **/
    listEnvironments(req: operations.ListEnvironmentsRequest, config?: AxiosRequestConfig): Promise<operations.ListEnvironmentsResponse>;
    /**
     * listTagsForResource - A list of all tags for a resource.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * tagResource - Adds metadata tags to a FinSpace resource.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - Removes metadata tags from a FinSpace resource.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateEnvironment - Update your FinSpace environment.
    **/
    updateEnvironment(req: operations.UpdateEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEnvironmentResponse>;
}
export {};

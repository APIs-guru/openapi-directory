import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://dlm.{region}.amazonaws.com", "https://dlm.{region}.amazonaws.com", "http://dlm.{region}.amazonaws.com.cn", "https://dlm.{region}.amazonaws.com.cn"];
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
     * createLifecyclePolicy - Creates a policy to manage the lifecycle of the specified Amazon Web Services resources. You can create up to 100 lifecycle policies.
    **/
    createLifecyclePolicy(req: operations.CreateLifecyclePolicyRequest, config?: AxiosRequestConfig): Promise<operations.CreateLifecyclePolicyResponse>;
    /**
     * deleteLifecyclePolicy - Deletes the specified lifecycle policy and halts the automated operations that the policy specified.
    **/
    deleteLifecyclePolicy(req: operations.DeleteLifecyclePolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLifecyclePolicyResponse>;
    /**
     * getLifecyclePolicies - <p>Gets summary information about all or the specified data lifecycle policies.</p> <p>To get complete information about a policy, use <a>GetLifecyclePolicy</a>.</p>
    **/
    getLifecyclePolicies(req: operations.GetLifecyclePoliciesRequest, config?: AxiosRequestConfig): Promise<operations.GetLifecyclePoliciesResponse>;
    /**
     * getLifecyclePolicy - Gets detailed information about the specified lifecycle policy.
    **/
    getLifecyclePolicy(req: operations.GetLifecyclePolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetLifecyclePolicyResponse>;
    /**
     * listTagsForResource - Lists the tags for the specified resource.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * tagResource - Adds the specified tags to the specified resource.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - Removes the specified tags from the specified resource.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateLifecyclePolicy - Updates the specified lifecycle policy.
    **/
    updateLifecyclePolicy(req: operations.UpdateLifecyclePolicyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLifecyclePolicyResponse>;
}
export {};

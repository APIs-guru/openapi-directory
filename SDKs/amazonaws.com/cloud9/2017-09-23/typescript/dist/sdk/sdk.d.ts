import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://cloud9.{region}.amazonaws.com", "https://cloud9.{region}.amazonaws.com", "http://cloud9.{region}.amazonaws.com.cn", "https://cloud9.{region}.amazonaws.com.cn"];
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
     * createEnvironmentEc2 - Creates an Cloud9 development environment, launches an Amazon Elastic Compute Cloud (Amazon EC2) instance, and then connects from the instance to the environment.
    **/
    createEnvironmentEc2(req: operations.CreateEnvironmentEc2Request, config?: AxiosRequestConfig): Promise<operations.CreateEnvironmentEc2Response>;
    /**
     * createEnvironmentMembership - Adds an environment member to an Cloud9 development environment.
    **/
    createEnvironmentMembership(req: operations.CreateEnvironmentMembershipRequest, config?: AxiosRequestConfig): Promise<operations.CreateEnvironmentMembershipResponse>;
    /**
     * deleteEnvironment - Deletes an Cloud9 development environment. If an Amazon EC2 instance is connected to the environment, also terminates the instance.
    **/
    deleteEnvironment(req: operations.DeleteEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEnvironmentResponse>;
    /**
     * deleteEnvironmentMembership - Deletes an environment member from an Cloud9 development environment.
    **/
    deleteEnvironmentMembership(req: operations.DeleteEnvironmentMembershipRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEnvironmentMembershipResponse>;
    /**
     * describeEnvironmentMemberships - Gets information about environment members for an Cloud9 development environment.
    **/
    describeEnvironmentMemberships(req: operations.DescribeEnvironmentMembershipsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeEnvironmentMembershipsResponse>;
    /**
     * describeEnvironmentStatus - Gets status information for an Cloud9 development environment.
    **/
    describeEnvironmentStatus(req: operations.DescribeEnvironmentStatusRequest, config?: AxiosRequestConfig): Promise<operations.DescribeEnvironmentStatusResponse>;
    /**
     * describeEnvironments - Gets information about Cloud9 development environments.
    **/
    describeEnvironments(req: operations.DescribeEnvironmentsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeEnvironmentsResponse>;
    /**
     * listEnvironments - Gets a list of Cloud9 development environment identifiers.
    **/
    listEnvironments(req: operations.ListEnvironmentsRequest, config?: AxiosRequestConfig): Promise<operations.ListEnvironmentsResponse>;
    /**
     * listTagsForResource - Gets a list of the tags associated with an Cloud9 development environment.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * tagResource - <p>Adds tags to an Cloud9 development environment.</p> <important> <p>Tags that you add to an Cloud9 environment by using this method will NOT be automatically propagated to underlying resources.</p> </important>
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - Removes tags from an Cloud9 development environment.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateEnvironment - Changes the settings of an existing Cloud9 development environment.
    **/
    updateEnvironment(req: operations.UpdateEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEnvironmentResponse>;
    /**
     * updateEnvironmentMembership - Changes the settings of an existing environment member for an Cloud9 development environment.
    **/
    updateEnvironmentMembership(req: operations.UpdateEnvironmentMembershipRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEnvironmentMembershipResponse>;
}
export {};

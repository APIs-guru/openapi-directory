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
    CreateEnvironmentEc2(req: operations.CreateEnvironmentEc2Request, config?: AxiosRequestConfig): Promise<operations.CreateEnvironmentEc2Response>;
    CreateEnvironmentMembership(req: operations.CreateEnvironmentMembershipRequest, config?: AxiosRequestConfig): Promise<operations.CreateEnvironmentMembershipResponse>;
    DeleteEnvironment(req: operations.DeleteEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEnvironmentResponse>;
    DeleteEnvironmentMembership(req: operations.DeleteEnvironmentMembershipRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEnvironmentMembershipResponse>;
    DescribeEnvironmentMemberships(req: operations.DescribeEnvironmentMembershipsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeEnvironmentMembershipsResponse>;
    DescribeEnvironmentStatus(req: operations.DescribeEnvironmentStatusRequest, config?: AxiosRequestConfig): Promise<operations.DescribeEnvironmentStatusResponse>;
    DescribeEnvironments(req: operations.DescribeEnvironmentsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeEnvironmentsResponse>;
    ListEnvironments(req: operations.ListEnvironmentsRequest, config?: AxiosRequestConfig): Promise<operations.ListEnvironmentsResponse>;
    ListTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    TagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    UntagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    UpdateEnvironment(req: operations.UpdateEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEnvironmentResponse>;
    UpdateEnvironmentMembership(req: operations.UpdateEnvironmentMembershipRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEnvironmentMembershipResponse>;
}
export {};

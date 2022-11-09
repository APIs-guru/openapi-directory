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
    DeleteScalingPolicy(req: operations.DeleteScalingPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteScalingPolicyResponse>;
    DeleteScheduledAction(req: operations.DeleteScheduledActionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteScheduledActionResponse>;
    DeregisterScalableTarget(req: operations.DeregisterScalableTargetRequest, config?: AxiosRequestConfig): Promise<operations.DeregisterScalableTargetResponse>;
    DescribeScalableTargets(req: operations.DescribeScalableTargetsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeScalableTargetsResponse>;
    DescribeScalingActivities(req: operations.DescribeScalingActivitiesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeScalingActivitiesResponse>;
    DescribeScalingPolicies(req: operations.DescribeScalingPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeScalingPoliciesResponse>;
    DescribeScheduledActions(req: operations.DescribeScheduledActionsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeScheduledActionsResponse>;
    PutScalingPolicy(req: operations.PutScalingPolicyRequest, config?: AxiosRequestConfig): Promise<operations.PutScalingPolicyResponse>;
    PutScheduledAction(req: operations.PutScheduledActionRequest, config?: AxiosRequestConfig): Promise<operations.PutScheduledActionResponse>;
    RegisterScalableTarget(req: operations.RegisterScalableTargetRequest, config?: AxiosRequestConfig): Promise<operations.RegisterScalableTargetResponse>;
}
export {};

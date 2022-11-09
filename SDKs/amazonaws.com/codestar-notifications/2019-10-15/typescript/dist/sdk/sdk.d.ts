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
    CreateNotificationRule(req: operations.CreateNotificationRuleRequest, config?: AxiosRequestConfig): Promise<operations.CreateNotificationRuleResponse>;
    DeleteNotificationRule(req: operations.DeleteNotificationRuleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNotificationRuleResponse>;
    DeleteTarget(req: operations.DeleteTargetRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTargetResponse>;
    DescribeNotificationRule(req: operations.DescribeNotificationRuleRequest, config?: AxiosRequestConfig): Promise<operations.DescribeNotificationRuleResponse>;
    ListEventTypes(req: operations.ListEventTypesRequest, config?: AxiosRequestConfig): Promise<operations.ListEventTypesResponse>;
    ListNotificationRules(req: operations.ListNotificationRulesRequest, config?: AxiosRequestConfig): Promise<operations.ListNotificationRulesResponse>;
    ListTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    ListTargets(req: operations.ListTargetsRequest, config?: AxiosRequestConfig): Promise<operations.ListTargetsResponse>;
    Subscribe(req: operations.SubscribeRequest, config?: AxiosRequestConfig): Promise<operations.SubscribeResponse>;
    TagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    Unsubscribe(req: operations.UnsubscribeRequest, config?: AxiosRequestConfig): Promise<operations.UnsubscribeResponse>;
    UntagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    UpdateNotificationRule(req: operations.UpdateNotificationRuleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNotificationRuleResponse>;
}
export {};

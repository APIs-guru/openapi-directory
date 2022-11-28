import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://codestar-notifications.{region}.amazonaws.com", "https://codestar-notifications.{region}.amazonaws.com", "http://codestar-notifications.{region}.amazonaws.com.cn", "https://codestar-notifications.{region}.amazonaws.com.cn"];
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
     * createNotificationRule - Creates a notification rule for a resource. The rule specifies the events you want notifications about and the targets (such as SNS topics) where you want to receive them.
    **/
    createNotificationRule(req: operations.CreateNotificationRuleRequest, config?: AxiosRequestConfig): Promise<operations.CreateNotificationRuleResponse>;
    /**
     * deleteNotificationRule - Deletes a notification rule for a resource.
    **/
    deleteNotificationRule(req: operations.DeleteNotificationRuleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNotificationRuleResponse>;
    /**
     * deleteTarget - Deletes a specified target for notifications.
    **/
    deleteTarget(req: operations.DeleteTargetRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTargetResponse>;
    /**
     * describeNotificationRule - Returns information about a specified notification rule.
    **/
    describeNotificationRule(req: operations.DescribeNotificationRuleRequest, config?: AxiosRequestConfig): Promise<operations.DescribeNotificationRuleResponse>;
    /**
     * listEventTypes - Returns information about the event types available for configuring notifications.
    **/
    listEventTypes(req: operations.ListEventTypesRequest, config?: AxiosRequestConfig): Promise<operations.ListEventTypesResponse>;
    /**
     * listNotificationRules - Returns a list of the notification rules for an AWS account.
    **/
    listNotificationRules(req: operations.ListNotificationRulesRequest, config?: AxiosRequestConfig): Promise<operations.ListNotificationRulesResponse>;
    /**
     * listTagsForResource - Returns a list of the tags associated with a notification rule.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * listTargets - Returns a list of the notification rule targets for an AWS account.
    **/
    listTargets(req: operations.ListTargetsRequest, config?: AxiosRequestConfig): Promise<operations.ListTargetsResponse>;
    /**
     * subscribe - Creates an association between a notification rule and an SNS topic so that the associated target can receive notifications when the events described in the rule are triggered.
    **/
    subscribe(req: operations.SubscribeRequest, config?: AxiosRequestConfig): Promise<operations.SubscribeResponse>;
    /**
     * tagResource - Associates a set of provided tags with a notification rule.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * unsubscribe - Removes an association between a notification rule and an Amazon SNS topic so that subscribers to that topic stop receiving notifications when the events described in the rule are triggered.
    **/
    unsubscribe(req: operations.UnsubscribeRequest, config?: AxiosRequestConfig): Promise<operations.UnsubscribeResponse>;
    /**
     * untagResource - Removes the association between one or more provided tags and a notification rule.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateNotificationRule - <p>Updates a notification rule for a resource. You can change the events that trigger the notification rule, the status of the rule, and the targets that receive the notifications.</p> <note> <p>To add or remove tags for a notification rule, you must use <a>TagResource</a> and <a>UntagResource</a>.</p> </note>
    **/
    updateNotificationRule(req: operations.UpdateNotificationRuleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNotificationRuleResponse>;
}
export {};

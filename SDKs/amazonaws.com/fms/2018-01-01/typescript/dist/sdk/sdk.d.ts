import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://fms.{region}.amazonaws.com", "https://fms.{region}.amazonaws.com", "http://fms.{region}.amazonaws.com.cn", "https://fms.{region}.amazonaws.com.cn"];
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
     * associateAdminAccount - <p>Sets the Firewall Manager administrator account. The account must be a member of the organization in Organizations whose resources you want to protect. Firewall Manager sets the permissions that allow the account to administer your Firewall Manager policies.</p> <p>The account that you associate with Firewall Manager is called the Firewall Manager administrator account. </p>
    **/
    associateAdminAccount(req: operations.AssociateAdminAccountRequest, config?: AxiosRequestConfig): Promise<operations.AssociateAdminAccountResponse>;
    /**
     * deleteAppsList - Permanently deletes an Firewall Manager applications list.
    **/
    deleteAppsList(req: operations.DeleteAppsListRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAppsListResponse>;
    /**
     * deleteNotificationChannel - Deletes an Firewall Manager association with the IAM role and the Amazon Simple Notification Service (SNS) topic that is used to record Firewall Manager SNS logs.
    **/
    deleteNotificationChannel(req: operations.DeleteNotificationChannelRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNotificationChannelResponse>;
    /**
     * deletePolicy - Permanently deletes an Firewall Manager policy.
    **/
    deletePolicy(req: operations.DeletePolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeletePolicyResponse>;
    /**
     * deleteProtocolsList - Permanently deletes an Firewall Manager protocols list.
    **/
    deleteProtocolsList(req: operations.DeleteProtocolsListRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProtocolsListResponse>;
    /**
     * disassociateAdminAccount - Disassociates the account that has been set as the Firewall Manager administrator account. To set a different account as the administrator account, you must submit an <code>AssociateAdminAccount</code> request.
    **/
    disassociateAdminAccount(req: operations.DisassociateAdminAccountRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateAdminAccountResponse>;
    /**
     * getAdminAccount - Returns the Organizations account that is associated with Firewall Manager as the Firewall Manager administrator.
    **/
    getAdminAccount(req: operations.GetAdminAccountRequest, config?: AxiosRequestConfig): Promise<operations.GetAdminAccountResponse>;
    /**
     * getAppsList - Returns information about the specified Firewall Manager applications list.
    **/
    getAppsList(req: operations.GetAppsListRequest, config?: AxiosRequestConfig): Promise<operations.GetAppsListResponse>;
    /**
     * getComplianceDetail - <p>Returns detailed compliance information about the specified member account. Details include resources that are in and out of compliance with the specified policy. </p> <ul> <li> <p>Resources are considered noncompliant for WAF and Shield Advanced policies if the specified policy has not been applied to them.</p> </li> <li> <p>Resources are considered noncompliant for security group policies if they are in scope of the policy, they violate one or more of the policy rules, and remediation is disabled or not possible.</p> </li> <li> <p>Resources are considered noncompliant for Network Firewall policies if a firewall is missing in the VPC, if the firewall endpoint isn't set up in an expected Availability Zone and subnet, if a subnet created by the Firewall Manager doesn't have the expected route table, and for modifications to a firewall policy that violate the Firewall Manager policy's rules.</p> </li> <li> <p>Resources are considered noncompliant for DNS Firewall policies if a DNS Firewall rule group is missing from the rule group associations for the VPC. </p> </li> </ul>
    **/
    getComplianceDetail(req: operations.GetComplianceDetailRequest, config?: AxiosRequestConfig): Promise<operations.GetComplianceDetailResponse>;
    /**
     * getNotificationChannel - Information about the Amazon Simple Notification Service (SNS) topic that is used to record Firewall Manager SNS logs.
    **/
    getNotificationChannel(req: operations.GetNotificationChannelRequest, config?: AxiosRequestConfig): Promise<operations.GetNotificationChannelResponse>;
    /**
     * getPolicy - Returns information about the specified Firewall Manager policy.
    **/
    getPolicy(req: operations.GetPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetPolicyResponse>;
    /**
     * getProtectionStatus - If you created a Shield Advanced policy, returns policy-level attack summary information in the event of a potential DDoS attack. Other policy types are currently unsupported.
    **/
    getProtectionStatus(req: operations.GetProtectionStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetProtectionStatusResponse>;
    /**
     * getProtocolsList - Returns information about the specified Firewall Manager protocols list.
    **/
    getProtocolsList(req: operations.GetProtocolsListRequest, config?: AxiosRequestConfig): Promise<operations.GetProtocolsListResponse>;
    /**
     * getViolationDetails - Retrieves violations for a resource based on the specified Firewall Manager policy and Amazon Web Services account.
    **/
    getViolationDetails(req: operations.GetViolationDetailsRequest, config?: AxiosRequestConfig): Promise<operations.GetViolationDetailsResponse>;
    /**
     * listAppsLists - Returns an array of <code>AppsListDataSummary</code> objects.
    **/
    listAppsLists(req: operations.ListAppsListsRequest, config?: AxiosRequestConfig): Promise<operations.ListAppsListsResponse>;
    /**
     * listComplianceStatus - Returns an array of <code>PolicyComplianceStatus</code> objects. Use <code>PolicyComplianceStatus</code> to get a summary of which member accounts are protected by the specified policy.
    **/
    listComplianceStatus(req: operations.ListComplianceStatusRequest, config?: AxiosRequestConfig): Promise<operations.ListComplianceStatusResponse>;
    /**
     * listMemberAccounts - <p>Returns a <code>MemberAccounts</code> object that lists the member accounts in the administrator's Amazon Web Services organization.</p> <p>The <code>ListMemberAccounts</code> must be submitted by the account that is set as the Firewall Manager administrator.</p>
    **/
    listMemberAccounts(req: operations.ListMemberAccountsRequest, config?: AxiosRequestConfig): Promise<operations.ListMemberAccountsResponse>;
    /**
     * listPolicies - Returns an array of <code>PolicySummary</code> objects.
    **/
    listPolicies(req: operations.ListPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.ListPoliciesResponse>;
    /**
     * listProtocolsLists - Returns an array of <code>ProtocolsListDataSummary</code> objects.
    **/
    listProtocolsLists(req: operations.ListProtocolsListsRequest, config?: AxiosRequestConfig): Promise<operations.ListProtocolsListsResponse>;
    /**
     * listTagsForResource - Retrieves the list of tags for the specified Amazon Web Services resource.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * putAppsList - Creates an Firewall Manager applications list.
    **/
    putAppsList(req: operations.PutAppsListRequest, config?: AxiosRequestConfig): Promise<operations.PutAppsListResponse>;
    /**
     * putNotificationChannel - <p>Designates the IAM role and Amazon Simple Notification Service (SNS) topic that Firewall Manager uses to record SNS logs.</p> <p>To perform this action outside of the console, you must configure the SNS topic to allow the Firewall Manager role <code>AWSServiceRoleForFMS</code> to publish SNS logs. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-api-permissions-ref.html">Firewall Manager required permissions for API actions</a> in the <i>Firewall Manager Developer Guide</i>.</p>
    **/
    putNotificationChannel(req: operations.PutNotificationChannelRequest, config?: AxiosRequestConfig): Promise<operations.PutNotificationChannelResponse>;
    /**
     * putPolicy - <p>Creates an Firewall Manager policy.</p> <p>Firewall Manager provides the following types of policies: </p> <ul> <li> <p>An WAF policy (type WAFV2), which defines rule groups to run first in the corresponding WAF web ACL and rule groups to run last in the web ACL.</p> </li> <li> <p>An WAF Classic policy (type WAF), which defines a rule group. </p> </li> <li> <p>A Shield Advanced policy, which applies Shield Advanced protection to specified accounts and resources.</p> </li> <li> <p>A security group policy, which manages VPC security groups across your Amazon Web Services organization. </p> </li> <li> <p>An Network Firewall policy, which provides firewall rules to filter network traffic in specified Amazon VPCs.</p> </li> <li> <p>A DNS Firewall policy, which provides Route 53 Resolver DNS Firewall rules to filter DNS queries for specified VPCs.</p> </li> </ul> <p>Each policy is specific to one of the types. If you want to enforce more than one policy type across accounts, create multiple policies. You can create multiple policies for each type.</p> <p>You must be subscribed to Shield Advanced to create a Shield Advanced policy. For more information about subscribing to Shield Advanced, see <a href="https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_CreateSubscription.html">CreateSubscription</a>.</p>
    **/
    putPolicy(req: operations.PutPolicyRequest, config?: AxiosRequestConfig): Promise<operations.PutPolicyResponse>;
    /**
     * putProtocolsList - Creates an Firewall Manager protocols list.
    **/
    putProtocolsList(req: operations.PutProtocolsListRequest, config?: AxiosRequestConfig): Promise<operations.PutProtocolsListResponse>;
    /**
     * tagResource - Adds one or more tags to an Amazon Web Services resource.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - Removes one or more tags from an Amazon Web Services resource.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
}
export {};

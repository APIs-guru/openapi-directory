# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.AssociateAdminAccountRequest{
        Headers: operations.AssociateAdminAccountHeaders{
            XAmzAlgorithm: "consectetur",
            XAmzContentSha256: "sequi",
            XAmzCredential: "et",
            XAmzDate: "illo",
            XAmzSecurityToken: "enim",
            XAmzSignature: "et",
            XAmzSignedHeaders: "praesentium",
            XAmzTarget: "AWSFMS_20180101.AssociateAdminAccount",
        },
        Request: shared.AssociateAdminAccountRequest{
            AdminAccount: "omnis",
        },
    }
    
    res, err := s.Sdk.AssociateAdminAccount(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `AssociateAdminAccount` - <p>Sets the Firewall Manager administrator account. The account must be a member of the organization in Organizations whose resources you want to protect. Firewall Manager sets the permissions that allow the account to administer your Firewall Manager policies.</p> <p>The account that you associate with Firewall Manager is called the Firewall Manager administrator account. </p>
* `DeleteAppsList` - Permanently deletes an Firewall Manager applications list.
* `DeleteNotificationChannel` - Deletes an Firewall Manager association with the IAM role and the Amazon Simple Notification Service (SNS) topic that is used to record Firewall Manager SNS logs.
* `DeletePolicy` - Permanently deletes an Firewall Manager policy. 
* `DeleteProtocolsList` - Permanently deletes an Firewall Manager protocols list.
* `DisassociateAdminAccount` - Disassociates the account that has been set as the Firewall Manager administrator account. To set a different account as the administrator account, you must submit an <code>AssociateAdminAccount</code> request.
* `GetAdminAccount` - Returns the Organizations account that is associated with Firewall Manager as the Firewall Manager administrator.
* `GetAppsList` - Returns information about the specified Firewall Manager applications list.
* `GetComplianceDetail` - <p>Returns detailed compliance information about the specified member account. Details include resources that are in and out of compliance with the specified policy. </p> <ul> <li> <p>Resources are considered noncompliant for WAF and Shield Advanced policies if the specified policy has not been applied to them.</p> </li> <li> <p>Resources are considered noncompliant for security group policies if they are in scope of the policy, they violate one or more of the policy rules, and remediation is disabled or not possible.</p> </li> <li> <p>Resources are considered noncompliant for Network Firewall policies if a firewall is missing in the VPC, if the firewall endpoint isn't set up in an expected Availability Zone and subnet, if a subnet created by the Firewall Manager doesn't have the expected route table, and for modifications to a firewall policy that violate the Firewall Manager policy's rules.</p> </li> <li> <p>Resources are considered noncompliant for DNS Firewall policies if a DNS Firewall rule group is missing from the rule group associations for the VPC. </p> </li> </ul>
* `GetNotificationChannel` - Information about the Amazon Simple Notification Service (SNS) topic that is used to record Firewall Manager SNS logs.
* `GetPolicy` - Returns information about the specified Firewall Manager policy.
* `GetProtectionStatus` - If you created a Shield Advanced policy, returns policy-level attack summary information in the event of a potential DDoS attack. Other policy types are currently unsupported.
* `GetProtocolsList` - Returns information about the specified Firewall Manager protocols list.
* `GetViolationDetails` - Retrieves violations for a resource based on the specified Firewall Manager policy and Amazon Web Services account.
* `ListAppsLists` - Returns an array of <code>AppsListDataSummary</code> objects.
* `ListComplianceStatus` - Returns an array of <code>PolicyComplianceStatus</code> objects. Use <code>PolicyComplianceStatus</code> to get a summary of which member accounts are protected by the specified policy. 
* `ListMemberAccounts` - <p>Returns a <code>MemberAccounts</code> object that lists the member accounts in the administrator's Amazon Web Services organization.</p> <p>The <code>ListMemberAccounts</code> must be submitted by the account that is set as the Firewall Manager administrator.</p>
* `ListPolicies` - Returns an array of <code>PolicySummary</code> objects.
* `ListProtocolsLists` - Returns an array of <code>ProtocolsListDataSummary</code> objects.
* `ListTagsForResource` - Retrieves the list of tags for the specified Amazon Web Services resource. 
* `PutAppsList` - Creates an Firewall Manager applications list.
* `PutNotificationChannel` - <p>Designates the IAM role and Amazon Simple Notification Service (SNS) topic that Firewall Manager uses to record SNS logs.</p> <p>To perform this action outside of the console, you must configure the SNS topic to allow the Firewall Manager role <code>AWSServiceRoleForFMS</code> to publish SNS logs. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-api-permissions-ref.html">Firewall Manager required permissions for API actions</a> in the <i>Firewall Manager Developer Guide</i>.</p>
* `PutPolicy` - <p>Creates an Firewall Manager policy.</p> <p>Firewall Manager provides the following types of policies: </p> <ul> <li> <p>An WAF policy (type WAFV2), which defines rule groups to run first in the corresponding WAF web ACL and rule groups to run last in the web ACL.</p> </li> <li> <p>An WAF Classic policy (type WAF), which defines a rule group. </p> </li> <li> <p>A Shield Advanced policy, which applies Shield Advanced protection to specified accounts and resources.</p> </li> <li> <p>A security group policy, which manages VPC security groups across your Amazon Web Services organization. </p> </li> <li> <p>An Network Firewall policy, which provides firewall rules to filter network traffic in specified Amazon VPCs.</p> </li> <li> <p>A DNS Firewall policy, which provides Route 53 Resolver DNS Firewall rules to filter DNS queries for specified VPCs.</p> </li> </ul> <p>Each policy is specific to one of the types. If you want to enforce more than one policy type across accounts, create multiple policies. You can create multiple policies for each type.</p> <p>You must be subscribed to Shield Advanced to create a Shield Advanced policy. For more information about subscribing to Shield Advanced, see <a href="https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_CreateSubscription.html">CreateSubscription</a>.</p>
* `PutProtocolsList` - Creates an Firewall Manager protocols list.
* `TagResource` - Adds one or more tags to an Amazon Web Services resource.
* `UntagResource` - Removes one or more tags from an Amazon Web Services resource.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

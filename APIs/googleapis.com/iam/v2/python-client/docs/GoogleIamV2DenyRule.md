# GoogleIamV2DenyRule

A deny rule in an IAM deny policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**denial_condition** | [**GoogleTypeExpr**](GoogleTypeExpr.md) |  | [optional] 
**denied_permissions** | **List[str]** | The permissions that are explicitly denied by this rule. Each permission uses the format &#x60;{service_fqdn}/{resource}.{verb}&#x60;, where &#x60;{service_fqdn}&#x60; is the fully qualified domain name for the service. For example, &#x60;iam.googleapis.com/roles.list&#x60;. | [optional] 
**denied_principals** | **List[str]** | The identities that are prevented from using one or more permissions on Google Cloud resources. This field can contain the following values: * &#x60;principal://goog/subject/{email_id}&#x60;: A specific Google Account. Includes Gmail, Cloud Identity, and Google Workspace user accounts. For example, &#x60;principal://goog/subject/alice@example.com&#x60;. * &#x60;principal://iam.googleapis.com/projects/-/serviceAccounts/{service_account_id}&#x60;: A Google Cloud service account. For example, &#x60;principal://iam.googleapis.com/projects/-/serviceAccounts/my-service-account@iam.gserviceaccount.com&#x60;. * &#x60;principalSet://goog/group/{group_id}&#x60;: A Google group. For example, &#x60;principalSet://goog/group/admins@example.com&#x60;. * &#x60;principalSet://goog/public:all&#x60;: A special identifier that represents any principal that is on the internet, even if they do not have a Google Account or are not logged in. * &#x60;principalSet://goog/cloudIdentityCustomerId/{customer_id}&#x60;: All of the principals associated with the specified Google Workspace or Cloud Identity customer ID. For example, &#x60;principalSet://goog/cloudIdentityCustomerId/C01Abc35&#x60;. * &#x60;principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}&#x60;: A single identity in a workforce identity pool. * &#x60;principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}&#x60;: All workforce identities in a group. * &#x60;principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}&#x60;: All workforce identities with a specific attribute value. * &#x60;principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*&#x60;: All identities in a workforce identity pool. * &#x60;principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}&#x60;: A single identity in a workload identity pool. * &#x60;principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}&#x60;: A workload identity pool group. * &#x60;principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}&#x60;: All identities in a workload identity pool with a certain attribute. * &#x60;principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*&#x60;: All identities in a workload identity pool. * &#x60;deleted:principal://goog/subject/{email_id}?uid&#x3D;{uid}&#x60;: A specific Google Account that was deleted recently. For example, &#x60;deleted:principal://goog/subject/alice@example.com?uid&#x3D;1234567890&#x60;. If the Google Account is recovered, this identifier reverts to the standard identifier for a Google Account. * &#x60;deleted:principalSet://goog/group/{group_id}?uid&#x3D;{uid}&#x60;: A Google group that was deleted recently. For example, &#x60;deleted:principalSet://goog/group/admins@example.com?uid&#x3D;1234567890&#x60;. If the Google group is restored, this identifier reverts to the standard identifier for a Google group. * &#x60;deleted:principal://iam.googleapis.com/projects/-/serviceAccounts/{service_account_id}?uid&#x3D;{uid}&#x60;: A Google Cloud service account that was deleted recently. For example, &#x60;deleted:principal://iam.googleapis.com/projects/-/serviceAccounts/my-service-account@iam.gserviceaccount.com?uid&#x3D;1234567890&#x60;. If the service account is undeleted, this identifier reverts to the standard identifier for a service account. * &#x60;deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}&#x60;: Deleted single identity in a workforce identity pool. For example, &#x60;deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value&#x60;. | [optional] 
**exception_permissions** | **List[str]** | Specifies the permissions that this rule excludes from the set of denied permissions given by &#x60;denied_permissions&#x60;. If a permission appears in &#x60;denied_permissions&#x60; _and_ in &#x60;exception_permissions&#x60; then it will _not_ be denied. The excluded permissions can be specified using the same syntax as &#x60;denied_permissions&#x60;. | [optional] 
**exception_principals** | **List[str]** | The identities that are excluded from the deny rule, even if they are listed in the &#x60;denied_principals&#x60;. For example, you could add a Google group to the &#x60;denied_principals&#x60;, then exclude specific users who belong to that group. This field can contain the same values as the &#x60;denied_principals&#x60; field, excluding &#x60;principalSet://goog/public:all&#x60;, which represents all users on the internet. | [optional] 

## Example

```python
from openapi_client.models.google_iam_v2_deny_rule import GoogleIamV2DenyRule

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleIamV2DenyRule from a JSON string
google_iam_v2_deny_rule_instance = GoogleIamV2DenyRule.from_json(json)
# print the JSON string representation of the object
print(GoogleIamV2DenyRule.to_json())

# convert the object into a dict
google_iam_v2_deny_rule_dict = google_iam_v2_deny_rule_instance.to_dict()
# create an instance of GoogleIamV2DenyRule from a dict
google_iam_v2_deny_rule_from_dict = GoogleIamV2DenyRule.from_dict(google_iam_v2_deny_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



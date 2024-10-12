# GoogleCloudOrgpolicyV2PolicySpecPolicyRule

A rule used to express this policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_all** | **bool** | Setting this to true means that all values are allowed. This field can be set only in policies for list constraints. | [optional] 
**condition** | [**GoogleTypeExpr**](GoogleTypeExpr.md) |  | [optional] 
**deny_all** | **bool** | Setting this to true means that all values are denied. This field can be set only in policies for list constraints. | [optional] 
**enforce** | **bool** | If &#x60;true&#x60;, then the policy is enforced. If &#x60;false&#x60;, then any configuration is acceptable. This field can be set only in policies for boolean constraints. | [optional] 
**values** | [**GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues**](GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_orgpolicy_v2_policy_spec_policy_rule import GoogleCloudOrgpolicyV2PolicySpecPolicyRule

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudOrgpolicyV2PolicySpecPolicyRule from a JSON string
google_cloud_orgpolicy_v2_policy_spec_policy_rule_instance = GoogleCloudOrgpolicyV2PolicySpecPolicyRule.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudOrgpolicyV2PolicySpecPolicyRule.to_json())

# convert the object into a dict
google_cloud_orgpolicy_v2_policy_spec_policy_rule_dict = google_cloud_orgpolicy_v2_policy_spec_policy_rule_instance.to_dict()
# create an instance of GoogleCloudOrgpolicyV2PolicySpecPolicyRule from a dict
google_cloud_orgpolicy_v2_policy_spec_policy_rule_from_dict = GoogleCloudOrgpolicyV2PolicySpecPolicyRule.from_dict(google_cloud_orgpolicy_v2_policy_spec_policy_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



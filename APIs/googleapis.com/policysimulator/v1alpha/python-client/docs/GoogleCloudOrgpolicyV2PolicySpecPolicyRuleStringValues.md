# GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues

A message that holds specific allowed and denied values. This message can define specific values and subtrees of the Resource Manager resource hierarchy (`Organizations`, `Folders`, `Projects`) that are allowed or denied. This is achieved by using the `under:` and optional `is:` prefixes. The `under:` prefix is used to denote resource subtree values. The `is:` prefix is used to denote specific values, and is required only if the value contains a \":\". Values prefixed with \"is:\" are treated the same as values with no prefix. Ancestry subtrees must be in one of the following formats: - `projects/` (for example, `projects/tokyo-rain-123`) - `folders/` (for example, `folders/1234`) - `organizations/` (for example, `organizations/1234`) The `supports_under` field of the associated `Constraint` defines whether ancestry prefixes can be used.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_values** | **List[str]** | List of values allowed at this resource. | [optional] 
**denied_values** | **List[str]** | List of values denied at this resource. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_orgpolicy_v2_policy_spec_policy_rule_string_values import GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues from a JSON string
google_cloud_orgpolicy_v2_policy_spec_policy_rule_string_values_instance = GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues.to_json())

# convert the object into a dict
google_cloud_orgpolicy_v2_policy_spec_policy_rule_string_values_dict = google_cloud_orgpolicy_v2_policy_spec_policy_rule_string_values_instance.to_dict()
# create an instance of GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues from a dict
google_cloud_orgpolicy_v2_policy_spec_policy_rule_string_values_from_dict = GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues.from_dict(google_cloud_orgpolicy_v2_policy_spec_policy_rule_string_values_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



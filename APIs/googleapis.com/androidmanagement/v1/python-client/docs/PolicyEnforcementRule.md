# PolicyEnforcementRule

A rule that defines the actions to take if a device or work profile is not compliant with the policy specified in settingName. In the case of multiple matching or multiple triggered enforcement rules, a merge will occur with the most severe action being taken. However, all triggered rules are still kept track of: this includes initial trigger time and all associated non-compliance details. In the situation where the most severe enforcement rule is satisfied, the next most appropriate action is applied.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**block_action** | [**BlockAction**](BlockAction.md) |  | [optional] 
**setting_name** | **str** | The top-level policy to enforce. For example, applications or passwordPolicies. | [optional] 
**wipe_action** | [**WipeAction**](WipeAction.md) |  | [optional] 

## Example

```python
from openapi_client.models.policy_enforcement_rule import PolicyEnforcementRule

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyEnforcementRule from a JSON string
policy_enforcement_rule_instance = PolicyEnforcementRule.from_json(json)
# print the JSON string representation of the object
print(PolicyEnforcementRule.to_json())

# convert the object into a dict
policy_enforcement_rule_dict = policy_enforcement_rule_instance.to_dict()
# create an instance of PolicyEnforcementRule from a dict
policy_enforcement_rule_from_dict = PolicyEnforcementRule.from_dict(policy_enforcement_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



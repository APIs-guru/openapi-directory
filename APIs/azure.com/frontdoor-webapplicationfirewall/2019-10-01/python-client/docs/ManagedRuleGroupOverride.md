# ManagedRuleGroupOverride

Defines a managed rule group override setting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exclusions** | [**List[ManagedRuleExclusion]**](ManagedRuleExclusion.md) | Describes the exclusions that are applied to all rules in the group. | [optional] 
**rule_group_name** | **str** | Describes the managed rule group to override. | 
**rules** | [**List[ManagedRuleOverride]**](ManagedRuleOverride.md) | List of rules that will be disabled. If none specified, all rules in the group will be disabled. | [optional] 

## Example

```python
from openapi_client.models.managed_rule_group_override import ManagedRuleGroupOverride

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedRuleGroupOverride from a JSON string
managed_rule_group_override_instance = ManagedRuleGroupOverride.from_json(json)
# print the JSON string representation of the object
print(ManagedRuleGroupOverride.to_json())

# convert the object into a dict
managed_rule_group_override_dict = managed_rule_group_override_instance.to_dict()
# create an instance of ManagedRuleGroupOverride from a dict
managed_rule_group_override_from_dict = ManagedRuleGroupOverride.from_dict(managed_rule_group_override_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



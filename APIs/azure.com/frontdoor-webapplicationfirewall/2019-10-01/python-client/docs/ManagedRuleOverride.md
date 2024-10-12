# ManagedRuleOverride

Defines a managed rule group override setting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | [**ActionType**](ActionType.md) |  | [optional] 
**enabled_state** | [**ManagedRuleEnabledState**](ManagedRuleEnabledState.md) |  | [optional] 
**exclusions** | [**List[ManagedRuleExclusion]**](ManagedRuleExclusion.md) | Describes the exclusions that are applied to this specific rule. | [optional] 
**rule_id** | **str** | Identifier for the managed rule. | 

## Example

```python
from openapi_client.models.managed_rule_override import ManagedRuleOverride

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedRuleOverride from a JSON string
managed_rule_override_instance = ManagedRuleOverride.from_json(json)
# print the JSON string representation of the object
print(ManagedRuleOverride.to_json())

# convert the object into a dict
managed_rule_override_dict = managed_rule_override_instance.to_dict()
# create an instance of ManagedRuleOverride from a dict
managed_rule_override_from_dict = ManagedRuleOverride.from_dict(managed_rule_override_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



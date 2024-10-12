# ManagedRuleSet

Defines a managed rule set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**anomaly_score** | **int** | Verizon only : If the rule set supports anomaly detection mode, this describes the threshold for blocking requests. | [optional] 
**rule_group_overrides** | [**List[ManagedRuleGroupOverride]**](ManagedRuleGroupOverride.md) | Defines the rule overrides to apply to the rule set. | [optional] 
**rule_set_type** | **str** | Defines the rule set type to use. | 
**rule_set_version** | **str** | Defines the version of the rule set to use. | 

## Example

```python
from openapi_client.models.managed_rule_set import ManagedRuleSet

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedRuleSet from a JSON string
managed_rule_set_instance = ManagedRuleSet.from_json(json)
# print the JSON string representation of the object
print(ManagedRuleSet.to_json())

# convert the object into a dict
managed_rule_set_dict = managed_rule_set_instance.to_dict()
# create an instance of ManagedRuleSet from a dict
managed_rule_set_from_dict = ManagedRuleSet.from_dict(managed_rule_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



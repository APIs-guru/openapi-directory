# AutoHealRules

AutoHealRules - describes the rules which can be defined for auto-heal

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | [**AutoHealActions**](AutoHealActions.md) |  | [optional] 
**triggers** | [**AutoHealTriggers**](AutoHealTriggers.md) |  | [optional] 

## Example

```python
from openapi_client.models.auto_heal_rules import AutoHealRules

# TODO update the JSON string below
json = "{}"
# create an instance of AutoHealRules from a JSON string
auto_heal_rules_instance = AutoHealRules.from_json(json)
# print the JSON string representation of the object
print(AutoHealRules.to_json())

# convert the object into a dict
auto_heal_rules_dict = auto_heal_rules_instance.to_dict()
# create an instance of AutoHealRules from a dict
auto_heal_rules_from_dict = AutoHealRules.from_dict(auto_heal_rules_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



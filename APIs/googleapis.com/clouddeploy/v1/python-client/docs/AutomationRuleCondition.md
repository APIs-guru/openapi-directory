# AutomationRuleCondition

`AutomationRuleCondition` contains conditions relevant to an `Automation` rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**targets_present_condition** | [**TargetsPresentCondition**](TargetsPresentCondition.md) |  | [optional] 

## Example

```python
from openapi_client.models.automation_rule_condition import AutomationRuleCondition

# TODO update the JSON string below
json = "{}"
# create an instance of AutomationRuleCondition from a JSON string
automation_rule_condition_instance = AutomationRuleCondition.from_json(json)
# print the JSON string representation of the object
print(AutomationRuleCondition.to_json())

# convert the object into a dict
automation_rule_condition_dict = automation_rule_condition_instance.to_dict()
# create an instance of AutomationRuleCondition from a dict
automation_rule_condition_from_dict = AutomationRuleCondition.from_dict(automation_rule_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# AutomationRuleSet

A rule set which evaluates all its rules upon an event interception. Only when all the included rules in the rule set will be evaluated as 'true', will the event trigger the defined actions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rules** | [**List[AutomationTriggeringRule]**](AutomationTriggeringRule.md) |  | [optional] 

## Example

```python
from openapi_client.models.automation_rule_set import AutomationRuleSet

# TODO update the JSON string below
json = "{}"
# create an instance of AutomationRuleSet from a JSON string
automation_rule_set_instance = AutomationRuleSet.from_json(json)
# print the JSON string representation of the object
print(AutomationRuleSet.to_json())

# convert the object into a dict
automation_rule_set_dict = automation_rule_set_instance.to_dict()
# create an instance of AutomationRuleSet from a dict
automation_rule_set_from_dict = AutomationRuleSet.from_dict(automation_rule_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



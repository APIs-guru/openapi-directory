# RuleAction

The action that is performed when the alert rule becomes active, and when an alert condition is resolved.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_type** | **str** | specifies the type of the action. There are two types of actions: RuleEmailAction and RuleWebhookAction. | 

## Example

```python
from openapi_client.models.rule_action import RuleAction

# TODO update the JSON string below
json = "{}"
# create an instance of RuleAction from a JSON string
rule_action_instance = RuleAction.from_json(json)
# print the JSON string representation of the object
print(RuleAction.to_json())

# convert the object into a dict
rule_action_dict = rule_action_instance.to_dict()
# create an instance of RuleAction from a dict
rule_action_from_dict = RuleAction.from_dict(rule_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



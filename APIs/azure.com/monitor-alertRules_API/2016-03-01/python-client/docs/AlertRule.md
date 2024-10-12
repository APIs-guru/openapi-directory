# AlertRule

An alert rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | [**List[RuleAction]**](RuleAction.md) | the array of actions that are performed when the alert rule becomes active, and when an alert condition is resolved. | [optional] 
**condition** | [**RuleCondition**](RuleCondition.md) |  | 
**description** | **str** | the description of the alert rule that will be included in the alert email. | [optional] 
**is_enabled** | **bool** | the flag that indicates whether the alert rule is enabled. | 
**last_updated_time** | **datetime** | Last time the rule was updated in ISO8601 format. | [optional] [readonly] 
**name** | **str** | the name of the alert rule. | 

## Example

```python
from openapi_client.models.alert_rule import AlertRule

# TODO update the JSON string below
json = "{}"
# create an instance of AlertRule from a JSON string
alert_rule_instance = AlertRule.from_json(json)
# print the JSON string representation of the object
print(AlertRule.to_json())

# convert the object into a dict
alert_rule_dict = alert_rule_instance.to_dict()
# create an instance of AlertRule from a dict
alert_rule_from_dict = AlertRule.from_dict(alert_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



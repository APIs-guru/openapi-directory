# ManagementEventRuleCondition

A management event rule condition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation** | [**ManagementEventAggregationCondition**](ManagementEventAggregationCondition.md) |  | [optional] 

## Example

```python
from openapi_client.models.management_event_rule_condition import ManagementEventRuleCondition

# TODO update the JSON string below
json = "{}"
# create an instance of ManagementEventRuleCondition from a JSON string
management_event_rule_condition_instance = ManagementEventRuleCondition.from_json(json)
# print the JSON string representation of the object
print(ManagementEventRuleCondition.to_json())

# convert the object into a dict
management_event_rule_condition_dict = management_event_rule_condition_instance.to_dict()
# create an instance of ManagementEventRuleCondition from a dict
management_event_rule_condition_from_dict = ManagementEventRuleCondition.from_dict(management_event_rule_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



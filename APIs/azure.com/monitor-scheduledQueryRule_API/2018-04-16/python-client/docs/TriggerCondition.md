# TriggerCondition

The condition that results in the Log Search rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metric_trigger** | [**LogMetricTrigger**](LogMetricTrigger.md) |  | [optional] 
**threshold** | **float** | Result or count threshold based on which rule should be triggered. | 
**threshold_operator** | [**ConditionalOperator**](ConditionalOperator.md) |  | 

## Example

```python
from openapi_client.models.trigger_condition import TriggerCondition

# TODO update the JSON string below
json = "{}"
# create an instance of TriggerCondition from a JSON string
trigger_condition_instance = TriggerCondition.from_json(json)
# print the JSON string representation of the object
print(TriggerCondition.to_json())

# convert the object into a dict
trigger_condition_dict = trigger_condition_instance.to_dict()
# create an instance of TriggerCondition from a dict
trigger_condition_from_dict = TriggerCondition.from_dict(trigger_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



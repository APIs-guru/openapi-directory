# EventHealthEvaluation

The evaluation of the event health

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consider_warning_as_error** | **bool** |  | [optional] 
**unhealthy_event** | [**HealthEvent**](HealthEvent.md) |  | [optional] 

## Example

```python
from openapi_client.models.event_health_evaluation import EventHealthEvaluation

# TODO update the JSON string below
json = "{}"
# create an instance of EventHealthEvaluation from a JSON string
event_health_evaluation_instance = EventHealthEvaluation.from_json(json)
# print the JSON string representation of the object
print(EventHealthEvaluation.to_json())

# convert the object into a dict
event_health_evaluation_dict = event_health_evaluation_instance.to_dict()
# create an instance of EventHealthEvaluation from a dict
event_health_evaluation_from_dict = EventHealthEvaluation.from_dict(event_health_evaluation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



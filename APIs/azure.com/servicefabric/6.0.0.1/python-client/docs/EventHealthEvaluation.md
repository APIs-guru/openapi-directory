# EventHealthEvaluation

Represents health evaluation of a HealthEvent that was reported on the entity. The health evaluation is returned when evaluating health of an entity results in Error or Warning. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consider_warning_as_error** | **bool** | Indicates whether warnings are treated with the same severity as errors. The field is specified in the health policy used to evaluate the entity. | [optional] 
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



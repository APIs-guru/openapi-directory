# EventQueryParameter

Implements the event query parameter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affected_object_correlation_id** | **str** | The affected object correlationId for the events to be queried. | [optional] [readonly] 
**affected_object_friendly_name** | **str** | The affected object name of the events to be queried. | [optional] 
**end_time** | **datetime** | The end time of the time range within which the events are to be queried. | [optional] 
**event_code** | **str** | The source id of the events to be queried. | [optional] 
**event_type** | **str** | The type of the events to be queried. | [optional] 
**fabric_name** | **str** | The affected object server id of the events to be queried. | [optional] 
**severity** | **str** | The severity of the events to be queried. | [optional] 
**start_time** | **datetime** | The start time of the time range within which the events are to be queried. | [optional] 

## Example

```python
from openapi_client.models.event_query_parameter import EventQueryParameter

# TODO update the JSON string below
json = "{}"
# create an instance of EventQueryParameter from a JSON string
event_query_parameter_instance = EventQueryParameter.from_json(json)
# print the JSON string representation of the object
print(EventQueryParameter.to_json())

# convert the object into a dict
event_query_parameter_dict = event_query_parameter_instance.to_dict()
# create an instance of EventQueryParameter from a dict
event_query_parameter_from_dict = EventQueryParameter.from_dict(event_query_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



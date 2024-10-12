# EventGridEvent

Properties of an event published to an Event Grid topic.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **object** | Event data specific to the event type. | 
**data_version** | **str** | The schema version of the data object. | 
**event_time** | **datetime** | The time (in UTC) the event was generated. | 
**event_type** | **str** | The type of the event that occurred. | 
**id** | **str** | An unique identifier for the event. | 
**metadata_version** | **str** | The schema version of the event metadata. | [optional] [readonly] 
**subject** | **str** | A resource path relative to the topic path. | 
**topic** | **str** | The resource path of the event source. | [optional] 

## Example

```python
from openapi_client.models.event_grid_event import EventGridEvent

# TODO update the JSON string below
json = "{}"
# create an instance of EventGridEvent from a JSON string
event_grid_event_instance = EventGridEvent.from_json(json)
# print the JSON string representation of the object
print(EventGridEvent.to_json())

# convert the object into a dict
event_grid_event_dict = event_grid_event_instance.to_dict()
# create an instance of EventGridEvent from a dict
event_grid_event_from_dict = EventGridEvent.from_dict(event_grid_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



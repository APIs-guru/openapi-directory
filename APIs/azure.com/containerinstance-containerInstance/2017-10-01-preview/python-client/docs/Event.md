# Event

A container group or container instance event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | The count of the event. | [optional] 
**first_timestamp** | **datetime** | The date-time of the earliest logged event. | [optional] 
**last_timestamp** | **datetime** | The date-time of the latest logged event. | [optional] 
**message** | **str** | The event message. | [optional] 
**name** | **str** | The event name. | [optional] 
**type** | **str** | The event type. | [optional] 

## Example

```python
from openapi_client.models.event import Event

# TODO update the JSON string below
json = "{}"
# create an instance of Event from a JSON string
event_instance = Event.from_json(json)
# print the JSON string representation of the object
print(Event.to_json())

# convert the object into a dict
event_dict = event_instance.to_dict()
# create an instance of Event from a dict
event_from_dict = Event.from_dict(event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



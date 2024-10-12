# EventContent

The content of the event request message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | The action that encompasses the provided event. | [optional] 
**actor** | [**Actor**](Actor.md) |  | [optional] 
**id** | **str** | The event ID. | [optional] 
**request** | [**Request**](Request.md) |  | [optional] 
**source** | [**Source**](Source.md) |  | [optional] 
**target** | [**Target**](Target.md) |  | [optional] 
**timestamp** | **datetime** | The time at which the event occurred. | [optional] 

## Example

```python
from openapi_client.models.event_content import EventContent

# TODO update the JSON string below
json = "{}"
# create an instance of EventContent from a JSON string
event_content_instance = EventContent.from_json(json)
# print the JSON string representation of the object
print(EventContent.to_json())

# convert the object into a dict
event_content_dict = event_content_instance.to_dict()
# create an instance of EventContent from a dict
event_content_from_dict = EventContent.from_dict(event_content_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



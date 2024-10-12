# EventResponseMessage

The event response message received from the service URI.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** | The content of the event response message. | [optional] 
**headers** | **Dict[str, str]** | The headers of the event response message. | [optional] 
**reason_phrase** | **str** | The reason phrase of the event response message. | [optional] 
**status_code** | **str** | The status code of the event response message. | [optional] 
**version** | **str** | The HTTP message version. | [optional] 

## Example

```python
from openapi_client.models.event_response_message import EventResponseMessage

# TODO update the JSON string below
json = "{}"
# create an instance of EventResponseMessage from a JSON string
event_response_message_instance = EventResponseMessage.from_json(json)
# print the JSON string representation of the object
print(EventResponseMessage.to_json())

# convert the object into a dict
event_response_message_dict = event_response_message_instance.to_dict()
# create an instance of EventResponseMessage from a dict
event_response_message_from_dict = EventResponseMessage.from_dict(event_response_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



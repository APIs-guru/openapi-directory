# EventRequestMessage

The event request message sent to the service URI.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | [**EventContent**](EventContent.md) |  | [optional] 
**headers** | **Dict[str, str]** | The headers of the event request message. | [optional] 
**method** | **str** | The HTTP method used to send the event request message. | [optional] 
**request_uri** | **str** | The URI used to send the event request message. | [optional] 
**version** | **str** | The HTTP message version. | [optional] 

## Example

```python
from openapi_client.models.event_request_message import EventRequestMessage

# TODO update the JSON string below
json = "{}"
# create an instance of EventRequestMessage from a JSON string
event_request_message_instance = EventRequestMessage.from_json(json)
# print the JSON string representation of the object
print(EventRequestMessage.to_json())

# convert the object into a dict
event_request_message_dict = event_request_message_instance.to_dict()
# create an instance of EventRequestMessage from a dict
event_request_message_from_dict = EventRequestMessage.from_dict(event_request_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



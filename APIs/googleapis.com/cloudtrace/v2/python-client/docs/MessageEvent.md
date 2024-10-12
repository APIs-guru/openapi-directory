# MessageEvent

An event describing a message sent/received between Spans.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compressed_size_bytes** | **str** | The number of compressed bytes sent or received. If missing, the compressed size is assumed to be the same size as the uncompressed size. | [optional] 
**id** | **str** | An identifier for the MessageEvent&#39;s message that can be used to match &#x60;SENT&#x60; and &#x60;RECEIVED&#x60; MessageEvents. | [optional] 
**type** | **str** | Type of MessageEvent. Indicates whether the message was sent or received. | [optional] 
**uncompressed_size_bytes** | **str** | The number of uncompressed bytes sent or received. | [optional] 

## Example

```python
from openapi_client.models.message_event import MessageEvent

# TODO update the JSON string below
json = "{}"
# create an instance of MessageEvent from a JSON string
message_event_instance = MessageEvent.from_json(json)
# print the JSON string representation of the object
print(MessageEvent.to_json())

# convert the object into a dict
message_event_dict = message_event_instance.to_dict()
# create an instance of MessageEvent from a dict
message_event_from_dict = MessageEvent.from_dict(message_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



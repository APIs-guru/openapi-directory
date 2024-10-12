# SuperChatEvent

A `__superChatEvent__` resource represents a Super Chat purchase on a YouTube channel.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Etag of this resource. | [optional] 
**id** | **str** | The ID that YouTube assigns to uniquely identify the Super Chat event. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string &#x60;\&quot;youtube#superChatEvent\&quot;&#x60;. | [optional] [default to 'youtube#superChatEvent']
**snippet** | [**SuperChatEventSnippet**](SuperChatEventSnippet.md) |  | [optional] 

## Example

```python
from openapi_client.models.super_chat_event import SuperChatEvent

# TODO update the JSON string below
json = "{}"
# create an instance of SuperChatEvent from a JSON string
super_chat_event_instance = SuperChatEvent.from_json(json)
# print the JSON string representation of the object
print(SuperChatEvent.to_json())

# convert the object into a dict
super_chat_event_dict = super_chat_event_instance.to_dict()
# create an instance of SuperChatEvent from a dict
super_chat_event_from_dict = SuperChatEvent.from_dict(super_chat_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# WebChatChannel

Web Chat channel definition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**WebChatChannelProperties**](WebChatChannelProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.web_chat_channel import WebChatChannel

# TODO update the JSON string below
json = "{}"
# create an instance of WebChatChannel from a JSON string
web_chat_channel_instance = WebChatChannel.from_json(json)
# print the JSON string representation of the object
print(WebChatChannel.to_json())

# convert the object into a dict
web_chat_channel_dict = web_chat_channel_instance.to_dict()
# create an instance of WebChatChannel from a dict
web_chat_channel_from_dict = WebChatChannel.from_dict(web_chat_channel_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



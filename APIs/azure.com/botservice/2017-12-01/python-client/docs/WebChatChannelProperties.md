# WebChatChannelProperties

The parameters to provide for the Web Chat channel.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sites** | [**List[WebChatSite]**](WebChatSite.md) | The list of Web Chat sites | [optional] 
**web_chat_embed_code** | **str** | Web chat control embed code | [optional] [readonly] 

## Example

```python
from openapi_client.models.web_chat_channel_properties import WebChatChannelProperties

# TODO update the JSON string below
json = "{}"
# create an instance of WebChatChannelProperties from a JSON string
web_chat_channel_properties_instance = WebChatChannelProperties.from_json(json)
# print the JSON string representation of the object
print(WebChatChannelProperties.to_json())

# convert the object into a dict
web_chat_channel_properties_dict = web_chat_channel_properties_instance.to_dict()
# create an instance of WebChatChannelProperties from a dict
web_chat_channel_properties_from_dict = WebChatChannelProperties.from_dict(web_chat_channel_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



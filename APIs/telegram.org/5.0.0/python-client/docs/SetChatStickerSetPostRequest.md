# SetChatStickerSetPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chat_id** | [**DeleteChatStickerSetPostRequestChatId**](DeleteChatStickerSetPostRequestChatId.md) |  | 
**sticker_set_name** | **str** | Name of the sticker set to be set as the group sticker set | 

## Example

```python
from openapi_client.models.set_chat_sticker_set_post_request import SetChatStickerSetPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SetChatStickerSetPostRequest from a JSON string
set_chat_sticker_set_post_request_instance = SetChatStickerSetPostRequest.from_json(json)
# print the JSON string representation of the object
print(SetChatStickerSetPostRequest.to_json())

# convert the object into a dict
set_chat_sticker_set_post_request_dict = set_chat_sticker_set_post_request_instance.to_dict()
# create an instance of SetChatStickerSetPostRequest from a dict
set_chat_sticker_set_post_request_from_dict = SetChatStickerSetPostRequest.from_dict(set_chat_sticker_set_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



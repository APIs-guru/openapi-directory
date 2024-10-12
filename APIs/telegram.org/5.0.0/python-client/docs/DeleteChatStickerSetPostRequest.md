# DeleteChatStickerSetPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chat_id** | [**DeleteChatStickerSetPostRequestChatId**](DeleteChatStickerSetPostRequestChatId.md) |  | 

## Example

```python
from openapi_client.models.delete_chat_sticker_set_post_request import DeleteChatStickerSetPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteChatStickerSetPostRequest from a JSON string
delete_chat_sticker_set_post_request_instance = DeleteChatStickerSetPostRequest.from_json(json)
# print the JSON string representation of the object
print(DeleteChatStickerSetPostRequest.to_json())

# convert the object into a dict
delete_chat_sticker_set_post_request_dict = delete_chat_sticker_set_post_request_instance.to_dict()
# create an instance of DeleteChatStickerSetPostRequest from a dict
delete_chat_sticker_set_post_request_from_dict = DeleteChatStickerSetPostRequest.from_dict(delete_chat_sticker_set_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



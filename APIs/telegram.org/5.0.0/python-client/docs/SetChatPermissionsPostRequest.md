# SetChatPermissionsPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chat_id** | [**DeleteChatStickerSetPostRequestChatId**](DeleteChatStickerSetPostRequestChatId.md) |  | 
**permissions** | [**ChatPermissions**](ChatPermissions.md) |  | 

## Example

```python
from openapi_client.models.set_chat_permissions_post_request import SetChatPermissionsPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SetChatPermissionsPostRequest from a JSON string
set_chat_permissions_post_request_instance = SetChatPermissionsPostRequest.from_json(json)
# print the JSON string representation of the object
print(SetChatPermissionsPostRequest.to_json())

# convert the object into a dict
set_chat_permissions_post_request_dict = set_chat_permissions_post_request_instance.to_dict()
# create an instance of SetChatPermissionsPostRequest from a dict
set_chat_permissions_post_request_from_dict = SetChatPermissionsPostRequest.from_dict(set_chat_permissions_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# SetChatAdministratorCustomTitlePostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chat_id** | [**DeleteChatStickerSetPostRequestChatId**](DeleteChatStickerSetPostRequestChatId.md) |  | 
**custom_title** | **str** | New custom title for the administrator; 0-16 characters, emoji are not allowed | 
**user_id** | **int** | Unique identifier of the target user | 

## Example

```python
from openapi_client.models.set_chat_administrator_custom_title_post_request import SetChatAdministratorCustomTitlePostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SetChatAdministratorCustomTitlePostRequest from a JSON string
set_chat_administrator_custom_title_post_request_instance = SetChatAdministratorCustomTitlePostRequest.from_json(json)
# print the JSON string representation of the object
print(SetChatAdministratorCustomTitlePostRequest.to_json())

# convert the object into a dict
set_chat_administrator_custom_title_post_request_dict = set_chat_administrator_custom_title_post_request_instance.to_dict()
# create an instance of SetChatAdministratorCustomTitlePostRequest from a dict
set_chat_administrator_custom_title_post_request_from_dict = SetChatAdministratorCustomTitlePostRequest.from_dict(set_chat_administrator_custom_title_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# RestrictChatMemberPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chat_id** | [**DeleteChatStickerSetPostRequestChatId**](DeleteChatStickerSetPostRequestChatId.md) |  | 
**permissions** | [**ChatPermissions**](ChatPermissions.md) |  | 
**until_date** | **int** | Date when restrictions will be lifted for the user, unix time. If user is restricted for more than 366 days or less than 30 seconds from the current time, they are considered to be restricted forever | [optional] 
**user_id** | **int** | Unique identifier of the target user | 

## Example

```python
from openapi_client.models.restrict_chat_member_post_request import RestrictChatMemberPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RestrictChatMemberPostRequest from a JSON string
restrict_chat_member_post_request_instance = RestrictChatMemberPostRequest.from_json(json)
# print the JSON string representation of the object
print(RestrictChatMemberPostRequest.to_json())

# convert the object into a dict
restrict_chat_member_post_request_dict = restrict_chat_member_post_request_instance.to_dict()
# create an instance of RestrictChatMemberPostRequest from a dict
restrict_chat_member_post_request_from_dict = RestrictChatMemberPostRequest.from_dict(restrict_chat_member_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



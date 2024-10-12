# KickChatMemberPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chat_id** | [**KickChatMemberPostRequestChatId**](KickChatMemberPostRequestChatId.md) |  | 
**until_date** | **int** | Date when the user will be unbanned, unix time. If user is banned for more than 366 days or less than 30 seconds from the current time they are considered to be banned forever | [optional] 
**user_id** | **int** | Unique identifier of the target user | 

## Example

```python
from openapi_client.models.kick_chat_member_post_request import KickChatMemberPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of KickChatMemberPostRequest from a JSON string
kick_chat_member_post_request_instance = KickChatMemberPostRequest.from_json(json)
# print the JSON string representation of the object
print(KickChatMemberPostRequest.to_json())

# convert the object into a dict
kick_chat_member_post_request_dict = kick_chat_member_post_request_instance.to_dict()
# create an instance of KickChatMemberPostRequest from a dict
kick_chat_member_post_request_from_dict = KickChatMemberPostRequest.from_dict(kick_chat_member_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



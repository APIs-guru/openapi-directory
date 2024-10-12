# UnbanChatMemberPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chat_id** | [**UnbanChatMemberPostRequestChatId**](UnbanChatMemberPostRequestChatId.md) |  | 
**only_if_banned** | **bool** | Do nothing if the user is not banned | [optional] 
**user_id** | **int** | Unique identifier of the target user | 

## Example

```python
from openapi_client.models.unban_chat_member_post_request import UnbanChatMemberPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UnbanChatMemberPostRequest from a JSON string
unban_chat_member_post_request_instance = UnbanChatMemberPostRequest.from_json(json)
# print the JSON string representation of the object
print(UnbanChatMemberPostRequest.to_json())

# convert the object into a dict
unban_chat_member_post_request_dict = unban_chat_member_post_request_instance.to_dict()
# create an instance of UnbanChatMemberPostRequest from a dict
unban_chat_member_post_request_from_dict = UnbanChatMemberPostRequest.from_dict(unban_chat_member_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



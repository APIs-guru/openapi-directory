# GetChatMemberPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chat_id** | [**GetChatPostRequestChatId**](GetChatPostRequestChatId.md) |  | 
**user_id** | **int** | Unique identifier of the target user | 

## Example

```python
from openapi_client.models.get_chat_member_post_request import GetChatMemberPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GetChatMemberPostRequest from a JSON string
get_chat_member_post_request_instance = GetChatMemberPostRequest.from_json(json)
# print the JSON string representation of the object
print(GetChatMemberPostRequest.to_json())

# convert the object into a dict
get_chat_member_post_request_dict = get_chat_member_post_request_instance.to_dict()
# create an instance of GetChatMemberPostRequest from a dict
get_chat_member_post_request_from_dict = GetChatMemberPostRequest.from_dict(get_chat_member_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



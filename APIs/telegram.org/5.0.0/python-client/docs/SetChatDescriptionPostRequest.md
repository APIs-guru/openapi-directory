# SetChatDescriptionPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chat_id** | [**CopyMessagePostRequestChatId**](CopyMessagePostRequestChatId.md) |  | 
**description** | **str** | New chat description, 0-255 characters | [optional] 

## Example

```python
from openapi_client.models.set_chat_description_post_request import SetChatDescriptionPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SetChatDescriptionPostRequest from a JSON string
set_chat_description_post_request_instance = SetChatDescriptionPostRequest.from_json(json)
# print the JSON string representation of the object
print(SetChatDescriptionPostRequest.to_json())

# convert the object into a dict
set_chat_description_post_request_dict = set_chat_description_post_request_instance.to_dict()
# create an instance of SetChatDescriptionPostRequest from a dict
set_chat_description_post_request_from_dict = SetChatDescriptionPostRequest.from_dict(set_chat_description_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# DeleteMessagePostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chat_id** | [**CopyMessagePostRequestChatId**](CopyMessagePostRequestChatId.md) |  | 
**message_id** | **int** | Identifier of the message to delete | 

## Example

```python
from openapi_client.models.delete_message_post_request import DeleteMessagePostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteMessagePostRequest from a JSON string
delete_message_post_request_instance = DeleteMessagePostRequest.from_json(json)
# print the JSON string representation of the object
print(DeleteMessagePostRequest.to_json())

# convert the object into a dict
delete_message_post_request_dict = delete_message_post_request_instance.to_dict()
# create an instance of DeleteMessagePostRequest from a dict
delete_message_post_request_from_dict = DeleteMessagePostRequest.from_dict(delete_message_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



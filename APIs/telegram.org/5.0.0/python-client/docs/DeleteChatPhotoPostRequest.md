# DeleteChatPhotoPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chat_id** | [**CopyMessagePostRequestChatId**](CopyMessagePostRequestChatId.md) |  | 

## Example

```python
from openapi_client.models.delete_chat_photo_post_request import DeleteChatPhotoPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteChatPhotoPostRequest from a JSON string
delete_chat_photo_post_request_instance = DeleteChatPhotoPostRequest.from_json(json)
# print the JSON string representation of the object
print(DeleteChatPhotoPostRequest.to_json())

# convert the object into a dict
delete_chat_photo_post_request_dict = delete_chat_photo_post_request_instance.to_dict()
# create an instance of DeleteChatPhotoPostRequest from a dict
delete_chat_photo_post_request_from_dict = DeleteChatPhotoPostRequest.from_dict(delete_chat_photo_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



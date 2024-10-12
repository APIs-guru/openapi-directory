# ChatPhoto

This object represents a chat photo.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**big_file_id** | **str** | File identifier of big (640x640) chat photo. This file\\_id can be used only for photo download and only for as long as the photo is not changed. | 
**big_file_unique_id** | **str** | Unique file identifier of big (640x640) chat photo, which is supposed to be the same over time and for different bots. Can&#39;t be used to download or reuse the file. | 
**small_file_id** | **str** | File identifier of small (160x160) chat photo. This file\\_id can be used only for photo download and only for as long as the photo is not changed. | 
**small_file_unique_id** | **str** | Unique file identifier of small (160x160) chat photo, which is supposed to be the same over time and for different bots. Can&#39;t be used to download or reuse the file. | 

## Example

```python
from openapi_client.models.chat_photo import ChatPhoto

# TODO update the JSON string below
json = "{}"
# create an instance of ChatPhoto from a JSON string
chat_photo_instance = ChatPhoto.from_json(json)
# print the JSON string representation of the object
print(ChatPhoto.to_json())

# convert the object into a dict
chat_photo_dict = chat_photo_instance.to_dict()
# create an instance of ChatPhoto from a dict
chat_photo_from_dict = ChatPhoto.from_dict(chat_photo_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# Video

This object represents a video file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **int** | Duration of the video in seconds as defined by sender | 
**file_id** | **str** | Identifier for this file, which can be used to download or reuse the file | 
**file_name** | **str** | *Optional*. Original filename as defined by sender | [optional] 
**file_size** | **int** | *Optional*. File size | [optional] 
**file_unique_id** | **str** | Unique identifier for this file, which is supposed to be the same over time and for different bots. Can&#39;t be used to download or reuse the file. | 
**height** | **int** | Video height as defined by sender | 
**mime_type** | **str** | *Optional*. Mime type of a file as defined by sender | [optional] 
**thumb** | [**PhotoSize**](PhotoSize.md) |  | [optional] 
**width** | **int** | Video width as defined by sender | 

## Example

```python
from openapi_client.models.video import Video

# TODO update the JSON string below
json = "{}"
# create an instance of Video from a JSON string
video_instance = Video.from_json(json)
# print the JSON string representation of the object
print(Video.to_json())

# convert the object into a dict
video_dict = video_instance.to_dict()
# create an instance of Video from a dict
video_from_dict = Video.from_dict(video_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# VideoNote

This object represents a [video message](https://telegram.org/blog/video-messages-and-telescope) (available in Telegram apps as of [v.4.0](https://telegram.org/blog/video-messages-and-telescope)).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **int** | Duration of the video in seconds as defined by sender | 
**file_id** | **str** | Identifier for this file, which can be used to download or reuse the file | 
**file_size** | **int** | *Optional*. File size | [optional] 
**file_unique_id** | **str** | Unique identifier for this file, which is supposed to be the same over time and for different bots. Can&#39;t be used to download or reuse the file. | 
**length** | **int** | Video width and height (diameter of the video message) as defined by sender | 
**thumb** | [**PhotoSize**](PhotoSize.md) |  | [optional] 

## Example

```python
from openapi_client.models.video_note import VideoNote

# TODO update the JSON string below
json = "{}"
# create an instance of VideoNote from a JSON string
video_note_instance = VideoNote.from_json(json)
# print the JSON string representation of the object
print(VideoNote.to_json())

# convert the object into a dict
video_note_dict = video_note_instance.to_dict()
# create an instance of VideoNote from a dict
video_note_from_dict = VideoNote.from_dict(video_note_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



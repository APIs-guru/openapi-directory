# VideoItem

An item containing a video.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**caption** | **str** | The text displayed below the video. | [optional] 
**video** | [**Video**](Video.md) |  | [optional] 

## Example

```python
from openapi_client.models.video_item import VideoItem

# TODO update the JSON string below
json = "{}"
# create an instance of VideoItem from a JSON string
video_item_instance = VideoItem.from_json(json)
# print the JSON string representation of the object
print(VideoItem.to_json())

# convert the object into a dict
video_item_dict = video_item_instance.to_dict()
# create an instance of VideoItem from a dict
video_item_from_dict = VideoItem.from_dict(video_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# Video

Describes the basic properties for encoding the input video.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_frame_interval** | **str** | The distance between two key frames, thereby defining a group of pictures (GOP). The value should be a non-zero integer in the range [1, 30] seconds, specified in ISO 8601 format. The default is 2 seconds (PT2S). | [optional] 
**stretch_mode** | **str** | The resizing mode - how the input video will be resized to fit the desired output resolution(s). Default is AutoSize | [optional] 

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



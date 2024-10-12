# VideoOffset

Video Offset

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offset_percentage** | **int** | Duration, as a percentage of video duration. Do not set when offsetSeconds is set. Acceptable values are 0 to 100, inclusive. | [optional] 
**offset_seconds** | **int** | Duration, in seconds. Do not set when offsetPercentage is set. Acceptable values are 0 to 86399, inclusive. | [optional] 

## Example

```python
from openapi_client.models.video_offset import VideoOffset

# TODO update the JSON string below
json = "{}"
# create an instance of VideoOffset from a JSON string
video_offset_instance = VideoOffset.from_json(json)
# print the JSON string representation of the object
print(VideoOffset.to_json())

# convert the object into a dict
video_offset_dict = video_offset_instance.to_dict()
# create an instance of VideoOffset from a dict
video_offset_from_dict = VideoOffset.from_dict(video_offset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



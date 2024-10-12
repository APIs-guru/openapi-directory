# VideoPlayerSizeTargetingOptionDetails

Represents a targetable video player size. This will be populated in the video_player_size_details field when targeting_type is `TARGETING_TYPE_VIDEO_PLAYER_SIZE`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**video_player_size** | **str** | Output only. The video player size. | [optional] [readonly] 

## Example

```python
from openapi_client.models.video_player_size_targeting_option_details import VideoPlayerSizeTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of VideoPlayerSizeTargetingOptionDetails from a JSON string
video_player_size_targeting_option_details_instance = VideoPlayerSizeTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(VideoPlayerSizeTargetingOptionDetails.to_json())

# convert the object into a dict
video_player_size_targeting_option_details_dict = video_player_size_targeting_option_details_instance.to_dict()
# create an instance of VideoPlayerSizeTargetingOptionDetails from a dict
video_player_size_targeting_option_details_from_dict = VideoPlayerSizeTargetingOptionDetails.from_dict(video_player_size_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



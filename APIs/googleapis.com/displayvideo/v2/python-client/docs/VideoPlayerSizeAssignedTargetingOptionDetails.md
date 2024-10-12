# VideoPlayerSizeAssignedTargetingOptionDetails

Video player size targeting option details. This will be populated in the video_player_size_details field when targeting_type is `TARGETING_TYPE_VIDEO_PLAYER_SIZE`. Explicitly targeting all options is not supported. Remove all video player size targeting options to achieve this effect.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**video_player_size** | **str** | Required. The video player size. | [optional] 

## Example

```python
from openapi_client.models.video_player_size_assigned_targeting_option_details import VideoPlayerSizeAssignedTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of VideoPlayerSizeAssignedTargetingOptionDetails from a JSON string
video_player_size_assigned_targeting_option_details_instance = VideoPlayerSizeAssignedTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(VideoPlayerSizeAssignedTargetingOptionDetails.to_json())

# convert the object into a dict
video_player_size_assigned_targeting_option_details_dict = video_player_size_assigned_targeting_option_details_instance.to_dict()
# create an instance of VideoPlayerSizeAssignedTargetingOptionDetails from a dict
video_player_size_assigned_targeting_option_details_from_dict = VideoPlayerSizeAssignedTargetingOptionDetails.from_dict(video_player_size_assigned_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



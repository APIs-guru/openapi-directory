# YoutubeVideoAssignedTargetingOptionDetails

Details for YouTube video assigned targeting option. This will be populated in the youtube_video_details field when targeting_type is `TARGETING_TYPE_YOUTUBE_VIDEO`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**negative** | **bool** | Indicates if this option is being negatively targeted. | [optional] 
**video_id** | **str** | YouTube video id as it appears on the YouTube watch page. | [optional] 

## Example

```python
from openapi_client.models.youtube_video_assigned_targeting_option_details import YoutubeVideoAssignedTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of YoutubeVideoAssignedTargetingOptionDetails from a JSON string
youtube_video_assigned_targeting_option_details_instance = YoutubeVideoAssignedTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(YoutubeVideoAssignedTargetingOptionDetails.to_json())

# convert the object into a dict
youtube_video_assigned_targeting_option_details_dict = youtube_video_assigned_targeting_option_details_instance.to_dict()
# create an instance of YoutubeVideoAssignedTargetingOptionDetails from a dict
youtube_video_assigned_targeting_option_details_from_dict = YoutubeVideoAssignedTargetingOptionDetails.from_dict(youtube_video_assigned_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



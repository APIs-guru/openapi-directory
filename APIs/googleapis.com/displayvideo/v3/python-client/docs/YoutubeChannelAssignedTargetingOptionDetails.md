# YoutubeChannelAssignedTargetingOptionDetails

Details for YouTube channel assigned targeting option. This will be populated in the youtube_channel_details field when targeting_type is `TARGETING_TYPE_YOUTUBE_CHANNEL`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_id** | **str** | The YouTube uploader channel id or the channel code of a YouTube channel. | [optional] 
**negative** | **bool** | Indicates if this option is being negatively targeted. | [optional] 

## Example

```python
from openapi_client.models.youtube_channel_assigned_targeting_option_details import YoutubeChannelAssignedTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of YoutubeChannelAssignedTargetingOptionDetails from a JSON string
youtube_channel_assigned_targeting_option_details_instance = YoutubeChannelAssignedTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(YoutubeChannelAssignedTargetingOptionDetails.to_json())

# convert the object into a dict
youtube_channel_assigned_targeting_option_details_dict = youtube_channel_assigned_targeting_option_details_instance.to_dict()
# create an instance of YoutubeChannelAssignedTargetingOptionDetails from a dict
youtube_channel_assigned_targeting_option_details_from_dict = YoutubeChannelAssignedTargetingOptionDetails.from_dict(youtube_channel_assigned_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



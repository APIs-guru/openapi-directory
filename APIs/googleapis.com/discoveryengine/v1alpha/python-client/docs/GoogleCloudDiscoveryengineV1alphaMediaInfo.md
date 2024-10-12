# GoogleCloudDiscoveryengineV1alphaMediaInfo

Media-specific user event information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**media_progress_duration** | **str** | The media progress time in seconds, if applicable. For example, if the end user has finished 90 seconds of a playback video, then MediaInfo.media_progress_duration.seconds should be set to 90. | [optional] 
**media_progress_percentage** | **float** | Media progress should be computed using only the media_progress_duration relative to the media total length. This value must be between &#x60;[0, 1.0]&#x60; inclusive. If this is not a playback or the progress cannot be computed (e.g. ongoing livestream), this field should be unset. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_media_info import GoogleCloudDiscoveryengineV1alphaMediaInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaMediaInfo from a JSON string
google_cloud_discoveryengine_v1alpha_media_info_instance = GoogleCloudDiscoveryengineV1alphaMediaInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaMediaInfo.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_media_info_dict = google_cloud_discoveryengine_v1alpha_media_info_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaMediaInfo from a dict
google_cloud_discoveryengine_v1alpha_media_info_from_dict = GoogleCloudDiscoveryengineV1alphaMediaInfo.from_dict(google_cloud_discoveryengine_v1alpha_media_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



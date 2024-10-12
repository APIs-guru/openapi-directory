# VideoAdSequenceSettings

Settings related to VideoAdSequence.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**minimum_duration** | **str** | The minimum time interval before the same user sees this sequence again. | [optional] 
**steps** | [**List[VideoAdSequenceStep]**](VideoAdSequenceStep.md) | The steps of which the sequence consists. | [optional] 

## Example

```python
from openapi_client.models.video_ad_sequence_settings import VideoAdSequenceSettings

# TODO update the JSON string below
json = "{}"
# create an instance of VideoAdSequenceSettings from a JSON string
video_ad_sequence_settings_instance = VideoAdSequenceSettings.from_json(json)
# print the JSON string representation of the object
print(VideoAdSequenceSettings.to_json())

# convert the object into a dict
video_ad_sequence_settings_dict = video_ad_sequence_settings_instance.to_dict()
# create an instance of VideoAdSequenceSettings from a dict
video_ad_sequence_settings_from_dict = VideoAdSequenceSettings.from_dict(video_ad_sequence_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



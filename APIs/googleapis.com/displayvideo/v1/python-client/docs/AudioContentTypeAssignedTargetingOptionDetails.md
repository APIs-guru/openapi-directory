# AudioContentTypeAssignedTargetingOptionDetails

Details for audio content type assigned targeting option. This will be populated in the audio_content_type_details field when targeting_type is `TARGETING_TYPE_AUDIO_CONTENT_TYPE`. Explicitly targeting all options is not supported. Remove all audio content type targeting options to achieve this effect.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audio_content_type** | **str** | Required. The audio content type. | [optional] 
**targeting_option_id** | **str** | Required. The targeting_option_id field when targeting_type is &#x60;TARGETING_TYPE_AUDIO_CONTENT_TYPE&#x60;. | [optional] 

## Example

```python
from openapi_client.models.audio_content_type_assigned_targeting_option_details import AudioContentTypeAssignedTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of AudioContentTypeAssignedTargetingOptionDetails from a JSON string
audio_content_type_assigned_targeting_option_details_instance = AudioContentTypeAssignedTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(AudioContentTypeAssignedTargetingOptionDetails.to_json())

# convert the object into a dict
audio_content_type_assigned_targeting_option_details_dict = audio_content_type_assigned_targeting_option_details_instance.to_dict()
# create an instance of AudioContentTypeAssignedTargetingOptionDetails from a dict
audio_content_type_assigned_targeting_option_details_from_dict = AudioContentTypeAssignedTargetingOptionDetails.from_dict(audio_content_type_assigned_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



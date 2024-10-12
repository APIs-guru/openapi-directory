# AudioContentTypeTargetingOptionDetails

Represents a targetable audio content type. This will be populated in the audio_content_type_details field when targeting_type is `TARGETING_TYPE_AUDIO_CONTENT_TYPE`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audio_content_type** | **str** | Output only. The audio content type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.audio_content_type_targeting_option_details import AudioContentTypeTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of AudioContentTypeTargetingOptionDetails from a JSON string
audio_content_type_targeting_option_details_instance = AudioContentTypeTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(AudioContentTypeTargetingOptionDetails.to_json())

# convert the object into a dict
audio_content_type_targeting_option_details_dict = audio_content_type_targeting_option_details_instance.to_dict()
# create an instance of AudioContentTypeTargetingOptionDetails from a dict
audio_content_type_targeting_option_details_from_dict = AudioContentTypeTargetingOptionDetails.from_dict(audio_content_type_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



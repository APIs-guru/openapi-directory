# SpeakerDiarizationConfig

Config to enable speaker diarization.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_speaker_diarization** | **bool** | If &#39;true&#39;, enables speaker detection for each recognized word in the top alternative of the recognition result using a speaker_label provided in the WordInfo. | [optional] 
**max_speaker_count** | **int** | Maximum number of speakers in the conversation. This range gives you more flexibility by allowing the system to automatically determine the correct number of speakers. If not set, the default value is 6. | [optional] 
**min_speaker_count** | **int** | Minimum number of speakers in the conversation. This range gives you more flexibility by allowing the system to automatically determine the correct number of speakers. If not set, the default value is 2. | [optional] 
**speaker_tag** | **int** | Output only. Unused. | [optional] [readonly] 

## Example

```python
from openapi_client.models.speaker_diarization_config import SpeakerDiarizationConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SpeakerDiarizationConfig from a JSON string
speaker_diarization_config_instance = SpeakerDiarizationConfig.from_json(json)
# print the JSON string representation of the object
print(SpeakerDiarizationConfig.to_json())

# convert the object into a dict
speaker_diarization_config_dict = speaker_diarization_config_instance.to_dict()
# create an instance of SpeakerDiarizationConfig from a dict
speaker_diarization_config_from_dict = SpeakerDiarizationConfig.from_dict(speaker_diarization_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



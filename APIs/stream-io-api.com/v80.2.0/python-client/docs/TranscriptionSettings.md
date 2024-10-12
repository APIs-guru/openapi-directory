# TranscriptionSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**closed_caption_mode** | **str** |  | 
**mode** | **str** |  | 

## Example

```python
from openapi_client.models.transcription_settings import TranscriptionSettings

# TODO update the JSON string below
json = "{}"
# create an instance of TranscriptionSettings from a JSON string
transcription_settings_instance = TranscriptionSettings.from_json(json)
# print the JSON string representation of the object
print(TranscriptionSettings.to_json())

# convert the object into a dict
transcription_settings_dict = transcription_settings_instance.to_dict()
# create an instance of TranscriptionSettings from a dict
transcription_settings_from_dict = TranscriptionSettings.from_dict(transcription_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



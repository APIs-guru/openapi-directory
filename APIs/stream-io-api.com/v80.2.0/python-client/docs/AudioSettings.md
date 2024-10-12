# AudioSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_request_enabled** | **bool** |  | 
**opus_dtx_enabled** | **bool** |  | 
**redundant_coding_enabled** | **bool** |  | 

## Example

```python
from openapi_client.models.audio_settings import AudioSettings

# TODO update the JSON string below
json = "{}"
# create an instance of AudioSettings from a JSON string
audio_settings_instance = AudioSettings.from_json(json)
# print the JSON string representation of the object
print(AudioSettings.to_json())

# convert the object into a dict
audio_settings_dict = audio_settings_instance.to_dict()
# create an instance of AudioSettings from a dict
audio_settings_from_dict = AudioSettings.from_dict(audio_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



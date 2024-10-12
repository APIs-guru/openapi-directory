# AacAudio

Describes Advanced Audio Codec (AAC) audio encoding settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**profile** | **str** | The encoding profile to be used when encoding audio with AAC. | [optional] 

## Example

```python
from openapi_client.models.aac_audio import AacAudio

# TODO update the JSON string below
json = "{}"
# create an instance of AacAudio from a JSON string
aac_audio_instance = AacAudio.from_json(json)
# print the JSON string representation of the object
print(AacAudio.to_json())

# convert the object into a dict
aac_audio_dict = aac_audio_instance.to_dict()
# create an instance of AacAudio from a dict
aac_audio_from_dict = AacAudio.from_dict(aac_audio_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



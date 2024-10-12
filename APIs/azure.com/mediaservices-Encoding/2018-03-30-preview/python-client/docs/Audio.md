# Audio

Defines the common properties for all audio codecs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bitrate** | **int** | The bitrate, in bits per second, of the output encoded audio. | [optional] 
**channels** | **int** | The number of channels in the audio. | [optional] 
**sampling_rate** | **int** | The sampling rate to use for encoding in hertz. | [optional] 

## Example

```python
from openapi_client.models.audio import Audio

# TODO update the JSON string below
json = "{}"
# create an instance of Audio from a JSON string
audio_instance = Audio.from_json(json)
# print the JSON string representation of the object
print(Audio.to_json())

# convert the object into a dict
audio_dict = audio_instance.to_dict()
# create an instance of Audio from a dict
audio_from_dict = Audio.from_dict(audio_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



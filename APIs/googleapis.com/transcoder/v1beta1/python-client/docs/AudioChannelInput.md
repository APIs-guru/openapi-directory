# AudioChannelInput

Identifies which input file, track, and channel should be used.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **int** | Required. The zero-based index of the channel in the input file. | [optional] 
**gain_db** | **float** | Audio volume control in dB. Negative values decrease volume, positive values increase. The default is 0. | [optional] 
**key** | **str** | Required. The &#x60;Input.key&#x60; that identifies the input file. | [optional] 
**track** | **int** | Required. The zero-based index of the track in the input file. | [optional] 

## Example

```python
from openapi_client.models.audio_channel_input import AudioChannelInput

# TODO update the JSON string below
json = "{}"
# create an instance of AudioChannelInput from a JSON string
audio_channel_input_instance = AudioChannelInput.from_json(json)
# print the JSON string representation of the object
print(AudioChannelInput.to_json())

# convert the object into a dict
audio_channel_input_dict = audio_channel_input_instance.to_dict()
# create an instance of AudioChannelInput from a dict
audio_channel_input_from_dict = AudioChannelInput.from_dict(audio_channel_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



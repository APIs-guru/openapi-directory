# AudioChannel

The audio channel.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inputs** | [**List[AudioChannelInput]**](AudioChannelInput.md) | List of &#x60;Job.inputs&#x60; for this audio channel. | [optional] 

## Example

```python
from openapi_client.models.audio_channel import AudioChannel

# TODO update the JSON string below
json = "{}"
# create an instance of AudioChannel from a JSON string
audio_channel_instance = AudioChannel.from_json(json)
# print the JSON string representation of the object
print(AudioChannel.to_json())

# convert the object into a dict
audio_channel_dict = audio_channel_instance.to_dict()
# create an instance of AudioChannel from a dict
audio_channel_from_dict = AudioChannel.from_dict(audio_channel_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



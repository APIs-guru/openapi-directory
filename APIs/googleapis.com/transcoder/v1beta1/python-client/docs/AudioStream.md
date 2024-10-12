# AudioStream

Audio stream resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bitrate_bps** | **int** | Required. Audio bitrate in bits per second. Must be between 1 and 10,000,000. | [optional] 
**channel_count** | **int** | Number of audio channels. Must be between 1 and 6. The default is 2. | [optional] 
**channel_layout** | **List[str]** | A list of channel names specifying layout of the audio channels. This only affects the metadata embedded in the container headers, if supported by the specified format. The default is &#x60;[\&quot;fl\&quot;, \&quot;fr\&quot;]&#x60;. Supported channel names: - &#39;fl&#39; - Front left channel - &#39;fr&#39; - Front right channel - &#39;sl&#39; - Side left channel - &#39;sr&#39; - Side right channel - &#39;fc&#39; - Front center channel - &#39;lfe&#39; - Low frequency | [optional] 
**codec** | **str** | The codec for this audio stream. The default is &#x60;\&quot;aac\&quot;&#x60;. Supported audio codecs: - &#39;aac&#39; - &#39;aac-he&#39; - &#39;aac-he-v2&#39; - &#39;mp3&#39; - &#39;ac3&#39; - &#39;eac3&#39; | [optional] 
**mapping** | [**List[AudioAtom]**](AudioAtom.md) | The mapping for the &#x60;Job.edit_list&#x60; atoms with audio &#x60;EditAtom.inputs&#x60;. | [optional] 
**sample_rate_hertz** | **int** | The audio sample rate in Hertz. The default is 48000 Hertz. | [optional] 

## Example

```python
from openapi_client.models.audio_stream import AudioStream

# TODO update the JSON string below
json = "{}"
# create an instance of AudioStream from a JSON string
audio_stream_instance = AudioStream.from_json(json)
# print the JSON string representation of the object
print(AudioStream.to_json())

# convert the object into a dict
audio_stream_dict = audio_stream_instance.to_dict()
# create an instance of AudioStream from a dict
audio_stream_from_dict = AudioStream.from_dict(audio_stream_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



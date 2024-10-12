# AudioStream

Audio stream resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bitrate_bps** | **int** | Required. Audio bitrate in bits per second. Must be between 1 and 10,000,000. | [optional] 
**channel_count** | **int** | Number of audio channels. Must be between 1 and 6. The default is 2. | [optional] 
**channel_layout** | **List[str]** | A list of channel names specifying layout of the audio channels. This only affects the metadata embedded in the container headers, if supported by the specified format. The default is &#x60;[\&quot;fl\&quot;, \&quot;fr\&quot;]&#x60;. Supported channel names: - &#x60;fl&#x60; - Front left channel - &#x60;fr&#x60; - Front right channel - &#x60;sl&#x60; - Side left channel - &#x60;sr&#x60; - Side right channel - &#x60;fc&#x60; - Front center channel - &#x60;lfe&#x60; - Low frequency | [optional] 
**codec** | **str** | The codec for this audio stream. The default is &#x60;aac&#x60;. Supported audio codecs: - &#x60;aac&#x60; - &#x60;aac-he&#x60; - &#x60;aac-he-v2&#x60; - &#x60;mp3&#x60; - &#x60;ac3&#x60; - &#x60;eac3&#x60; | [optional] 
**display_name** | **str** | The name for this particular audio stream that will be added to the HLS/DASH manifest. Not supported in MP4 files. | [optional] 
**language_code** | **str** | The BCP-47 language code, such as &#x60;en-US&#x60; or &#x60;sr-Latn&#x60;. For more information, see https://www.unicode.org/reports/tr35/#Unicode_locale_identifier. Not supported in MP4 files. | [optional] 
**mapping** | [**List[AudioMapping]**](AudioMapping.md) | The mapping for the JobConfig.edit_list atoms with audio EditAtom.inputs. | [optional] 
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



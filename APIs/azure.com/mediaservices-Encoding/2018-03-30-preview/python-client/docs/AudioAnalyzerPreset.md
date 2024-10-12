# AudioAnalyzerPreset

The Audio Analyzer preset applies a pre-defined set of AI-based analysis operations, including speech transcription. Currently, the preset supports processing of content with a single audio track.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audio_language** | **str** | The language for the audio payload in the input using the BCP-47 format of &#39;language tag-region&#39; (e.g: &#39;en-US&#39;). The list of supported languages are, &#39;en-US&#39;, &#39;en-GB&#39;, &#39;es-ES&#39;, &#39;es-MX&#39;, &#39;fr-FR&#39;, &#39;it-IT&#39;, &#39;ja-JP&#39;, &#39;pt-BR&#39;, &#39;zh-CN&#39;. | [optional] 

## Example

```python
from openapi_client.models.audio_analyzer_preset import AudioAnalyzerPreset

# TODO update the JSON string below
json = "{}"
# create an instance of AudioAnalyzerPreset from a JSON string
audio_analyzer_preset_instance = AudioAnalyzerPreset.from_json(json)
# print the JSON string representation of the object
print(AudioAnalyzerPreset.to_json())

# convert the object into a dict
audio_analyzer_preset_dict = audio_analyzer_preset_instance.to_dict()
# create an instance of AudioAnalyzerPreset from a dict
audio_analyzer_preset_from_dict = AudioAnalyzerPreset.from_dict(audio_analyzer_preset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



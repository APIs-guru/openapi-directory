# AudioAnalyzerPreset

The Audio Analyzer preset applies a pre-defined set of AI-based analysis operations, including speech transcription. Currently, the preset supports processing of content with a single audio track.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audio_language** | **str** | The language for the audio payload in the input using the BCP-47 format of &#39;language tag-region&#39; (e.g: &#39;en-US&#39;).  The list of supported languages are English (&#39;en-US&#39; and &#39;en-GB&#39;), Spanish (&#39;es-ES&#39; and &#39;es-MX&#39;), French (&#39;fr-FR&#39;), Italian (&#39;it-IT&#39;), Japanese (&#39;ja-JP&#39;), Portuguese (&#39;pt-BR&#39;), Chinese (&#39;zh-CN&#39;), German (&#39;de-DE&#39;), Arabic (&#39;ar-EG&#39; and &#39;ar-SY&#39;), Russian (&#39;ru-RU&#39;), Hindi (&#39;hi-IN&#39;), and Korean (&#39;ko-KR&#39;). If you know the language of your content, it is recommended that you specify it. If the language isn&#39;t specified or set to null, automatic language detection will choose the first language detected and process with the selected language for the duration of the file. This language detection feature currently supports English, Chinese, French, German, Italian, Japanese, Spanish, Russian, and Portuguese. It does not currently support dynamically switching between languages after the first language is detected. The automatic detection works best with audio recordings with clearly discernable speech. If automatic detection fails to find the language, transcription would fallback to &#39;en-US&#39;.\&quot; | [optional] 

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



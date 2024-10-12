# SpeechRecognitionResult

A speech recognition result corresponding to a portion of the audio.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternatives** | [**List[SpeechRecognitionAlternative]**](SpeechRecognitionAlternative.md) | May contain one or more recognition hypotheses (up to the maximum specified in &#x60;max_alternatives&#x60;). These alternatives are ordered in terms of accuracy, with the top (first) alternative being the most probable, as ranked by the recognizer. | [optional] 
**channel_tag** | **int** | For multi-channel audio, this is the channel number corresponding to the recognized result for the audio from that channel. For audio_channel_count &#x3D; N, its output values can range from &#39;1&#39; to &#39;N&#39;. | [optional] 
**language_code** | **str** | Output only. The [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag of the language in this result. This language code was detected to have the most likelihood of being spoken in the audio. | [optional] [readonly] 
**result_end_time** | **str** | Time offset of the end of this result relative to the beginning of the audio. | [optional] 

## Example

```python
from openapi_client.models.speech_recognition_result import SpeechRecognitionResult

# TODO update the JSON string below
json = "{}"
# create an instance of SpeechRecognitionResult from a JSON string
speech_recognition_result_instance = SpeechRecognitionResult.from_json(json)
# print the JSON string representation of the object
print(SpeechRecognitionResult.to_json())

# convert the object into a dict
speech_recognition_result_dict = speech_recognition_result_instance.to_dict()
# create an instance of SpeechRecognitionResult from a dict
speech_recognition_result_from_dict = SpeechRecognitionResult.from_dict(speech_recognition_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



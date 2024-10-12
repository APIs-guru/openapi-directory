# GoogleCloudDialogflowV2InputAudioConfig

Instructs the speech recognizer how to process the audio content.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audio_encoding** | **str** | Required. Audio encoding of the audio content to process. | [optional] 
**disable_no_speech_recognized_event** | **bool** | Only used in Participants.AnalyzeContent and Participants.StreamingAnalyzeContent. If &#x60;false&#x60; and recognition doesn&#39;t return any result, trigger &#x60;NO_SPEECH_RECOGNIZED&#x60; event to Dialogflow agent. | [optional] 
**enable_automatic_punctuation** | **bool** | Enable automatic punctuation option at the speech backend. | [optional] 
**enable_word_info** | **bool** | If &#x60;true&#x60;, Dialogflow returns SpeechWordInfo in StreamingRecognitionResult with information about the recognized speech words, e.g. start and end time offsets. If false or unspecified, Speech doesn&#39;t return any word-level information. | [optional] 
**language_code** | **str** | Required. The language of the supplied audio. Dialogflow does not do translations. See [Language Support](https://cloud.google.com/dialogflow/docs/reference/language) for a list of the currently supported language codes. Note that queries in the same session do not necessarily need to specify the same language. | [optional] 
**model** | **str** | Optional. Which Speech model to select for the given request. For more information, see [Speech models](https://cloud.google.com/dialogflow/es/docs/speech-models). | [optional] 
**model_variant** | **str** | Which variant of the Speech model to use. | [optional] 
**opt_out_conformer_model_migration** | **bool** | If &#x60;true&#x60;, the request will opt out for STT conformer model migration. This field will be deprecated once force migration takes place in June 2024. Please refer to [Dialogflow ES Speech model migration](https://cloud.google.com/dialogflow/es/docs/speech-model-migration). | [optional] 
**phrase_hints** | **List[str]** | A list of strings containing words and phrases that the speech recognizer should recognize with higher likelihood. See [the Cloud Speech documentation](https://cloud.google.com/speech-to-text/docs/basics#phrase-hints) for more details. This field is deprecated. Please use [&#x60;speech_contexts&#x60;]() instead. If you specify both [&#x60;phrase_hints&#x60;]() and [&#x60;speech_contexts&#x60;](), Dialogflow will treat the [&#x60;phrase_hints&#x60;]() as a single additional [&#x60;SpeechContext&#x60;](). | [optional] 
**sample_rate_hertz** | **int** | Required. Sample rate (in Hertz) of the audio content sent in the query. Refer to [Cloud Speech API documentation](https://cloud.google.com/speech-to-text/docs/basics) for more details. | [optional] 
**single_utterance** | **bool** | If &#x60;false&#x60; (default), recognition does not cease until the client closes the stream. If &#x60;true&#x60;, the recognizer will detect a single spoken utterance in input audio. Recognition ceases when it detects the audio&#39;s voice has stopped or paused. In this case, once a detected intent is received, the client should close the stream and start a new request with a new stream as needed. Note: This setting is relevant only for streaming methods. Note: When specified, InputAudioConfig.single_utterance takes precedence over StreamingDetectIntentRequest.single_utterance. | [optional] 
**speech_contexts** | [**List[GoogleCloudDialogflowV2SpeechContext]**](GoogleCloudDialogflowV2SpeechContext.md) | Context information to assist speech recognition. See [the Cloud Speech documentation](https://cloud.google.com/speech-to-text/docs/basics#phrase-hints) for more details. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_input_audio_config import GoogleCloudDialogflowV2InputAudioConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2InputAudioConfig from a JSON string
google_cloud_dialogflow_v2_input_audio_config_instance = GoogleCloudDialogflowV2InputAudioConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2InputAudioConfig.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_input_audio_config_dict = google_cloud_dialogflow_v2_input_audio_config_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2InputAudioConfig from a dict
google_cloud_dialogflow_v2_input_audio_config_from_dict = GoogleCloudDialogflowV2InputAudioConfig.from_dict(google_cloud_dialogflow_v2_input_audio_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



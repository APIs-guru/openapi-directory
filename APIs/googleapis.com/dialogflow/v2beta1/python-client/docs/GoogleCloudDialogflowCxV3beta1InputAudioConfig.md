# GoogleCloudDialogflowCxV3beta1InputAudioConfig

Instructs the speech recognizer on how to process the audio content.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audio_encoding** | **str** | Required. Audio encoding of the audio content to process. | [optional] 
**barge_in_config** | [**GoogleCloudDialogflowCxV3beta1BargeInConfig**](GoogleCloudDialogflowCxV3beta1BargeInConfig.md) |  | [optional] 
**enable_word_info** | **bool** | Optional. If &#x60;true&#x60;, Dialogflow returns SpeechWordInfo in StreamingRecognitionResult with information about the recognized speech words, e.g. start and end time offsets. If false or unspecified, Speech doesn&#39;t return any word-level information. | [optional] 
**model** | **str** | Optional. Which Speech model to select for the given request. For more information, see [Speech models](https://cloud.google.com/dialogflow/cx/docs/concept/speech-models). | [optional] 
**model_variant** | **str** | Optional. Which variant of the Speech model to use. | [optional] 
**opt_out_conformer_model_migration** | **bool** | If &#x60;true&#x60;, the request will opt out for STT conformer model migration. This field will be deprecated once force migration takes place in June 2024. Please refer to [Dialogflow CX Speech model migration](https://cloud.google.com/dialogflow/cx/docs/concept/speech-model-migration). | [optional] 
**phrase_hints** | **List[str]** | Optional. A list of strings containing words and phrases that the speech recognizer should recognize with higher likelihood. See [the Cloud Speech documentation](https://cloud.google.com/speech-to-text/docs/basics#phrase-hints) for more details. | [optional] 
**sample_rate_hertz** | **int** | Sample rate (in Hertz) of the audio content sent in the query. Refer to [Cloud Speech API documentation](https://cloud.google.com/speech-to-text/docs/basics) for more details. | [optional] 
**single_utterance** | **bool** | Optional. If &#x60;false&#x60; (default), recognition does not cease until the client closes the stream. If &#x60;true&#x60;, the recognizer will detect a single spoken utterance in input audio. Recognition ceases when it detects the audio&#39;s voice has stopped or paused. In this case, once a detected intent is received, the client should close the stream and start a new request with a new stream as needed. Note: This setting is relevant only for streaming methods. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_input_audio_config import GoogleCloudDialogflowCxV3beta1InputAudioConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1InputAudioConfig from a JSON string
google_cloud_dialogflow_cx_v3beta1_input_audio_config_instance = GoogleCloudDialogflowCxV3beta1InputAudioConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1InputAudioConfig.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_input_audio_config_dict = google_cloud_dialogflow_cx_v3beta1_input_audio_config_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1InputAudioConfig from a dict
google_cloud_dialogflow_cx_v3beta1_input_audio_config_from_dict = GoogleCloudDialogflowCxV3beta1InputAudioConfig.from_dict(google_cloud_dialogflow_cx_v3beta1_input_audio_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



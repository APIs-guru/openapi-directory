# RecognitionConfig

Provides information to the recognizer that specifies how to process the request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adaptation** | [**SpeechAdaptation**](SpeechAdaptation.md) |  | [optional] 
**alternative_language_codes** | **List[str]** | A list of up to 3 additional [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tags, listing possible alternative languages of the supplied audio. See [Language Support](https://cloud.google.com/speech-to-text/docs/languages) for a list of the currently supported language codes. If alternative languages are listed, recognition result will contain recognition in the most likely language detected including the main language_code. The recognition result will include the language tag of the language detected in the audio. Note: This feature is only supported for Voice Command and Voice Search use cases and performance may vary for other use cases (e.g., phone call transcription). | [optional] 
**audio_channel_count** | **int** | The number of channels in the input audio data. ONLY set this for MULTI-CHANNEL recognition. Valid values for LINEAR16, OGG_OPUS and FLAC are &#x60;1&#x60;-&#x60;8&#x60;. Valid value for MULAW, AMR, AMR_WB and SPEEX_WITH_HEADER_BYTE is only &#x60;1&#x60;. If &#x60;0&#x60; or omitted, defaults to one channel (mono). Note: We only recognize the first channel by default. To perform independent recognition on each channel set &#x60;enable_separate_recognition_per_channel&#x60; to &#39;true&#39;. | [optional] 
**diarization_config** | [**SpeakerDiarizationConfig**](SpeakerDiarizationConfig.md) |  | [optional] 
**enable_automatic_punctuation** | **bool** | If &#39;true&#39;, adds punctuation to recognition result hypotheses. This feature is only available in select languages. Setting this for requests in other languages has no effect at all. The default &#39;false&#39; value does not add punctuation to result hypotheses. | [optional] 
**enable_separate_recognition_per_channel** | **bool** | This needs to be set to &#x60;true&#x60; explicitly and &#x60;audio_channel_count&#x60; &gt; 1 to get each channel recognized separately. The recognition result will contain a &#x60;channel_tag&#x60; field to state which channel that result belongs to. If this is not true, we will only recognize the first channel. The request is billed cumulatively for all channels recognized: &#x60;audio_channel_count&#x60; multiplied by the length of the audio. | [optional] 
**enable_spoken_emojis** | **bool** | The spoken emoji behavior for the call If not set, uses default behavior based on model of choice If &#39;true&#39;, adds spoken emoji formatting for the request. This will replace spoken emojis with the corresponding Unicode symbols in the final transcript. If &#39;false&#39;, spoken emojis are not replaced. | [optional] 
**enable_spoken_punctuation** | **bool** | The spoken punctuation behavior for the call If not set, uses default behavior based on model of choice e.g. command_and_search will enable spoken punctuation by default If &#39;true&#39;, replaces spoken punctuation with the corresponding symbols in the request. For example, \&quot;how are you question mark\&quot; becomes \&quot;how are you?\&quot;. See https://cloud.google.com/speech-to-text/docs/spoken-punctuation for support. If &#39;false&#39;, spoken punctuation is not replaced. | [optional] 
**enable_word_confidence** | **bool** | If &#x60;true&#x60;, the top result includes a list of words and the confidence for those words. If &#x60;false&#x60;, no word-level confidence information is returned. The default is &#x60;false&#x60;. | [optional] 
**enable_word_time_offsets** | **bool** | If &#x60;true&#x60;, the top result includes a list of words and the start and end time offsets (timestamps) for those words. If &#x60;false&#x60;, no word-level time offset information is returned. The default is &#x60;false&#x60;. | [optional] 
**encoding** | **str** | Encoding of audio data sent in all &#x60;RecognitionAudio&#x60; messages. This field is optional for &#x60;FLAC&#x60; and &#x60;WAV&#x60; audio files and required for all other audio formats. For details, see AudioEncoding. | [optional] 
**language_code** | **str** | Required. The language of the supplied audio as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. Example: \&quot;en-US\&quot;. See [Language Support](https://cloud.google.com/speech-to-text/docs/languages) for a list of the currently supported language codes. | [optional] 
**max_alternatives** | **int** | Maximum number of recognition hypotheses to be returned. Specifically, the maximum number of &#x60;SpeechRecognitionAlternative&#x60; messages within each &#x60;SpeechRecognitionResult&#x60;. The server may return fewer than &#x60;max_alternatives&#x60;. Valid values are &#x60;0&#x60;-&#x60;30&#x60;. A value of &#x60;0&#x60; or &#x60;1&#x60; will return a maximum of one. If omitted, will return a maximum of one. | [optional] 
**metadata** | [**RecognitionMetadata**](RecognitionMetadata.md) |  | [optional] 
**model** | **str** | Which model to select for the given request. Select the model best suited to your domain to get best results. If a model is not explicitly specified, then we auto-select a model based on the parameters in the RecognitionConfig. *Model* *Description* latest_long Best for long form content like media or conversation. latest_short Best for short form content like commands or single shot directed speech. command_and_search Best for short queries such as voice commands or voice search. phone_call Best for audio that originated from a phone call (typically recorded at an 8khz sampling rate). video Best for audio that originated from video or includes multiple speakers. Ideally the audio is recorded at a 16khz or greater sampling rate. This is a premium model that costs more than the standard rate. default Best for audio that is not one of the specific audio models. For example, long-form audio. Ideally the audio is high-fidelity, recorded at a 16khz or greater sampling rate. medical_conversation Best for audio that originated from a conversation between a medical provider and patient. medical_dictation Best for audio that originated from dictation notes by a medical provider.  | [optional] 
**profanity_filter** | **bool** | If set to &#x60;true&#x60;, the server will attempt to filter out profanities, replacing all but the initial character in each filtered word with asterisks, e.g. \&quot;f***\&quot;. If set to &#x60;false&#x60; or omitted, profanities won&#39;t be filtered out. | [optional] 
**sample_rate_hertz** | **int** | Sample rate in Hertz of the audio data sent in all &#x60;RecognitionAudio&#x60; messages. Valid values are: 8000-48000. 16000 is optimal. For best results, set the sampling rate of the audio source to 16000 Hz. If that&#39;s not possible, use the native sample rate of the audio source (instead of re-sampling). This field is optional for FLAC and WAV audio files, but is required for all other audio formats. For details, see AudioEncoding. | [optional] 
**speech_contexts** | [**List[SpeechContext]**](SpeechContext.md) | Array of SpeechContext. A means to provide context to assist the speech recognition. For more information, see [speech adaptation](https://cloud.google.com/speech-to-text/docs/adaptation). | [optional] 
**transcript_normalization** | [**TranscriptNormalization**](TranscriptNormalization.md) |  | [optional] 
**use_enhanced** | **bool** | Set to true to use an enhanced model for speech recognition. If &#x60;use_enhanced&#x60; is set to true and the &#x60;model&#x60; field is not set, then an appropriate enhanced model is chosen if an enhanced model exists for the audio. If &#x60;use_enhanced&#x60; is true and an enhanced version of the specified model does not exist, then the speech is recognized using the standard version of the specified model. | [optional] 

## Example

```python
from openapi_client.models.recognition_config import RecognitionConfig

# TODO update the JSON string below
json = "{}"
# create an instance of RecognitionConfig from a JSON string
recognition_config_instance = RecognitionConfig.from_json(json)
# print the JSON string representation of the object
print(RecognitionConfig.to_json())

# convert the object into a dict
recognition_config_dict = recognition_config_instance.to_dict()
# create an instance of RecognitionConfig from a dict
recognition_config_from_dict = RecognitionConfig.from_dict(recognition_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



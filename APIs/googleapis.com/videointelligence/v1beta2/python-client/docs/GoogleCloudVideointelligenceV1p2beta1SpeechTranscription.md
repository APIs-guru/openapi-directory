# GoogleCloudVideointelligenceV1p2beta1SpeechTranscription

A speech recognition result corresponding to a portion of the audio.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternatives** | [**List[GoogleCloudVideointelligenceV1p2beta1SpeechRecognitionAlternative]**](GoogleCloudVideointelligenceV1p2beta1SpeechRecognitionAlternative.md) | May contain one or more recognition hypotheses (up to the maximum specified in &#x60;max_alternatives&#x60;). These alternatives are ordered in terms of accuracy, with the top (first) alternative being the most probable, as ranked by the recognizer. | [optional] 
**language_code** | **str** | Output only. The [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag of the language in this result. This language code was detected to have the most likelihood of being spoken in the audio. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1p2beta1_speech_transcription import GoogleCloudVideointelligenceV1p2beta1SpeechTranscription

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1p2beta1SpeechTranscription from a JSON string
google_cloud_videointelligence_v1p2beta1_speech_transcription_instance = GoogleCloudVideointelligenceV1p2beta1SpeechTranscription.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1p2beta1SpeechTranscription.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1p2beta1_speech_transcription_dict = google_cloud_videointelligence_v1p2beta1_speech_transcription_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1p2beta1SpeechTranscription from a dict
google_cloud_videointelligence_v1p2beta1_speech_transcription_from_dict = GoogleCloudVideointelligenceV1p2beta1SpeechTranscription.from_dict(google_cloud_videointelligence_v1p2beta1_speech_transcription_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



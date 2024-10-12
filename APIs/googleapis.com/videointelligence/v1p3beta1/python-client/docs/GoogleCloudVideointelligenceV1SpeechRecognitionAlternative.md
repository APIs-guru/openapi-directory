# GoogleCloudVideointelligenceV1SpeechRecognitionAlternative

Alternative hypotheses (a.k.a. n-best list).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence** | **float** | Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating &#x60;confidence&#x60; was not set. | [optional] [readonly] 
**transcript** | **str** | Transcript text representing the words that the user spoke. | [optional] 
**words** | [**List[GoogleCloudVideointelligenceV1WordInfo]**](GoogleCloudVideointelligenceV1WordInfo.md) | Output only. A list of word-specific information for each recognized word. Note: When &#x60;enable_speaker_diarization&#x60; is set to true, you will see all the words from the beginning of the audio. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1_speech_recognition_alternative import GoogleCloudVideointelligenceV1SpeechRecognitionAlternative

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1SpeechRecognitionAlternative from a JSON string
google_cloud_videointelligence_v1_speech_recognition_alternative_instance = GoogleCloudVideointelligenceV1SpeechRecognitionAlternative.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1SpeechRecognitionAlternative.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1_speech_recognition_alternative_dict = google_cloud_videointelligence_v1_speech_recognition_alternative_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1SpeechRecognitionAlternative from a dict
google_cloud_videointelligence_v1_speech_recognition_alternative_from_dict = GoogleCloudVideointelligenceV1SpeechRecognitionAlternative.from_dict(google_cloud_videointelligence_v1_speech_recognition_alternative_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# SpeechRecognitionAlternative

Alternative hypotheses (a.k.a. n-best list).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence** | **float** | The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative of a non-streaming result or, of a streaming result where &#x60;is_final&#x3D;true&#x60;. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating &#x60;confidence&#x60; was not set. | [optional] 
**transcript** | **str** | Transcript text representing the words that the user spoke. In languages that use spaces to separate words, the transcript might have a leading space if it isn&#39;t the first result. You can concatenate each result to obtain the full transcript without using a separator. | [optional] 
**words** | [**List[WordInfo]**](WordInfo.md) | A list of word-specific information for each recognized word. Note: When &#x60;enable_speaker_diarization&#x60; is true, you will see all the words from the beginning of the audio. | [optional] 

## Example

```python
from openapi_client.models.speech_recognition_alternative import SpeechRecognitionAlternative

# TODO update the JSON string below
json = "{}"
# create an instance of SpeechRecognitionAlternative from a JSON string
speech_recognition_alternative_instance = SpeechRecognitionAlternative.from_json(json)
# print the JSON string representation of the object
print(SpeechRecognitionAlternative.to_json())

# convert the object into a dict
speech_recognition_alternative_dict = speech_recognition_alternative_instance.to_dict()
# create an instance of SpeechRecognitionAlternative from a dict
speech_recognition_alternative_from_dict = SpeechRecognitionAlternative.from_dict(speech_recognition_alternative_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



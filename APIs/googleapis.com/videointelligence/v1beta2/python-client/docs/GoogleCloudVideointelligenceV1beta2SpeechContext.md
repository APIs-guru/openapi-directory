# GoogleCloudVideointelligenceV1beta2SpeechContext

Provides \"hints\" to the speech recognizer to favor specific words and phrases in the results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phrases** | **List[str]** | Optional. A list of strings containing words and phrases \&quot;hints\&quot; so that the speech recognition is more likely to recognize them. This can be used to improve the accuracy for specific words and phrases, for example, if specific commands are typically spoken by the user. This can also be used to add additional words to the vocabulary of the recognizer. See [usage limits](https://cloud.google.com/speech/limits#content). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1beta2_speech_context import GoogleCloudVideointelligenceV1beta2SpeechContext

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1beta2SpeechContext from a JSON string
google_cloud_videointelligence_v1beta2_speech_context_instance = GoogleCloudVideointelligenceV1beta2SpeechContext.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1beta2SpeechContext.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1beta2_speech_context_dict = google_cloud_videointelligence_v1beta2_speech_context_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1beta2SpeechContext from a dict
google_cloud_videointelligence_v1beta2_speech_context_from_dict = GoogleCloudVideointelligenceV1beta2SpeechContext.from_dict(google_cloud_videointelligence_v1beta2_speech_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



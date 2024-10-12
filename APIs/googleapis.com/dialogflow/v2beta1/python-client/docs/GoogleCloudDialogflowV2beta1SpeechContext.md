# GoogleCloudDialogflowV2beta1SpeechContext

Hints for the speech recognizer to help with recognition in a specific conversation state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boost** | **float** | Optional. Boost for this context compared to other contexts: * If the boost is positive, Dialogflow will increase the probability that the phrases in this context are recognized over similar sounding phrases. * If the boost is unspecified or non-positive, Dialogflow will not apply any boost. Dialogflow recommends that you use boosts in the range (0, 20] and that you find a value that fits your use case with binary search. | [optional] 
**phrases** | **List[str]** | Optional. A list of strings containing words and phrases that the speech recognizer should recognize with higher likelihood. This list can be used to: * improve accuracy for words and phrases you expect the user to say, e.g. typical commands for your Dialogflow agent * add additional words to the speech recognizer vocabulary * ... See the [Cloud Speech documentation](https://cloud.google.com/speech-to-text/quotas) for usage limits. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_speech_context import GoogleCloudDialogflowV2beta1SpeechContext

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1SpeechContext from a JSON string
google_cloud_dialogflow_v2beta1_speech_context_instance = GoogleCloudDialogflowV2beta1SpeechContext.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1SpeechContext.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_speech_context_dict = google_cloud_dialogflow_v2beta1_speech_context_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1SpeechContext from a dict
google_cloud_dialogflow_v2beta1_speech_context_from_dict = GoogleCloudDialogflowV2beta1SpeechContext.from_dict(google_cloud_dialogflow_v2beta1_speech_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



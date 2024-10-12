# SpeechContext

Provides \"hints\" to the speech recognizer to favor specific words and phrases in the results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boost** | **float** | Hint Boost. Positive value will increase the probability that a specific phrase will be recognized over other similar sounding phrases. The higher the boost, the higher the chance of false positive recognition as well. Negative boost values would correspond to anti-biasing. Anti-biasing is not enabled, so negative boost will simply be ignored. Though &#x60;boost&#x60; can accept a wide range of positive values, most use cases are best served with values between 0 and 20. We recommend using a binary search approach to finding the optimal value for your use case. | [optional] 
**phrases** | **List[str]** | A list of strings containing words and phrases \&quot;hints\&quot; so that the speech recognition is more likely to recognize them. This can be used to improve the accuracy for specific words and phrases, for example, if specific commands are typically spoken by the user. This can also be used to add additional words to the vocabulary of the recognizer. See [usage limits](https://cloud.google.com/speech-to-text/quotas#content). List items can also be set to classes for groups of words that represent common concepts that occur in natural language. For example, rather than providing phrase hints for every month of the year, using the $MONTH class improves the likelihood of correctly transcribing audio that includes months. | [optional] 

## Example

```python
from openapi_client.models.speech_context import SpeechContext

# TODO update the JSON string below
json = "{}"
# create an instance of SpeechContext from a JSON string
speech_context_instance = SpeechContext.from_json(json)
# print the JSON string representation of the object
print(SpeechContext.to_json())

# convert the object into a dict
speech_context_dict = speech_context_instance.to_dict()
# create an instance of SpeechContext from a dict
speech_context_from_dict = SpeechContext.from_dict(speech_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



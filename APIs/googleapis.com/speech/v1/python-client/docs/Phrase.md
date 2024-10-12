# Phrase

A phrases containing words and phrase \"hints\" so that the speech recognition is more likely to recognize them. This can be used to improve the accuracy for specific words and phrases, for example, if specific commands are typically spoken by the user. This can also be used to add additional words to the vocabulary of the recognizer. See [usage limits](https://cloud.google.com/speech-to-text/quotas#content). List items can also include pre-built or custom classes containing groups of words that represent common concepts that occur in natural language. For example, rather than providing a phrase hint for every month of the year (e.g. \"i was born in january\", \"i was born in febuary\", ...), use the pre-built `$MONTH` class improves the likelihood of correctly transcribing audio that includes months (e.g. \"i was born in $month\"). To refer to pre-built classes, use the class' symbol prepended with `$` e.g. `$MONTH`. To refer to custom classes that were defined inline in the request, set the class's `custom_class_id` to a string unique to all class resources and inline classes. Then use the class' id wrapped in $`{...}` e.g. \"${my-months}\". To refer to custom classes resources, use the class' id wrapped in `${}` (e.g. `${my-months}`). Speech-to-Text supports three locations: `global`, `us` (US North America), and `eu` (Europe). If you are calling the `speech.googleapis.com` endpoint, use the `global` location. To specify a region, use a [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints) with matching `us` or `eu` location value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boost** | **float** | Hint Boost. Overrides the boost set at the phrase set level. Positive value will increase the probability that a specific phrase will be recognized over other similar sounding phrases. The higher the boost, the higher the chance of false positive recognition as well. Negative boost will simply be ignored. Though &#x60;boost&#x60; can accept a wide range of positive values, most use cases are best served with values between 0 and 20. We recommend using a binary search approach to finding the optimal value for your use case as well as adding phrases both with and without boost to your requests. | [optional] 
**value** | **str** | The phrase itself. | [optional] 

## Example

```python
from openapi_client.models.phrase import Phrase

# TODO update the JSON string below
json = "{}"
# create an instance of Phrase from a JSON string
phrase_instance = Phrase.from_json(json)
# print the JSON string representation of the object
print(Phrase.to_json())

# convert the object into a dict
phrase_dict = phrase_instance.to_dict()
# create an instance of Phrase from a dict
phrase_from_dict = Phrase.from_dict(phrase_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



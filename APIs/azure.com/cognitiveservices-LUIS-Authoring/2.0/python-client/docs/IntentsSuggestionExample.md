# IntentsSuggestionExample

Predicted/suggested intent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_predictions** | [**List[EntityPrediction]**](EntityPrediction.md) | Predicted/suggested entities. | [optional] 
**intent_predictions** | [**List[IntentPrediction]**](IntentPrediction.md) | Predicted/suggested intents. | [optional] 
**text** | **str** | The utterance. For example, \&quot;What&#39;s the weather like in seattle?\&quot; | [optional] 
**tokenized_text** | **List[str]** | The tokenized utterance. | [optional] 

## Example

```python
from openapi_client.models.intents_suggestion_example import IntentsSuggestionExample

# TODO update the JSON string below
json = "{}"
# create an instance of IntentsSuggestionExample from a JSON string
intents_suggestion_example_instance = IntentsSuggestionExample.from_json(json)
# print the JSON string representation of the object
print(IntentsSuggestionExample.to_json())

# convert the object into a dict
intents_suggestion_example_dict = intents_suggestion_example_instance.to_dict()
# create an instance of IntentsSuggestionExample from a dict
intents_suggestion_example_from_dict = IntentsSuggestionExample.from_dict(intents_suggestion_example_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



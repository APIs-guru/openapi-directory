# EntitiesSuggestionExample

Predicted/suggested entity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_predictions** | [**List[EntityPrediction]**](EntityPrediction.md) | Predicted/suggested entities. | [optional] 
**intent_predictions** | [**List[IntentPrediction]**](IntentPrediction.md) | Predicted/suggested intents. | [optional] 
**text** | **str** | The utterance. For example, \&quot;What&#39;s the weather like in seattle?\&quot; | [optional] 
**tokenized_text** | **List[str]** | The utterance tokenized. | [optional] 

## Example

```python
from openapi_client.models.entities_suggestion_example import EntitiesSuggestionExample

# TODO update the JSON string below
json = "{}"
# create an instance of EntitiesSuggestionExample from a JSON string
entities_suggestion_example_instance = EntitiesSuggestionExample.from_json(json)
# print the JSON string representation of the object
print(EntitiesSuggestionExample.to_json())

# convert the object into a dict
entities_suggestion_example_dict = entities_suggestion_example_instance.to_dict()
# create an instance of EntitiesSuggestionExample from a dict
entities_suggestion_example_from_dict = EntitiesSuggestionExample.from_dict(entities_suggestion_example_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



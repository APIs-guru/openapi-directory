# Prediction

Represents the prediction of a query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**altered_query** | **str** | The query after spell checking. Only set if spell check was enabled and a spelling mistake was found. | [optional] 
**entities** | **Dict[str, object]** | The dictionary representing the entities that fired. | 
**intents** | [**Dict[str, Intent]**](Intent.md) | A dictionary representing the intents that fired. | 
**normalized_query** | **str** | The query after pre-processing and normalization. | 
**sentiment** | [**Sentiment**](Sentiment.md) |  | [optional] 
**top_intent** | **str** | The name of the top scoring intent. | 

## Example

```python
from openapi_client.models.prediction import Prediction

# TODO update the JSON string below
json = "{}"
# create an instance of Prediction from a JSON string
prediction_instance = Prediction.from_json(json)
# print the JSON string representation of the object
print(Prediction.to_json())

# convert the object into a dict
prediction_dict = prediction_instance.to_dict()
# create an instance of Prediction from a dict
prediction_from_dict = Prediction.from_dict(prediction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



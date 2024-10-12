# LuisResult

Prediction, based on the input query, containing intent(s) and entities.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**altered_query** | **str** | The corrected utterance (when spell checking was enabled). | [optional] 
**composite_entities** | [**List[CompositeEntityModel]**](CompositeEntityModel.md) | The composite entities extracted from the utterance. | [optional] 
**connected_service_result** | [**LuisResult**](LuisResult.md) |  | [optional] 
**entities** | [**List[EntityModel]**](EntityModel.md) | The entities extracted from the utterance. | [optional] 
**intents** | [**List[IntentModel]**](IntentModel.md) | All the intents (and their score) that were detected from utterance. | [optional] 
**query** | **str** | The input utterance that was analyzed. | [optional] 
**sentiment_analysis** | [**Sentiment**](Sentiment.md) |  | [optional] 
**top_scoring_intent** | [**IntentModel**](IntentModel.md) |  | [optional] 

## Example

```python
from openapi_client.models.luis_result import LuisResult

# TODO update the JSON string below
json = "{}"
# create an instance of LuisResult from a JSON string
luis_result_instance = LuisResult.from_json(json)
# print the JSON string representation of the object
print(LuisResult.to_json())

# convert the object into a dict
luis_result_dict = luis_result_instance.to_dict()
# create an instance of LuisResult from a dict
luis_result_from_dict = LuisResult.from_dict(luis_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



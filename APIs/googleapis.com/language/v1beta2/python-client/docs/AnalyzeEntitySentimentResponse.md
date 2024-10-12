# AnalyzeEntitySentimentResponse

The entity-level sentiment analysis response message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entities** | [**List[Entity]**](Entity.md) | The recognized entities in the input document with associated sentiments. | [optional] 
**language** | **str** | The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details. | [optional] 

## Example

```python
from openapi_client.models.analyze_entity_sentiment_response import AnalyzeEntitySentimentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyzeEntitySentimentResponse from a JSON string
analyze_entity_sentiment_response_instance = AnalyzeEntitySentimentResponse.from_json(json)
# print the JSON string representation of the object
print(AnalyzeEntitySentimentResponse.to_json())

# convert the object into a dict
analyze_entity_sentiment_response_dict = analyze_entity_sentiment_response_instance.to_dict()
# create an instance of AnalyzeEntitySentimentResponse from a dict
analyze_entity_sentiment_response_from_dict = AnalyzeEntitySentimentResponse.from_dict(analyze_entity_sentiment_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



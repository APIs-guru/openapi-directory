# SentimentResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documents** | [**List[DocumentSentiment]**](DocumentSentiment.md) | Sentiment analysis per document. | 
**errors** | [**List[DocumentError]**](DocumentError.md) | Errors by document id. | 
**model_version** | **str** | This field indicates which model is used for scoring. | 
**statistics** | [**RequestStatistics**](RequestStatistics.md) |  | [optional] 

## Example

```python
from openapi_client.models.sentiment_response import SentimentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SentimentResponse from a JSON string
sentiment_response_instance = SentimentResponse.from_json(json)
# print the JSON string representation of the object
print(SentimentResponse.to_json())

# convert the object into a dict
sentiment_response_dict = sentiment_response_instance.to_dict()
# create an instance of SentimentResponse from a dict
sentiment_response_from_dict = SentimentResponse.from_dict(sentiment_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



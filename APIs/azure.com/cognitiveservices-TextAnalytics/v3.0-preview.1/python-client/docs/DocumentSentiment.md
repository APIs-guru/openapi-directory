# DocumentSentiment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_scores** | [**SentimentConfidenceScorePerLabel**](SentimentConfidenceScorePerLabel.md) |  | 
**id** | **str** | Unique, non-empty document identifier. | 
**sentences** | [**List[SentenceSentiment]**](SentenceSentiment.md) | Sentence level sentiment analysis. | 
**sentiment** | **str** | Predicted sentiment for document (Negative, Neutral, Positive, or Mixed). | 
**statistics** | [**DocumentStatistics**](DocumentStatistics.md) |  | [optional] 

## Example

```python
from openapi_client.models.document_sentiment import DocumentSentiment

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentSentiment from a JSON string
document_sentiment_instance = DocumentSentiment.from_json(json)
# print the JSON string representation of the object
print(DocumentSentiment.to_json())

# convert the object into a dict
document_sentiment_dict = document_sentiment_instance.to_dict()
# create an instance of DocumentSentiment from a dict
document_sentiment_from_dict = DocumentSentiment.from_dict(document_sentiment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



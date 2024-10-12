# SentenceSentiment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**length** | **int** | The length of the sentence by Unicode standard. | 
**offset** | **int** | The sentence offset from the start of the document. | 
**sentence_scores** | [**SentimentConfidenceScorePerLabel**](SentimentConfidenceScorePerLabel.md) |  | 
**sentiment** | **str** | The predicted Sentiment for the sentence. | 
**warnings** | **List[str]** | The warnings generated for the sentence. | [optional] 

## Example

```python
from openapi_client.models.sentence_sentiment import SentenceSentiment

# TODO update the JSON string below
json = "{}"
# create an instance of SentenceSentiment from a JSON string
sentence_sentiment_instance = SentenceSentiment.from_json(json)
# print the JSON string representation of the object
print(SentenceSentiment.to_json())

# convert the object into a dict
sentence_sentiment_dict = sentence_sentiment_instance.to_dict()
# create an instance of SentenceSentiment from a dict
sentence_sentiment_from_dict = SentenceSentiment.from_dict(sentence_sentiment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



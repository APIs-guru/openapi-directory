# Sentiment

Sentiment of the input utterance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **str** | The polarity of the sentiment, can be positive, neutral or negative. | [optional] 
**score** | **float** | Score of the sentiment, ranges from 0 (most negative) to 1 (most positive). | [optional] 

## Example

```python
from openapi_client.models.sentiment import Sentiment

# TODO update the JSON string below
json = "{}"
# create an instance of Sentiment from a JSON string
sentiment_instance = Sentiment.from_json(json)
# print the JSON string representation of the object
print(Sentiment.to_json())

# convert the object into a dict
sentiment_dict = sentiment_instance.to_dict()
# create an instance of Sentiment from a dict
sentiment_from_dict = Sentiment.from_dict(sentiment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



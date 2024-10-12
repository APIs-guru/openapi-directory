# Sentiment

The result of the sentiment analysis.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **str** | The label of the sentiment analysis result. | [optional] 
**score** | **float** | The sentiment score of the query. | 

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



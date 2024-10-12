# TopicSentimentOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**language** | **str** |  | [optional] 
**sentiments** | [**List[Sentiment]**](Sentiment.md) |  | [optional] 
**text** | **str** |  | [optional] 
**topic_sentiments** | [**List[TopicSentiment]**](TopicSentiment.md) |  | [optional] 
**topics** | [**List[Topic]**](Topic.md) |  | [optional] 

## Example

```python
from openapi_client.models.topic_sentiment_output import TopicSentimentOutput

# TODO update the JSON string below
json = "{}"
# create an instance of TopicSentimentOutput from a JSON string
topic_sentiment_output_instance = TopicSentimentOutput.from_json(json)
# print the JSON string representation of the object
print(TopicSentimentOutput.to_json())

# convert the object into a dict
topic_sentiment_output_dict = topic_sentiment_output_instance.to_dict()
# create an instance of TopicSentimentOutput from a dict
topic_sentiment_output_from_dict = TopicSentimentOutput.from_dict(topic_sentiment_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



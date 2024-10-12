# TopicSentiment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sentence** | **str** |  | [optional] 
**sentiment** | [**Sentiment**](Sentiment.md) |  | [optional] 
**topic** | [**Topic**](Topic.md) |  | [optional] 

## Example

```python
from openapi_client.models.topic_sentiment import TopicSentiment

# TODO update the JSON string below
json = "{}"
# create an instance of TopicSentiment from a JSON string
topic_sentiment_instance = TopicSentiment.from_json(json)
# print the JSON string representation of the object
print(TopicSentiment.to_json())

# convert the object into a dict
topic_sentiment_dict = topic_sentiment_instance.to_dict()
# create an instance of TopicSentiment from a dict
topic_sentiment_from_dict = TopicSentiment.from_dict(topic_sentiment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# TweetPublicMetrics

Engagement metrics for the Tweet at the time of the request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**impression_count** | **int** | Number of times this Tweet has been viewed. | 
**like_count** | **int** | Number of times this Tweet has been liked. | 
**quote_count** | **int** | Number of times this Tweet has been quoted. | [optional] 
**reply_count** | **int** | Number of times this Tweet has been replied to. | 
**retweet_count** | **int** | Number of times this Tweet has been Retweeted. | 

## Example

```python
from openapi_client.models.tweet_public_metrics import TweetPublicMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of TweetPublicMetrics from a JSON string
tweet_public_metrics_instance = TweetPublicMetrics.from_json(json)
# print the JSON string representation of the object
print(TweetPublicMetrics.to_json())

# convert the object into a dict
tweet_public_metrics_dict = tweet_public_metrics_instance.to_dict()
# create an instance of TweetPublicMetrics from a dict
tweet_public_metrics_from_dict = TweetPublicMetrics.from_dict(tweet_public_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



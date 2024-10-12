# TweetOrganicMetrics

Organic nonpublic engagement metrics for the Tweet at the time of the request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**impression_count** | **int** | Number of times this Tweet has been viewed. | 
**like_count** | **int** | Number of times this Tweet has been liked. | 
**reply_count** | **int** | Number of times this Tweet has been replied to. | 
**retweet_count** | **int** | Number of times this Tweet has been Retweeted. | 

## Example

```python
from openapi_client.models.tweet_organic_metrics import TweetOrganicMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of TweetOrganicMetrics from a JSON string
tweet_organic_metrics_instance = TweetOrganicMetrics.from_json(json)
# print the JSON string representation of the object
print(TweetOrganicMetrics.to_json())

# convert the object into a dict
tweet_organic_metrics_dict = tweet_organic_metrics_instance.to_dict()
# create an instance of TweetOrganicMetrics from a dict
tweet_organic_metrics_from_dict = TweetOrganicMetrics.from_dict(tweet_organic_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



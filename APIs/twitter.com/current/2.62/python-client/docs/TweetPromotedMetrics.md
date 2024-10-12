# TweetPromotedMetrics

Promoted nonpublic engagement metrics for the Tweet at the time of the request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**impression_count** | **int** | Number of times this Tweet has been viewed. | [optional] 
**like_count** | **int** | Number of times this Tweet has been liked. | [optional] 
**reply_count** | **int** | Number of times this Tweet has been replied to. | [optional] 
**retweet_count** | **int** | Number of times this Tweet has been Retweeted. | [optional] 

## Example

```python
from openapi_client.models.tweet_promoted_metrics import TweetPromotedMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of TweetPromotedMetrics from a JSON string
tweet_promoted_metrics_instance = TweetPromotedMetrics.from_json(json)
# print the JSON string representation of the object
print(TweetPromotedMetrics.to_json())

# convert the object into a dict
tweet_promoted_metrics_dict = tweet_promoted_metrics_instance.to_dict()
# create an instance of TweetPromotedMetrics from a dict
tweet_promoted_metrics_from_dict = TweetPromotedMetrics.from_dict(tweet_promoted_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



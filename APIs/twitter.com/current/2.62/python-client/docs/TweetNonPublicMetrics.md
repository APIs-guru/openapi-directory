# TweetNonPublicMetrics

Nonpublic engagement metrics for the Tweet at the time of the request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**impression_count** | **int** | Number of times this Tweet has been viewed. | [optional] 

## Example

```python
from openapi_client.models.tweet_non_public_metrics import TweetNonPublicMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of TweetNonPublicMetrics from a JSON string
tweet_non_public_metrics_instance = TweetNonPublicMetrics.from_json(json)
# print the JSON string representation of the object
print(TweetNonPublicMetrics.to_json())

# convert the object into a dict
tweet_non_public_metrics_dict = tweet_non_public_metrics_instance.to_dict()
# create an instance of TweetNonPublicMetrics from a dict
tweet_non_public_metrics_from_dict = TweetNonPublicMetrics.from_dict(tweet_non_public_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



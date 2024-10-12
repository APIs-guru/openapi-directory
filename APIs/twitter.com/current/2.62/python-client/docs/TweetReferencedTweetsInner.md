# TweetReferencedTweetsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.tweet_referenced_tweets_inner import TweetReferencedTweetsInner

# TODO update the JSON string below
json = "{}"
# create an instance of TweetReferencedTweetsInner from a JSON string
tweet_referenced_tweets_inner_instance = TweetReferencedTweetsInner.from_json(json)
# print the JSON string representation of the object
print(TweetReferencedTweetsInner.to_json())

# convert the object into a dict
tweet_referenced_tweets_inner_dict = tweet_referenced_tweets_inner_instance.to_dict()
# create an instance of TweetReferencedTweetsInner from a dict
tweet_referenced_tweets_inner_from_dict = TweetReferencedTweetsInner.from_dict(tweet_referenced_tweets_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



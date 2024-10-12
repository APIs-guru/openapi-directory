# TweetCreateRequestReply

Tweet information of the Tweet being replied to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exclude_reply_user_ids** | **List[str]** | A list of User Ids to be excluded from the reply Tweet. | [optional] 
**in_reply_to_tweet_id** | **str** | Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. | 

## Example

```python
from openapi_client.models.tweet_create_request_reply import TweetCreateRequestReply

# TODO update the JSON string below
json = "{}"
# create an instance of TweetCreateRequestReply from a JSON string
tweet_create_request_reply_instance = TweetCreateRequestReply.from_json(json)
# print the JSON string representation of the object
print(TweetCreateRequestReply.to_json())

# convert the object into a dict
tweet_create_request_reply_dict = tweet_create_request_reply_instance.to_dict()
# create an instance of TweetCreateRequestReply from a dict
tweet_create_request_reply_from_dict = TweetCreateRequestReply.from_dict(tweet_create_request_reply_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



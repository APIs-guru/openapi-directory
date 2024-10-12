# TweetCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_uri** | **str** | Card Uri Parameter. This is mutually exclusive from Quote Tweet Id, Poll, Media, and Direct Message Deep Link. | [optional] 
**direct_message_deep_link** | **str** | Link to take the conversation from the public timeline to a private Direct Message. | [optional] 
**for_super_followers_only** | **bool** | Exclusive Tweet for super followers. | [optional] [default to False]
**geo** | [**TweetCreateRequestGeo**](TweetCreateRequestGeo.md) |  | [optional] 
**media** | [**TweetCreateRequestMedia**](TweetCreateRequestMedia.md) |  | [optional] 
**nullcast** | **bool** | Nullcasted (promoted-only) Tweets do not appear in the public timeline and are not served to followers. | [optional] [default to False]
**poll** | [**TweetCreateRequestPoll**](TweetCreateRequestPoll.md) |  | [optional] 
**quote_tweet_id** | **str** | Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. | [optional] 
**reply** | [**TweetCreateRequestReply**](TweetCreateRequestReply.md) |  | [optional] 
**reply_settings** | **str** | Settings to indicate who can reply to the Tweet. | [optional] 
**text** | **str** | The content of the Tweet. | [optional] 

## Example

```python
from openapi_client.models.tweet_create_request import TweetCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TweetCreateRequest from a JSON string
tweet_create_request_instance = TweetCreateRequest.from_json(json)
# print the JSON string representation of the object
print(TweetCreateRequest.to_json())

# convert the object into a dict
tweet_create_request_dict = tweet_create_request_instance.to_dict()
# create an instance of TweetCreateRequest from a dict
tweet_create_request_from_dict = TweetCreateRequest.from_dict(tweet_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



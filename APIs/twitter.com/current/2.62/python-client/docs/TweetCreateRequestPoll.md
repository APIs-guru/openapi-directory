# TweetCreateRequestPoll

Poll options for a Tweet with a poll. This is mutually exclusive from Media, Quote Tweet Id, and Card URI.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration_minutes** | **int** | Duration of the poll in minutes. | 
**options** | **List[str]** |  | 
**reply_settings** | **str** | Settings to indicate who can reply to the Tweet. | [optional] 

## Example

```python
from openapi_client.models.tweet_create_request_poll import TweetCreateRequestPoll

# TODO update the JSON string below
json = "{}"
# create an instance of TweetCreateRequestPoll from a JSON string
tweet_create_request_poll_instance = TweetCreateRequestPoll.from_json(json)
# print the JSON string representation of the object
print(TweetCreateRequestPoll.to_json())

# convert the object into a dict
tweet_create_request_poll_dict = tweet_create_request_poll_instance.to_dict()
# create an instance of TweetCreateRequestPoll from a dict
tweet_create_request_poll_from_dict = TweetCreateRequestPoll.from_dict(tweet_create_request_poll_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# TweetNoticeSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**public_tweet_notice** | [**TweetNotice**](TweetNotice.md) |  | 

## Example

```python
from openapi_client.models.tweet_notice_schema import TweetNoticeSchema

# TODO update the JSON string below
json = "{}"
# create an instance of TweetNoticeSchema from a JSON string
tweet_notice_schema_instance = TweetNoticeSchema.from_json(json)
# print the JSON string representation of the object
print(TweetNoticeSchema.to_json())

# convert the object into a dict
tweet_notice_schema_dict = tweet_notice_schema_instance.to_dict()
# create an instance of TweetNoticeSchema from a dict
tweet_notice_schema_from_dict = TweetNoticeSchema.from_dict(tweet_notice_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



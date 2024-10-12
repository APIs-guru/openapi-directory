# TweetAttachments

Specifies the type of attachments (if any) present in this Tweet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**media_keys** | **List[str]** | A list of Media Keys for each one of the media attachments (if media are attached). | [optional] 
**poll_ids** | **List[str]** | A list of poll IDs (if polls are attached). | [optional] 

## Example

```python
from openapi_client.models.tweet_attachments import TweetAttachments

# TODO update the JSON string below
json = "{}"
# create an instance of TweetAttachments from a JSON string
tweet_attachments_instance = TweetAttachments.from_json(json)
# print the JSON string representation of the object
print(TweetAttachments.to_json())

# convert the object into a dict
tweet_attachments_dict = tweet_attachments_instance.to_dict()
# create an instance of TweetAttachments from a dict
tweet_attachments_from_dict = TweetAttachments.from_dict(tweet_attachments_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



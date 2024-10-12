# TweetCreateRequestMedia

Media information being attached to created Tweet. This is mutually exclusive from Quote Tweet Id, Poll, and Card URI.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**media_ids** | **List[str]** | A list of Media Ids to be attached to a created Tweet. | 
**tagged_user_ids** | **List[str]** | A list of User Ids to be tagged in the media for created Tweet. | [optional] 

## Example

```python
from openapi_client.models.tweet_create_request_media import TweetCreateRequestMedia

# TODO update the JSON string below
json = "{}"
# create an instance of TweetCreateRequestMedia from a JSON string
tweet_create_request_media_instance = TweetCreateRequestMedia.from_json(json)
# print the JSON string representation of the object
print(TweetCreateRequestMedia.to_json())

# convert the object into a dict
tweet_create_request_media_dict = tweet_create_request_media_instance.to_dict()
# create an instance of TweetCreateRequestMedia from a dict
tweet_create_request_media_from_dict = TweetCreateRequestMedia.from_dict(tweet_create_request_media_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



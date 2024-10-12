# TweetNotice


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application** | **str** | If the label is being applied or removed. Possible values are ‘apply’ or ‘remove’. | 
**details** | **str** | Information shown on the Tweet label | [optional] 
**event_at** | **datetime** | Event time. | 
**event_type** | **str** | The type of label on the Tweet | 
**extended_details_url** | **str** | Link to more information about this kind of label | [optional] 
**label_title** | **str** | Title/header of the Tweet label | [optional] 
**tweet** | [**TweetComplianceSchemaTweet**](TweetComplianceSchemaTweet.md) |  | 

## Example

```python
from openapi_client.models.tweet_notice import TweetNotice

# TODO update the JSON string below
json = "{}"
# create an instance of TweetNotice from a JSON string
tweet_notice_instance = TweetNotice.from_json(json)
# print the JSON string representation of the object
print(TweetNotice.to_json())

# convert the object into a dict
tweet_notice_dict = tweet_notice_instance.to_dict()
# create an instance of TweetNotice from a dict
tweet_notice_from_dict = TweetNotice.from_dict(tweet_notice_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



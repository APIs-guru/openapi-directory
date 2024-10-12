# TweetUnviewable


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application** | **str** | If the label is being applied or removed. Possible values are ‘apply’ or ‘remove’. | 
**event_at** | **datetime** | Event time. | 
**tweet** | [**TweetComplianceSchemaTweet**](TweetComplianceSchemaTweet.md) |  | 

## Example

```python
from openapi_client.models.tweet_unviewable import TweetUnviewable

# TODO update the JSON string below
json = "{}"
# create an instance of TweetUnviewable from a JSON string
tweet_unviewable_instance = TweetUnviewable.from_json(json)
# print the JSON string representation of the object
print(TweetUnviewable.to_json())

# convert the object into a dict
tweet_unviewable_dict = tweet_unviewable_instance.to_dict()
# create an instance of TweetUnviewable from a dict
tweet_unviewable_from_dict = TweetUnviewable.from_dict(tweet_unviewable_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



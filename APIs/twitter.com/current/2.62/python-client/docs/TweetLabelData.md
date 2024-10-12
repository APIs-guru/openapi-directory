# TweetLabelData

Tweet label data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**public_tweet_notice** | [**TweetNotice**](TweetNotice.md) |  | 
**public_tweet_unviewable** | [**TweetUnviewable**](TweetUnviewable.md) |  | 

## Example

```python
from openapi_client.models.tweet_label_data import TweetLabelData

# TODO update the JSON string below
json = "{}"
# create an instance of TweetLabelData from a JSON string
tweet_label_data_instance = TweetLabelData.from_json(json)
# print the JSON string representation of the object
print(TweetLabelData.to_json())

# convert the object into a dict
tweet_label_data_dict = tweet_label_data_instance.to_dict()
# create an instance of TweetLabelData from a dict
tweet_label_data_from_dict = TweetLabelData.from_dict(tweet_label_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



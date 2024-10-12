# TweetLabelStreamResponseOneOf

Tweet Label event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**TweetLabelData**](TweetLabelData.md) |  | 

## Example

```python
from openapi_client.models.tweet_label_stream_response_one_of import TweetLabelStreamResponseOneOf

# TODO update the JSON string below
json = "{}"
# create an instance of TweetLabelStreamResponseOneOf from a JSON string
tweet_label_stream_response_one_of_instance = TweetLabelStreamResponseOneOf.from_json(json)
# print the JSON string representation of the object
print(TweetLabelStreamResponseOneOf.to_json())

# convert the object into a dict
tweet_label_stream_response_one_of_dict = tweet_label_stream_response_one_of_instance.to_dict()
# create an instance of TweetLabelStreamResponseOneOf from a dict
tweet_label_stream_response_one_of_from_dict = TweetLabelStreamResponseOneOf.from_dict(tweet_label_stream_response_one_of_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



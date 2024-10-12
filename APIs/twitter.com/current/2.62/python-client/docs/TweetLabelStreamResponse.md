# TweetLabelStreamResponse

Tweet label stream events.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**TweetLabelData**](TweetLabelData.md) |  | 
**errors** | [**List[Problem]**](Problem.md) |  | 

## Example

```python
from openapi_client.models.tweet_label_stream_response import TweetLabelStreamResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TweetLabelStreamResponse from a JSON string
tweet_label_stream_response_instance = TweetLabelStreamResponse.from_json(json)
# print the JSON string representation of the object
print(TweetLabelStreamResponse.to_json())

# convert the object into a dict
tweet_label_stream_response_dict = tweet_label_stream_response_instance.to_dict()
# create an instance of TweetLabelStreamResponse from a dict
tweet_label_stream_response_from_dict = TweetLabelStreamResponse.from_dict(tweet_label_stream_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



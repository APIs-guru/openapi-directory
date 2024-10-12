# TweetHideResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**TweetHideResponseData**](TweetHideResponseData.md) |  | [optional] 

## Example

```python
from openapi_client.models.tweet_hide_response import TweetHideResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TweetHideResponse from a JSON string
tweet_hide_response_instance = TweetHideResponse.from_json(json)
# print the JSON string representation of the object
print(TweetHideResponse.to_json())

# convert the object into a dict
tweet_hide_response_dict = tweet_hide_response_instance.to_dict()
# create an instance of TweetHideResponse from a dict
tweet_hide_response_from_dict = TweetHideResponse.from_dict(tweet_hide_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



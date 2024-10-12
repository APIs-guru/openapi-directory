# TweetCreateResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**TweetCreateResponseData**](TweetCreateResponseData.md) |  | [optional] 
**errors** | [**List[Problem]**](Problem.md) |  | [optional] 

## Example

```python
from openapi_client.models.tweet_create_response import TweetCreateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TweetCreateResponse from a JSON string
tweet_create_response_instance = TweetCreateResponse.from_json(json)
# print the JSON string representation of the object
print(TweetCreateResponse.to_json())

# convert the object into a dict
tweet_create_response_dict = tweet_create_response_instance.to_dict()
# create an instance of TweetCreateResponse from a dict
tweet_create_response_from_dict = TweetCreateResponse.from_dict(tweet_create_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



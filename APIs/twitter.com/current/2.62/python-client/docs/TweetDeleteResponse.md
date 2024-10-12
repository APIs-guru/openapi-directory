# TweetDeleteResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**TweetDeleteResponseData**](TweetDeleteResponseData.md) |  | [optional] 
**errors** | [**List[Problem]**](Problem.md) |  | [optional] 

## Example

```python
from openapi_client.models.tweet_delete_response import TweetDeleteResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TweetDeleteResponse from a JSON string
tweet_delete_response_instance = TweetDeleteResponse.from_json(json)
# print the JSON string representation of the object
print(TweetDeleteResponse.to_json())

# convert the object into a dict
tweet_delete_response_dict = tweet_delete_response_instance.to_dict()
# create an instance of TweetDeleteResponse from a dict
tweet_delete_response_from_dict = TweetDeleteResponse.from_dict(tweet_delete_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



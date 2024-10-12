# TweetWrapped


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callback** | **str** |  | [optional] 
**meta** | [**Meta**](Meta.md) |  | [optional] 
**results** | [**List[Tweet]**](Tweet.md) |  | [optional] 

## Example

```python
from openapi_client.models.tweet_wrapped import TweetWrapped

# TODO update the JSON string below
json = "{}"
# create an instance of TweetWrapped from a JSON string
tweet_wrapped_instance = TweetWrapped.from_json(json)
# print the JSON string representation of the object
print(TweetWrapped.to_json())

# convert the object into a dict
tweet_wrapped_dict = tweet_wrapped_instance.to_dict()
# create an instance of TweetWrapped from a dict
tweet_wrapped_from_dict = TweetWrapped.from_dict(tweet_wrapped_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



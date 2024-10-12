# TweetCreateResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. | 
**text** | **str** | The content of the Tweet. | 

## Example

```python
from openapi_client.models.tweet_create_response_data import TweetCreateResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of TweetCreateResponseData from a JSON string
tweet_create_response_data_instance = TweetCreateResponseData.from_json(json)
# print the JSON string representation of the object
print(TweetCreateResponseData.to_json())

# convert the object into a dict
tweet_create_response_data_dict = tweet_create_response_data_instance.to_dict()
# create an instance of TweetCreateResponseData from a dict
tweet_create_response_data_from_dict = TweetCreateResponseData.from_dict(tweet_create_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



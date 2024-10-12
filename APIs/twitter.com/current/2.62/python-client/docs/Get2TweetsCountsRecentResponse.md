# Get2TweetsCountsRecentResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[SearchCount]**](SearchCount.md) |  | [optional] 
**errors** | [**List[Problem]**](Problem.md) |  | [optional] 
**meta** | [**Get2TweetsCountsAllResponseMeta**](Get2TweetsCountsAllResponseMeta.md) |  | [optional] 

## Example

```python
from openapi_client.models.get2_tweets_counts_recent_response import Get2TweetsCountsRecentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of Get2TweetsCountsRecentResponse from a JSON string
get2_tweets_counts_recent_response_instance = Get2TweetsCountsRecentResponse.from_json(json)
# print the JSON string representation of the object
print(Get2TweetsCountsRecentResponse.to_json())

# convert the object into a dict
get2_tweets_counts_recent_response_dict = get2_tweets_counts_recent_response_instance.to_dict()
# create an instance of Get2TweetsCountsRecentResponse from a dict
get2_tweets_counts_recent_response_from_dict = Get2TweetsCountsRecentResponse.from_dict(get2_tweets_counts_recent_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



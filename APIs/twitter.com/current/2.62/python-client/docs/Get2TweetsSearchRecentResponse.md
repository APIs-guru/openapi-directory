# Get2TweetsSearchRecentResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Tweet]**](Tweet.md) |  | [optional] 
**errors** | [**List[Problem]**](Problem.md) |  | [optional] 
**includes** | [**Expansions**](Expansions.md) |  | [optional] 
**meta** | [**Get2TweetsSearchAllResponseMeta**](Get2TweetsSearchAllResponseMeta.md) |  | [optional] 

## Example

```python
from openapi_client.models.get2_tweets_search_recent_response import Get2TweetsSearchRecentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of Get2TweetsSearchRecentResponse from a JSON string
get2_tweets_search_recent_response_instance = Get2TweetsSearchRecentResponse.from_json(json)
# print the JSON string representation of the object
print(Get2TweetsSearchRecentResponse.to_json())

# convert the object into a dict
get2_tweets_search_recent_response_dict = get2_tweets_search_recent_response_instance.to_dict()
# create an instance of Get2TweetsSearchRecentResponse from a dict
get2_tweets_search_recent_response_from_dict = Get2TweetsSearchRecentResponse.from_dict(get2_tweets_search_recent_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# FilteredStreamingTweetResponse

A Tweet or error that can be returned by the streaming Tweet API. The values returned with a successful streamed Tweet includes the user provided rules that the Tweet matched.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Tweet**](Tweet.md) |  | [optional] 
**errors** | [**List[Problem]**](Problem.md) |  | [optional] 
**includes** | [**Expansions**](Expansions.md) |  | [optional] 
**matching_rules** | [**List[FilteredStreamingTweetResponseMatchingRulesInner]**](FilteredStreamingTweetResponseMatchingRulesInner.md) | The list of rules which matched the Tweet | [optional] 

## Example

```python
from openapi_client.models.filtered_streaming_tweet_response import FilteredStreamingTweetResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FilteredStreamingTweetResponse from a JSON string
filtered_streaming_tweet_response_instance = FilteredStreamingTweetResponse.from_json(json)
# print the JSON string representation of the object
print(FilteredStreamingTweetResponse.to_json())

# convert the object into a dict
filtered_streaming_tweet_response_dict = filtered_streaming_tweet_response_instance.to_dict()
# create an instance of FilteredStreamingTweetResponse from a dict
filtered_streaming_tweet_response_from_dict = FilteredStreamingTweetResponse.from_dict(filtered_streaming_tweet_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



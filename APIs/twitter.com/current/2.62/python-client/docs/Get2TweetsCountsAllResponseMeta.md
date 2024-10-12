# Get2TweetsCountsAllResponseMeta


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**newest_id** | **str** | The newest id in this response. | [optional] 
**next_token** | **str** | The next token. | [optional] 
**oldest_id** | **str** | The oldest id in this response. | [optional] 
**total_tweet_count** | **int** | The sum of results returned in this response. | [optional] 

## Example

```python
from openapi_client.models.get2_tweets_counts_all_response_meta import Get2TweetsCountsAllResponseMeta

# TODO update the JSON string below
json = "{}"
# create an instance of Get2TweetsCountsAllResponseMeta from a JSON string
get2_tweets_counts_all_response_meta_instance = Get2TweetsCountsAllResponseMeta.from_json(json)
# print the JSON string representation of the object
print(Get2TweetsCountsAllResponseMeta.to_json())

# convert the object into a dict
get2_tweets_counts_all_response_meta_dict = get2_tweets_counts_all_response_meta_instance.to_dict()
# create an instance of Get2TweetsCountsAllResponseMeta from a dict
get2_tweets_counts_all_response_meta_from_dict = Get2TweetsCountsAllResponseMeta.from_dict(get2_tweets_counts_all_response_meta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



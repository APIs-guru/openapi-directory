# Get2TweetsIdQuoteTweetsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Tweet]**](Tweet.md) |  | [optional] 
**errors** | [**List[Problem]**](Problem.md) |  | [optional] 
**includes** | [**Expansions**](Expansions.md) |  | [optional] 
**meta** | [**Get2TweetsIdQuoteTweetsResponseMeta**](Get2TweetsIdQuoteTweetsResponseMeta.md) |  | [optional] 

## Example

```python
from openapi_client.models.get2_tweets_id_quote_tweets_response import Get2TweetsIdQuoteTweetsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of Get2TweetsIdQuoteTweetsResponse from a JSON string
get2_tweets_id_quote_tweets_response_instance = Get2TweetsIdQuoteTweetsResponse.from_json(json)
# print the JSON string representation of the object
print(Get2TweetsIdQuoteTweetsResponse.to_json())

# convert the object into a dict
get2_tweets_id_quote_tweets_response_dict = get2_tweets_id_quote_tweets_response_instance.to_dict()
# create an instance of Get2TweetsIdQuoteTweetsResponse from a dict
get2_tweets_id_quote_tweets_response_from_dict = Get2TweetsIdQuoteTweetsResponse.from_dict(get2_tweets_id_quote_tweets_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



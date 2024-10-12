# Get2UsersIdTweetsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Tweet]**](Tweet.md) |  | [optional] 
**errors** | [**List[Problem]**](Problem.md) |  | [optional] 
**includes** | [**Expansions**](Expansions.md) |  | [optional] 
**meta** | [**Get2UsersIdMentionsResponseMeta**](Get2UsersIdMentionsResponseMeta.md) |  | [optional] 

## Example

```python
from openapi_client.models.get2_users_id_tweets_response import Get2UsersIdTweetsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of Get2UsersIdTweetsResponse from a JSON string
get2_users_id_tweets_response_instance = Get2UsersIdTweetsResponse.from_json(json)
# print the JSON string representation of the object
print(Get2UsersIdTweetsResponse.to_json())

# convert the object into a dict
get2_users_id_tweets_response_dict = get2_users_id_tweets_response_instance.to_dict()
# create an instance of Get2UsersIdTweetsResponse from a dict
get2_users_id_tweets_response_from_dict = Get2UsersIdTweetsResponse.from_dict(get2_users_id_tweets_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



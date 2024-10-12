# Get2TweetsIdLikingUsersResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[User]**](User.md) |  | [optional] 
**errors** | [**List[Problem]**](Problem.md) |  | [optional] 
**includes** | [**Expansions**](Expansions.md) |  | [optional] 
**meta** | [**Get2DmConversationsIdDmEventsResponseMeta**](Get2DmConversationsIdDmEventsResponseMeta.md) |  | [optional] 

## Example

```python
from openapi_client.models.get2_tweets_id_liking_users_response import Get2TweetsIdLikingUsersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of Get2TweetsIdLikingUsersResponse from a JSON string
get2_tweets_id_liking_users_response_instance = Get2TweetsIdLikingUsersResponse.from_json(json)
# print the JSON string representation of the object
print(Get2TweetsIdLikingUsersResponse.to_json())

# convert the object into a dict
get2_tweets_id_liking_users_response_dict = get2_tweets_id_liking_users_response_instance.to_dict()
# create an instance of Get2TweetsIdLikingUsersResponse from a dict
get2_tweets_id_liking_users_response_from_dict = Get2TweetsIdLikingUsersResponse.from_dict(get2_tweets_id_liking_users_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



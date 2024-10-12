# Get2UsersIdBookmarksResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Tweet]**](Tweet.md) |  | [optional] 
**errors** | [**List[Problem]**](Problem.md) |  | [optional] 
**includes** | [**Expansions**](Expansions.md) |  | [optional] 
**meta** | [**Get2DmConversationsIdDmEventsResponseMeta**](Get2DmConversationsIdDmEventsResponseMeta.md) |  | [optional] 

## Example

```python
from openapi_client.models.get2_users_id_bookmarks_response import Get2UsersIdBookmarksResponse

# TODO update the JSON string below
json = "{}"
# create an instance of Get2UsersIdBookmarksResponse from a JSON string
get2_users_id_bookmarks_response_instance = Get2UsersIdBookmarksResponse.from_json(json)
# print the JSON string representation of the object
print(Get2UsersIdBookmarksResponse.to_json())

# convert the object into a dict
get2_users_id_bookmarks_response_dict = get2_users_id_bookmarks_response_instance.to_dict()
# create an instance of Get2UsersIdBookmarksResponse from a dict
get2_users_id_bookmarks_response_from_dict = Get2UsersIdBookmarksResponse.from_dict(get2_users_id_bookmarks_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



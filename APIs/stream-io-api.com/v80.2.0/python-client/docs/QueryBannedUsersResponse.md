# QueryBannedUsersResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bans** | [**List[BanResponse]**](BanResponse.md) |  | 
**duration** | **str** | Duration of the request in human-readable format | 

## Example

```python
from openapi_client.models.query_banned_users_response import QueryBannedUsersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of QueryBannedUsersResponse from a JSON string
query_banned_users_response_instance = QueryBannedUsersResponse.from_json(json)
# print the JSON string representation of the object
print(QueryBannedUsersResponse.to_json())

# convert the object into a dict
query_banned_users_response_dict = query_banned_users_response_instance.to_dict()
# create an instance of QueryBannedUsersResponse from a dict
query_banned_users_response_from_dict = QueryBannedUsersResponse.from_dict(query_banned_users_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



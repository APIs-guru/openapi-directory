# QueryBannedUsersRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at_after** | **datetime** |  | [optional] 
**created_at_after_or_equal** | **datetime** |  | [optional] 
**created_at_before** | **datetime** |  | [optional] 
**created_at_before_or_equal** | **datetime** |  | [optional] 
**filter_conditions** | **Dict[str, object]** |  | 
**limit** | **int** |  | [optional] 
**offset** | **int** |  | [optional] 
**sort** | [**List[SortParam]**](SortParam.md) |  | [optional] 
**user** | [**UserObject**](UserObject.md) |  | [optional] 
**user_id** | **str** | **Server-side only**. User ID which server acts upon | [optional] 

## Example

```python
from openapi_client.models.query_banned_users_request import QueryBannedUsersRequest

# TODO update the JSON string below
json = "{}"
# create an instance of QueryBannedUsersRequest from a JSON string
query_banned_users_request_instance = QueryBannedUsersRequest.from_json(json)
# print the JSON string representation of the object
print(QueryBannedUsersRequest.to_json())

# convert the object into a dict
query_banned_users_request_dict = query_banned_users_request_instance.to_dict()
# create an instance of QueryBannedUsersRequest from a dict
query_banned_users_request_from_dict = QueryBannedUsersRequest.from_dict(query_banned_users_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



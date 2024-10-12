# QueryUsersRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** |  | [optional] 
**connection_id** | **str** |  | [optional] 
**filter_conditions** | **Dict[str, object]** | User filters | 
**id_gt** | **str** |  | [optional] 
**id_gte** | **str** |  | [optional] 
**id_lt** | **str** |  | [optional] 
**id_lte** | **str** |  | [optional] 
**limit** | **int** |  | [optional] 
**offset** | **int** |  | [optional] 
**presence** | **bool** | Request user presence status | [optional] 
**sort** | [**List[SortParam]**](SortParam.md) | Array of sort parameters | 
**user** | [**UserObject**](UserObject.md) |  | [optional] 
**user_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.query_users_request import QueryUsersRequest

# TODO update the JSON string below
json = "{}"
# create an instance of QueryUsersRequest from a JSON string
query_users_request_instance = QueryUsersRequest.from_json(json)
# print the JSON string representation of the object
print(QueryUsersRequest.to_json())

# convert the object into a dict
query_users_request_dict = query_users_request_instance.to_dict()
# create an instance of QueryUsersRequest from a dict
query_users_request_from_dict = QueryUsersRequest.from_dict(query_users_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



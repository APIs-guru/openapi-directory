# QueryMembersRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at_after** | **datetime** |  | [optional] 
**created_at_after_or_equal** | **datetime** |  | [optional] 
**created_at_before** | **datetime** |  | [optional] 
**created_at_before_or_equal** | **datetime** |  | [optional] 
**filter_conditions** | **Dict[str, object]** | Filter to apply to members | 
**id** | **str** | Channel ID to interact with | [optional] 
**limit** | **int** | Number of records to return | [optional] 
**members** | [**List[ChannelMember]**](ChannelMember.md) | List of members to search in distinct channels | [optional] 
**offset** | **int** | Number of records to offset | [optional] 
**sort** | [**List[SortParam]**](SortParam.md) | Array of sort parameters | [optional] 
**type** | **str** | Channel type to interact with | 
**user** | [**UserObject**](UserObject.md) |  | [optional] 
**user_id** | **str** |  | [optional] 
**user_id_gt** | **str** |  | [optional] 
**user_id_gte** | **str** |  | [optional] 
**user_id_lt** | **str** |  | [optional] 
**user_id_lte** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.query_members_request import QueryMembersRequest

# TODO update the JSON string below
json = "{}"
# create an instance of QueryMembersRequest from a JSON string
query_members_request_instance = QueryMembersRequest.from_json(json)
# print the JSON string representation of the object
print(QueryMembersRequest.to_json())

# convert the object into a dict
query_members_request_dict = query_members_request_instance.to_dict()
# create an instance of QueryMembersRequest from a dict
query_members_request_from_dict = QueryMembersRequest.from_dict(query_members_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



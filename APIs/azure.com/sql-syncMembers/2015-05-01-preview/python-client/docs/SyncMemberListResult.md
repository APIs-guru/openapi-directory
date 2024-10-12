# SyncMemberListResult

A list of Azure SQL Database sync members.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to retrieve next page of results. | [optional] [readonly] 
**value** | [**List[SyncMember]**](SyncMember.md) | Array of results. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sync_member_list_result import SyncMemberListResult

# TODO update the JSON string below
json = "{}"
# create an instance of SyncMemberListResult from a JSON string
sync_member_list_result_instance = SyncMemberListResult.from_json(json)
# print the JSON string representation of the object
print(SyncMemberListResult.to_json())

# convert the object into a dict
sync_member_list_result_dict = sync_member_list_result_instance.to_dict()
# create an instance of SyncMemberListResult from a dict
sync_member_list_result_from_dict = SyncMemberListResult.from_dict(sync_member_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



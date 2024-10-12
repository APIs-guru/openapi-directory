# SyncMemberProperties

Properties of a sync member.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**database_name** | **str** | Database name of the member database in the sync member. | [optional] 
**database_type** | **str** | Database type of the sync member. | [optional] 
**password** | **str** | Password of the member database in the sync member. | [optional] 
**server_name** | **str** | Server name of the member database in the sync member | [optional] 
**sql_server_database_id** | **str** | SQL Server database id of the sync member. | [optional] 
**sync_agent_id** | **str** | ARM resource id of the sync agent in the sync member. | [optional] 
**sync_direction** | **str** | Sync direction of the sync member. | [optional] 
**sync_state** | **str** | Sync state of the sync member. | [optional] [readonly] 
**user_name** | **str** | User name of the member database in the sync member. | [optional] 

## Example

```python
from openapi_client.models.sync_member_properties import SyncMemberProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SyncMemberProperties from a JSON string
sync_member_properties_instance = SyncMemberProperties.from_json(json)
# print the JSON string representation of the object
print(SyncMemberProperties.to_json())

# convert the object into a dict
sync_member_properties_dict = sync_member_properties_instance.to_dict()
# create an instance of SyncMemberProperties from a dict
sync_member_properties_from_dict = SyncMemberProperties.from_dict(sync_member_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



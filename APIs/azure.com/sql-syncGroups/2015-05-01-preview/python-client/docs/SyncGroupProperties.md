# SyncGroupProperties

Properties of a sync group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conflict_resolution_policy** | **str** | Conflict resolution policy of the sync group. | [optional] 
**hub_database_password** | **str** | Password for the sync group hub database credential. | [optional] 
**hub_database_user_name** | **str** | User name for the sync group hub database credential. | [optional] 
**interval** | **int** | Sync interval of the sync group. | [optional] 
**last_sync_time** | **datetime** | Last sync time of the sync group. | [optional] [readonly] 
**var_schema** | [**SyncGroupSchema**](SyncGroupSchema.md) |  | [optional] 
**sync_database_id** | **str** | ARM resource id of the sync database in the sync group. | [optional] 
**sync_state** | **str** | Sync state of the sync group. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sync_group_properties import SyncGroupProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SyncGroupProperties from a JSON string
sync_group_properties_instance = SyncGroupProperties.from_json(json)
# print the JSON string representation of the object
print(SyncGroupProperties.to_json())

# convert the object into a dict
sync_group_properties_dict = sync_group_properties_instance.to_dict()
# create an instance of SyncGroupProperties from a dict
sync_group_properties_from_dict = SyncGroupProperties.from_dict(sync_group_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



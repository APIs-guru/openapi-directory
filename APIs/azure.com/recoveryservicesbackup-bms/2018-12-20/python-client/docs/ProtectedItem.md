# ProtectedItem

Base class for backup items.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_management_type** | **str** | Type of backup management for the backed up item. | [optional] 
**backup_set_name** | **str** | Name of the backup set the backup item belongs to | [optional] 
**container_name** | **str** | Unique name of container | [optional] 
**create_mode** | **str** | Create mode to indicate recovery of existing soft deleted data source or creation of new data source. | [optional] 
**deferred_delete_time_in_utc** | **datetime** | Time for deferred deletion in UTC | [optional] 
**deferred_delete_time_remaining** | **str** | Time remaining before the DS marked for deferred delete is permanently deleted | [optional] 
**is_deferred_delete_schedule_upcoming** | **bool** | Flag to identify whether the deferred deleted DS is to be purged soon | [optional] 
**is_rehydrate** | **bool** | Flag to identify that deferred deleted DS is to be moved into Pause state | [optional] 
**is_scheduled_for_deferred_delete** | **bool** | Flag to identify whether the DS is scheduled for deferred delete | [optional] 
**last_recovery_point** | **datetime** | Timestamp when the last (latest) backup copy was created for this backup item. | [optional] 
**policy_id** | **str** | ID of the backup policy with which this item is backed up. | [optional] 
**protected_item_type** | **str** | backup item type. | 
**source_resource_id** | **str** | ARM ID of the resource to be backed up. | [optional] 
**workload_type** | **str** | Type of workload this item represents. | [optional] 

## Example

```python
from openapi_client.models.protected_item import ProtectedItem

# TODO update the JSON string below
json = "{}"
# create an instance of ProtectedItem from a JSON string
protected_item_instance = ProtectedItem.from_json(json)
# print the JSON string representation of the object
print(ProtectedItem.to_json())

# convert the object into a dict
protected_item_dict = protected_item_instance.to_dict()
# create an instance of ProtectedItem from a dict
protected_item_from_dict = ProtectedItem.from_dict(protected_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



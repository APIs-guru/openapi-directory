# AzureVmWorkloadProtectedItem

Azure VM workload-specific protected item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**extended_info** | [**AzureVmWorkloadProtectedItemExtendedInfo**](AzureVmWorkloadProtectedItemExtendedInfo.md) |  | [optional] 
**friendly_name** | **str** | Friendly name of the DB represented by this backup item. | [optional] 
**last_backup_error_detail** | [**ErrorDetail**](ErrorDetail.md) |  | [optional] 
**last_backup_status** | **str** | Last backup operation status. Possible values: Healthy, Unhealthy. | [optional] 
**last_backup_time** | **datetime** | Timestamp of the last backup operation on this backup item. | [optional] 
**parent_name** | **str** | Parent name of the DB such as Instance or Availability Group. | [optional] 
**parent_type** | **str** | Parent type of protected item, example: for a DB, standalone server or distributed | [optional] 
**protected_item_data_source_id** | **str** | Data ID of the protected item. | [optional] 
**protected_item_health_status** | **str** | Health status of the backup item, evaluated based on last heartbeat received | [optional] 
**protection_state** | **str** | Backup state of this backup item. | [optional] 
**protection_status** | **str** | Backup status of this backup item. | [optional] 
**server_name** | **str** | Host/Cluster Name for instance or AG | [optional] 

## Example

```python
from openapi_client.models.azure_vm_workload_protected_item import AzureVmWorkloadProtectedItem

# TODO update the JSON string below
json = "{}"
# create an instance of AzureVmWorkloadProtectedItem from a JSON string
azure_vm_workload_protected_item_instance = AzureVmWorkloadProtectedItem.from_json(json)
# print the JSON string representation of the object
print(AzureVmWorkloadProtectedItem.to_json())

# convert the object into a dict
azure_vm_workload_protected_item_dict = azure_vm_workload_protected_item_instance.to_dict()
# create an instance of AzureVmWorkloadProtectedItem from a dict
azure_vm_workload_protected_item_from_dict = AzureVmWorkloadProtectedItem.from_dict(azure_vm_workload_protected_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



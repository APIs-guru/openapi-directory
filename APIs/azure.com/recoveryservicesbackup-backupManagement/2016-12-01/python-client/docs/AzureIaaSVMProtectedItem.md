# AzureIaaSVMProtectedItem

IaaS VM workload-specific backup item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**extended_info** | [**AzureIaaSVMProtectedItemExtendedInfo**](AzureIaaSVMProtectedItemExtendedInfo.md) |  | [optional] 
**friendly_name** | **str** | Friendly name of the VM represented by this backup item. | [optional] 
**health_details** | [**List[AzureIaaSVMHealthDetails]**](AzureIaaSVMHealthDetails.md) | Health details on this backup item. | [optional] 
**health_status** | **str** | Health status of protected item | [optional] 
**last_backup_status** | **str** | Last backup operation status. Possible values: Healthy, Unhealthy. | [optional] 
**last_backup_time** | **datetime** | Timestamp of the last backup operation on this backup item. | [optional] 
**protected_item_data_id** | **str** | Data ID of the protected item. | [optional] 
**protection_state** | **str** | Backup state of this backup item. | [optional] 
**protection_status** | **str** | Backup status of this backup item. | [optional] 
**virtual_machine_id** | **str** | Fully qualified ARM ID of the virtual machine represented by this item. | [optional] 

## Example

```python
from openapi_client.models.azure_iaa_svm_protected_item import AzureIaaSVMProtectedItem

# TODO update the JSON string below
json = "{}"
# create an instance of AzureIaaSVMProtectedItem from a JSON string
azure_iaa_svm_protected_item_instance = AzureIaaSVMProtectedItem.from_json(json)
# print the JSON string representation of the object
print(AzureIaaSVMProtectedItem.to_json())

# convert the object into a dict
azure_iaa_svm_protected_item_dict = azure_iaa_svm_protected_item_instance.to_dict()
# create an instance of AzureIaaSVMProtectedItem from a dict
azure_iaa_svm_protected_item_from_dict = AzureIaaSVMProtectedItem.from_dict(azure_iaa_svm_protected_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



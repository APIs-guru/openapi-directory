# AzureIaaSVMProtectedItem

This Azure VM workload-specific (also known as IaaS VM workload-specific) backup item has been backed up.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**extended_info** | [**AzureIaaSVMProtectedItemExtendedInfo**](AzureIaaSVMProtectedItemExtendedInfo.md) |  | [optional] 
**friendly_name** | **str** | The friendly name of the VM represented by this backup item. | [optional] 
**last_backup_status** | **str** | The last backup operation status. The possible values are: Healthy or Unhealthy. | [optional] 
**last_backup_time** | **datetime** | The timestamp of the last backup operation for this backup item. | [optional] 
**protection_state** | **str** | The backup state of this backup item. | [optional] 
**protection_status** | **str** | The backup status of this backup item. | [optional] 
**virtual_machine_id** | **str** | The fully qualified Resource Manager ID of the virtual machine represented by this item. | [optional] 

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



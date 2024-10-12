# AzureVmWorkloadProtectableItem

Azure VM workload-specific protectable item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_auto_protectable** | **bool** | Indicates if protectable item is auto-protectable | [optional] 
**is_auto_protected** | **bool** | Indicates if protectable item is auto-protected | [optional] 
**parent_name** | **str** | Name for instance or AG | [optional] 
**parent_unique_name** | **str** | Parent Unique Name is added to provide the service formatted URI Name of the Parent  Only Applicable for data bases where the parent would be either Instance or a SQL AG. | [optional] 
**prebackupvalidation** | [**PreBackupValidation**](PreBackupValidation.md) |  | [optional] 
**server_name** | **str** | Host/Cluster Name for instance or AG | [optional] 
**subinquireditemcount** | **int** | For instance or AG, indicates number of DB&#39;s present | [optional] 
**subprotectableitemcount** | **int** | For instance or AG, indicates number of DB&#39;s to be protected | [optional] 

## Example

```python
from openapi_client.models.azure_vm_workload_protectable_item import AzureVmWorkloadProtectableItem

# TODO update the JSON string below
json = "{}"
# create an instance of AzureVmWorkloadProtectableItem from a JSON string
azure_vm_workload_protectable_item_instance = AzureVmWorkloadProtectableItem.from_json(json)
# print the JSON string representation of the object
print(AzureVmWorkloadProtectableItem.to_json())

# convert the object into a dict
azure_vm_workload_protectable_item_dict = azure_vm_workload_protectable_item_instance.to_dict()
# create an instance of AzureVmWorkloadProtectableItem from a dict
azure_vm_workload_protectable_item_from_dict = AzureVmWorkloadProtectableItem.from_dict(azure_vm_workload_protectable_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



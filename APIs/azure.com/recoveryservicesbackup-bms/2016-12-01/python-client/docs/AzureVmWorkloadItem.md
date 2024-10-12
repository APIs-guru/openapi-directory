# AzureVmWorkloadItem

Azure VM workload-specific workload item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_auto_protectable** | **bool** | Indicates if workload item is auto-protectable | [optional] 
**parent_name** | **str** | Name for instance or AG | [optional] 
**server_name** | **str** | Host/Cluster Name for instance or AG | [optional] 
**sub_workload_item_count** | **int** | For instance or AG, indicates number of DB&#39;s to be protected | [optional] 
**subinquireditemcount** | **int** | For instance or AG, indicates number of DB&#39;s present | [optional] 

## Example

```python
from openapi_client.models.azure_vm_workload_item import AzureVmWorkloadItem

# TODO update the JSON string below
json = "{}"
# create an instance of AzureVmWorkloadItem from a JSON string
azure_vm_workload_item_instance = AzureVmWorkloadItem.from_json(json)
# print the JSON string representation of the object
print(AzureVmWorkloadItem.to_json())

# convert the object into a dict
azure_vm_workload_item_dict = azure_vm_workload_item_instance.to_dict()
# create an instance of AzureVmWorkloadItem from a dict
azure_vm_workload_item_from_dict = AzureVmWorkloadItem.from_dict(azure_vm_workload_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# AzureVmDetails

AzureVmDetails describes a VM in Azure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boot_option** | **str** | The VM Boot Option. | [optional] 
**committed_storage_mb** | **str** | The total size of the storage allocated to the VM in MB. | [optional] 
**computer_name** | **str** | The VM&#39;s ComputerName. | [optional] 
**cpu_count** | **int** | The number of cpus the VM has. | [optional] 
**disk_count** | **int** | The number of disks the VM has, including OS disk. | [optional] 
**disks** | [**List[Disk]**](Disk.md) | Description of the data disks. | [optional] 
**memory_mb** | **int** | The memory size of the VM in MB. | [optional] 
**os_description** | [**OSDescription**](OSDescription.md) |  | [optional] 
**os_disk** | [**OSDisk**](OSDisk.md) |  | [optional] 
**power_state** | **str** | The power state of the VM at the moment list was taken. | [optional] 
**tags** | **Dict[str, str]** | The tags of the VM. | [optional] 
**vm_id** | **str** | The VM full path in Azure. | [optional] 
**vm_size** | **str** | VM size as configured in Azure. Determines the VM&#39;s hardware spec. | [optional] 

## Example

```python
from openapi_client.models.azure_vm_details import AzureVmDetails

# TODO update the JSON string below
json = "{}"
# create an instance of AzureVmDetails from a JSON string
azure_vm_details_instance = AzureVmDetails.from_json(json)
# print the JSON string representation of the object
print(AzureVmDetails.to_json())

# convert the object into a dict
azure_vm_details_dict = azure_vm_details_instance.to_dict()
# create an instance of AzureVmDetails from a dict
azure_vm_details_from_dict = AzureVmDetails.from_dict(azure_vm_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



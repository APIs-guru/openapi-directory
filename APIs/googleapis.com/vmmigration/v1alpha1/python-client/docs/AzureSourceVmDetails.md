# AzureSourceVmDetails

Represent the source Azure VM details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**committed_storage_bytes** | **str** | The total size of the disks being migrated in bytes. | [optional] 
**disks** | [**List[AzureDiskDetails]**](AzureDiskDetails.md) | The disks attached to the source VM. | [optional] 
**firmware** | **str** | The firmware type of the source VM. | [optional] 
**vm_capabilities_info** | [**VmCapabilities**](VmCapabilities.md) |  | [optional] 

## Example

```python
from openapi_client.models.azure_source_vm_details import AzureSourceVmDetails

# TODO update the JSON string below
json = "{}"
# create an instance of AzureSourceVmDetails from a JSON string
azure_source_vm_details_instance = AzureSourceVmDetails.from_json(json)
# print the JSON string representation of the object
print(AzureSourceVmDetails.to_json())

# convert the object into a dict
azure_source_vm_details_dict = azure_source_vm_details_instance.to_dict()
# create an instance of AzureSourceVmDetails from a dict
azure_source_vm_details_from_dict = AzureSourceVmDetails.from_dict(azure_source_vm_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# VirtualMachineSize

Describes the properties of a VM size.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**family** | **str** | The family name of the virtual machine size. | [optional] [readonly] 
**low_priority_capable** | **bool** | Specifies if the virtual machine size supports low priority VMs. | [optional] [readonly] 
**max_resource_volume_mb** | **int** | The resource volume size, in MB, allowed by the virtual machine size. | [optional] [readonly] 
**memory_gb** | **float** | The amount of memory, in GB, supported by the virtual machine size. | [optional] [readonly] 
**name** | **str** | The name of the virtual machine size. | [optional] [readonly] 
**os_vhd_size_mb** | **int** | The OS VHD disk size, in MB, allowed by the virtual machine size. | [optional] [readonly] 
**premium_io** | **bool** | Specifies if the virtual machine size supports premium IO. | [optional] [readonly] 
**v_cpus** | **int** | The number of vCPUs supported by the virtual machine size. | [optional] [readonly] 

## Example

```python
from openapi_client.models.virtual_machine_size import VirtualMachineSize

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineSize from a JSON string
virtual_machine_size_instance = VirtualMachineSize.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineSize.to_json())

# convert the object into a dict
virtual_machine_size_dict = virtual_machine_size_instance.to_dict()
# create an instance of VirtualMachineSize from a dict
virtual_machine_size_from_dict = VirtualMachineSize.from_dict(virtual_machine_size_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# VirtualMachineSize

Describes the properties of a VM size.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_data_disk_count** | **int** | The maximum number of data disks that can be attached to the virtual machine size. | [optional] 
**memory_in_mb** | **int** | The amount of memory, in MB, supported by the virtual machine size. | [optional] 
**name** | **str** | The name of the virtual machine size. | [optional] 
**number_of_cores** | **int** | The number of cores supported by the virtual machine size. | [optional] 
**os_disk_size_in_mb** | **int** | The OS disk size, in MB, allowed by the virtual machine size. | [optional] 
**resource_disk_size_in_mb** | **int** | The resource disk size, in MB, allowed by the virtual machine size. | [optional] 

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



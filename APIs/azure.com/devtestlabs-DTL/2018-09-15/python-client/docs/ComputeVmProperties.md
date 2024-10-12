# ComputeVmProperties

Properties of a virtual machine returned by the Microsoft.Compute API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_disk_ids** | **List[str]** | Gets data disks blob uri for the virtual machine. | [optional] 
**data_disks** | [**List[ComputeDataDisk]**](ComputeDataDisk.md) | Gets all data disks attached to the virtual machine. | [optional] 
**network_interface_id** | **str** | Gets the network interface ID of the virtual machine. | [optional] 
**os_disk_id** | **str** | Gets OS disk blob uri for the virtual machine. | [optional] 
**os_type** | **str** | Gets the OS type of the virtual machine. | [optional] 
**statuses** | [**List[ComputeVmInstanceViewStatus]**](ComputeVmInstanceViewStatus.md) | Gets the statuses of the virtual machine. | [optional] 
**vm_size** | **str** | Gets the size of the virtual machine. | [optional] 

## Example

```python
from openapi_client.models.compute_vm_properties import ComputeVmProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ComputeVmProperties from a JSON string
compute_vm_properties_instance = ComputeVmProperties.from_json(json)
# print the JSON string representation of the object
print(ComputeVmProperties.to_json())

# convert the object into a dict
compute_vm_properties_dict = compute_vm_properties_instance.to_dict()
# create an instance of ComputeVmProperties from a dict
compute_vm_properties_from_dict = ComputeVmProperties.from_dict(compute_vm_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



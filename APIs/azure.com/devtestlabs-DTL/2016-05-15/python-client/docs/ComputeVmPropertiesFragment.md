# ComputeVmPropertiesFragment

Properties of a virtual machine returned by the Microsoft.Compute API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_disk_ids** | **List[str]** | Gets data disks blob uri for the virtual machine. | [optional] 
**data_disks** | [**List[ComputeDataDiskFragment]**](ComputeDataDiskFragment.md) | Gets all data disks attached to the virtual machine. | [optional] 
**network_interface_id** | **str** | Gets the network interface ID of the virtual machine. | [optional] 
**os_disk_id** | **str** | Gets OS disk blob uri for the virtual machine. | [optional] 
**os_type** | **str** | Gets the OS type of the virtual machine. | [optional] 
**statuses** | [**List[ComputeVmInstanceViewStatusFragment]**](ComputeVmInstanceViewStatusFragment.md) | Gets the statuses of the virtual machine. | [optional] 
**vm_size** | **str** | Gets the size of the virtual machine. | [optional] 

## Example

```python
from openapi_client.models.compute_vm_properties_fragment import ComputeVmPropertiesFragment

# TODO update the JSON string below
json = "{}"
# create an instance of ComputeVmPropertiesFragment from a JSON string
compute_vm_properties_fragment_instance = ComputeVmPropertiesFragment.from_json(json)
# print the JSON string representation of the object
print(ComputeVmPropertiesFragment.to_json())

# convert the object into a dict
compute_vm_properties_fragment_dict = compute_vm_properties_fragment_instance.to_dict()
# create an instance of ComputeVmPropertiesFragment from a dict
compute_vm_properties_fragment_from_dict = ComputeVmPropertiesFragment.from_dict(compute_vm_properties_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



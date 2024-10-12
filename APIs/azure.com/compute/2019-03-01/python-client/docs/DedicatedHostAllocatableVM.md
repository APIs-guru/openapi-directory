# DedicatedHostAllocatableVM

Represents the dedicated host unutilized capacity in terms of a specific VM size.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **float** | Maximum number of VMs of size vmSize that can fit in the dedicated host&#39;s remaining capacity. | [optional] 
**vm_size** | **str** | VM size in terms of which the unutilized capacity is represented. | [optional] 

## Example

```python
from openapi_client.models.dedicated_host_allocatable_vm import DedicatedHostAllocatableVM

# TODO update the JSON string below
json = "{}"
# create an instance of DedicatedHostAllocatableVM from a JSON string
dedicated_host_allocatable_vm_instance = DedicatedHostAllocatableVM.from_json(json)
# print the JSON string representation of the object
print(DedicatedHostAllocatableVM.to_json())

# convert the object into a dict
dedicated_host_allocatable_vm_dict = dedicated_host_allocatable_vm_instance.to_dict()
# create an instance of DedicatedHostAllocatableVM from a dict
dedicated_host_allocatable_vm_from_dict = DedicatedHostAllocatableVM.from_dict(dedicated_host_allocatable_vm_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



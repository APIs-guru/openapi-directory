# DedicatedHostAvailableCapacity

Dedicated host unutilized capacity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allocatable_vms** | [**List[DedicatedHostAllocatableVM]**](DedicatedHostAllocatableVM.md) | The unutilized capacity of the dedicated host represented in terms of each VM size that is allowed to be deployed to the dedicated host. | [optional] 

## Example

```python
from openapi_client.models.dedicated_host_available_capacity import DedicatedHostAvailableCapacity

# TODO update the JSON string below
json = "{}"
# create an instance of DedicatedHostAvailableCapacity from a JSON string
dedicated_host_available_capacity_instance = DedicatedHostAvailableCapacity.from_json(json)
# print the JSON string representation of the object
print(DedicatedHostAvailableCapacity.to_json())

# convert the object into a dict
dedicated_host_available_capacity_dict = dedicated_host_available_capacity_instance.to_dict()
# create an instance of DedicatedHostAvailableCapacity from a dict
dedicated_host_available_capacity_from_dict = DedicatedHostAvailableCapacity.from_dict(dedicated_host_available_capacity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



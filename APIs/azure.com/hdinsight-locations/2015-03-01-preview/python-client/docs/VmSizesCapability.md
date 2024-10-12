# VmSizesCapability

The virtual machine sizes capability.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available** | **List[str]** | The list of virtual machine size capabilities. | [optional] 

## Example

```python
from openapi_client.models.vm_sizes_capability import VmSizesCapability

# TODO update the JSON string below
json = "{}"
# create an instance of VmSizesCapability from a JSON string
vm_sizes_capability_instance = VmSizesCapability.from_json(json)
# print the JSON string representation of the object
print(VmSizesCapability.to_json())

# convert the object into a dict
vm_sizes_capability_dict = vm_sizes_capability_instance.to_dict()
# create an instance of VmSizesCapability from a dict
vm_sizes_capability_from_dict = VmSizesCapability.from_dict(vm_sizes_capability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



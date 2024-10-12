# VirtualMachineScaleSetIdentity

Identity for the virtual machine scale set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**principal_id** | **str** | The principal id of virtual machine scale set identity. | [optional] [readonly] 
**tenant_id** | **str** | The tenant id associated with the virtual machine scale set. | [optional] [readonly] 
**type** | **str** | The type of identity used for the virtual machine scale set. Currently, the only supported type is &#39;SystemAssigned&#39;, which implicitly creates an identity. | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_scale_set_identity import VirtualMachineScaleSetIdentity

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineScaleSetIdentity from a JSON string
virtual_machine_scale_set_identity_instance = VirtualMachineScaleSetIdentity.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineScaleSetIdentity.to_json())

# convert the object into a dict
virtual_machine_scale_set_identity_dict = virtual_machine_scale_set_identity_instance.to_dict()
# create an instance of VirtualMachineScaleSetIdentity from a dict
virtual_machine_scale_set_identity_from_dict = VirtualMachineScaleSetIdentity.from_dict(virtual_machine_scale_set_identity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



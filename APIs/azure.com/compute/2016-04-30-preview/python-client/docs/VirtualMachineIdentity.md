# VirtualMachineIdentity

Identity for the virtual machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**principal_id** | **str** | The principal id of virtual machine identity. | [optional] [readonly] 
**tenant_id** | **str** | The tenant id associated with the virtual machine. | [optional] [readonly] 
**type** | **str** | The type of identity used for the virtual machine. Currently, the only supported type is &#39;SystemAssigned&#39;, which implicitly creates an identity. | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_identity import VirtualMachineIdentity

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineIdentity from a JSON string
virtual_machine_identity_instance = VirtualMachineIdentity.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineIdentity.to_json())

# convert the object into a dict
virtual_machine_identity_dict = virtual_machine_identity_instance.to_dict()
# create an instance of VirtualMachineIdentity from a dict
virtual_machine_identity_from_dict = VirtualMachineIdentity.from_dict(virtual_machine_identity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



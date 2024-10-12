# VirtualMachineIdentity

Identity for the virtual machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity_ids** | **List[str]** | The list of user identities associated with the Virtual Machine. The user identity references will be ARM resource ids in the form: &#39;/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/identities/{identityName}&#39;. | [optional] 
**principal_id** | **str** | The principal id of virtual machine identity. This property will only be provided for a system assigned identity. | [optional] [readonly] 
**tenant_id** | **str** | The tenant id associated with the virtual machine. This property will only be provided for a system assigned identity. | [optional] [readonly] 
**type** | **str** | The type of identity used for the virtual machine. The type &#39;SystemAssigned, UserAssigned&#39; includes both an implicitly created identity and a set of user assigned identities. The type &#39;None&#39; will remove any identities from the virtual machine. | [optional] 

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



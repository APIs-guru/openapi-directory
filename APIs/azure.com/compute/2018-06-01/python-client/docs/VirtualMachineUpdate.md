# VirtualMachineUpdate

Describes a Virtual Machine Update.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | [**VirtualMachineIdentity**](VirtualMachineIdentity.md) |  | [optional] 
**plan** | [**Plan**](Plan.md) |  | [optional] 
**properties** | [**VirtualMachineProperties**](VirtualMachineProperties.md) |  | [optional] 
**zones** | **List[str]** | The virtual machine zones. | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_update import VirtualMachineUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineUpdate from a JSON string
virtual_machine_update_instance = VirtualMachineUpdate.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineUpdate.to_json())

# convert the object into a dict
virtual_machine_update_dict = virtual_machine_update_instance.to_dict()
# create an instance of VirtualMachineUpdate from a dict
virtual_machine_update_from_dict = VirtualMachineUpdate.from_dict(virtual_machine_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



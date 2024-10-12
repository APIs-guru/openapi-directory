# VirtualMachine

Describes a Virtual Machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | [**VirtualMachineIdentity**](VirtualMachineIdentity.md) |  | [optional] 
**plan** | [**Plan**](Plan.md) |  | [optional] 
**properties** | [**VirtualMachineProperties**](VirtualMachineProperties.md) |  | [optional] 
**resources** | [**List[VirtualMachineExtension]**](VirtualMachineExtension.md) | The virtual machine child extension resources. | [optional] [readonly] 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource location | 
**name** | **str** | Resource name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.virtual_machine import VirtualMachine

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachine from a JSON string
virtual_machine_instance = VirtualMachine.from_json(json)
# print the JSON string representation of the object
print(VirtualMachine.to_json())

# convert the object into a dict
virtual_machine_dict = virtual_machine_instance.to_dict()
# create an instance of VirtualMachine from a dict
virtual_machine_from_dict = VirtualMachine.from_dict(virtual_machine_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



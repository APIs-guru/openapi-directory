# VirtualMachineExtensionUpdate

Describes a Virtual Machine Extension.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**VirtualMachineExtensionUpdateProperties**](VirtualMachineExtensionUpdateProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_extension_update import VirtualMachineExtensionUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineExtensionUpdate from a JSON string
virtual_machine_extension_update_instance = VirtualMachineExtensionUpdate.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineExtensionUpdate.to_json())

# convert the object into a dict
virtual_machine_extension_update_dict = virtual_machine_extension_update_instance.to_dict()
# create an instance of VirtualMachineExtensionUpdate from a dict
virtual_machine_extension_update_from_dict = VirtualMachineExtensionUpdate.from_dict(virtual_machine_extension_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# VirtualMachineScaleSetExtensionUpdate

Describes a Virtual Machine Scale Set Extension.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the extension. | [optional] [readonly] 
**properties** | [**VirtualMachineScaleSetExtensionProperties**](VirtualMachineScaleSetExtensionProperties.md) |  | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 
**id** | **str** | Resource Id | [optional] [readonly] 

## Example

```python
from openapi_client.models.virtual_machine_scale_set_extension_update import VirtualMachineScaleSetExtensionUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineScaleSetExtensionUpdate from a JSON string
virtual_machine_scale_set_extension_update_instance = VirtualMachineScaleSetExtensionUpdate.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineScaleSetExtensionUpdate.to_json())

# convert the object into a dict
virtual_machine_scale_set_extension_update_dict = virtual_machine_scale_set_extension_update_instance.to_dict()
# create an instance of VirtualMachineScaleSetExtensionUpdate from a dict
virtual_machine_scale_set_extension_update_from_dict = VirtualMachineScaleSetExtensionUpdate.from_dict(virtual_machine_scale_set_extension_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



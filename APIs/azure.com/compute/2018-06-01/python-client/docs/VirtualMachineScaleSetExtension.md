# VirtualMachineScaleSetExtension

Describes a Virtual Machine Scale Set Extension.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the extension. | [optional] 
**properties** | [**VirtualMachineScaleSetExtensionProperties**](VirtualMachineScaleSetExtensionProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 

## Example

```python
from openapi_client.models.virtual_machine_scale_set_extension import VirtualMachineScaleSetExtension

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineScaleSetExtension from a JSON string
virtual_machine_scale_set_extension_instance = VirtualMachineScaleSetExtension.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineScaleSetExtension.to_json())

# convert the object into a dict
virtual_machine_scale_set_extension_dict = virtual_machine_scale_set_extension_instance.to_dict()
# create an instance of VirtualMachineScaleSetExtension from a dict
virtual_machine_scale_set_extension_from_dict = VirtualMachineScaleSetExtension.from_dict(virtual_machine_scale_set_extension_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



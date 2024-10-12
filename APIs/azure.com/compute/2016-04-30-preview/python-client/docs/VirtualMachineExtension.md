# VirtualMachineExtension

Describes a Virtual Machine Extension.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**VirtualMachineExtensionProperties**](VirtualMachineExtensionProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource location | 
**name** | **str** | Resource name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.virtual_machine_extension import VirtualMachineExtension

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineExtension from a JSON string
virtual_machine_extension_instance = VirtualMachineExtension.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineExtension.to_json())

# convert the object into a dict
virtual_machine_extension_dict = virtual_machine_extension_instance.to_dict()
# create an instance of VirtualMachineExtension from a dict
virtual_machine_extension_from_dict = VirtualMachineExtension.from_dict(virtual_machine_extension_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



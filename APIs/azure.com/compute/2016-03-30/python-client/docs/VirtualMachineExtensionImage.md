# VirtualMachineExtensionImage

Describes a Virtual Machine Extension Image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**VirtualMachineExtensionImageProperties**](VirtualMachineExtensionImageProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource location | 
**name** | **str** | Resource name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.virtual_machine_extension_image import VirtualMachineExtensionImage

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineExtensionImage from a JSON string
virtual_machine_extension_image_instance = VirtualMachineExtensionImage.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineExtensionImage.to_json())

# convert the object into a dict
virtual_machine_extension_image_dict = virtual_machine_extension_image_instance.to_dict()
# create an instance of VirtualMachineExtensionImage from a dict
virtual_machine_extension_image_from_dict = VirtualMachineExtensionImage.from_dict(virtual_machine_extension_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



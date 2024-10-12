# VirtualMachineExtensionImageProperties

Describes the properties of a Virtual Machine Extension Image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compute_role** | **str** | The type of role (IaaS or PaaS) this extension supports. | 
**handler_schema** | **str** | The schema defined by publisher, where extension consumers should provide settings in a matching schema. | 
**operating_system** | **str** | The operating system this extension supports. | 
**supports_multiple_extensions** | **bool** | Whether the handler can support multiple extensions. | [optional] 
**vm_scale_set_enabled** | **bool** | Whether the extension can be used on xRP VMScaleSets. By default existing extensions are usable on scalesets, but there might be cases where a publisher wants to explicitly indicate the extension is only enabled for CRP VMs but not VMSS. | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_extension_image_properties import VirtualMachineExtensionImageProperties

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineExtensionImageProperties from a JSON string
virtual_machine_extension_image_properties_instance = VirtualMachineExtensionImageProperties.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineExtensionImageProperties.to_json())

# convert the object into a dict
virtual_machine_extension_image_properties_dict = virtual_machine_extension_image_properties_instance.to_dict()
# create an instance of VirtualMachineExtensionImageProperties from a dict
virtual_machine_extension_image_properties_from_dict = VirtualMachineExtensionImageProperties.from_dict(virtual_machine_extension_image_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



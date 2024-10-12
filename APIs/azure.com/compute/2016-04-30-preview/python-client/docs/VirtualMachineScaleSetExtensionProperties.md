# VirtualMachineScaleSetExtensionProperties

Describes the properties of a Virtual Machine Scale Set Extension.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_upgrade_minor_version** | **bool** | Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true. | [optional] 
**protected_settings** | **object** | The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all. | [optional] 
**provisioning_state** | **str** | The provisioning state, which only appears in the response. | [optional] [readonly] 
**publisher** | **str** | The name of the extension handler publisher. | [optional] 
**settings** | **object** | Json formatted public settings for the extension. | [optional] 
**type** | **str** | Specifies the type of the extension; an example is \&quot;CustomScriptExtension\&quot;. | [optional] 
**type_handler_version** | **str** | Specifies the version of the script handler. | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_scale_set_extension_properties import VirtualMachineScaleSetExtensionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineScaleSetExtensionProperties from a JSON string
virtual_machine_scale_set_extension_properties_instance = VirtualMachineScaleSetExtensionProperties.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineScaleSetExtensionProperties.to_json())

# convert the object into a dict
virtual_machine_scale_set_extension_properties_dict = virtual_machine_scale_set_extension_properties_instance.to_dict()
# create an instance of VirtualMachineScaleSetExtensionProperties from a dict
virtual_machine_scale_set_extension_properties_from_dict = VirtualMachineScaleSetExtensionProperties.from_dict(virtual_machine_scale_set_extension_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



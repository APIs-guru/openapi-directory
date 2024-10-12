# MachineExtensionUpdateProperties

Describes the properties of a Machine Extension.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_upgrade_minor_version** | **bool** | Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true. | [optional] 
**force_update_tag** | **str** | How the extension handler should be forced to update even if the extension configuration has not changed. | [optional] 
**protected_settings** | **object** | The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all. | [optional] 
**publisher** | **str** | The name of the extension handler publisher. | [optional] 
**settings** | **object** | Json formatted public settings for the extension. | [optional] 
**type** | **str** | Specifies the type of the extension; an example is \&quot;CustomScriptExtension\&quot;. | [optional] 
**type_handler_version** | **str** | Specifies the version of the script handler. | [optional] 

## Example

```python
from openapi_client.models.machine_extension_update_properties import MachineExtensionUpdateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of MachineExtensionUpdateProperties from a JSON string
machine_extension_update_properties_instance = MachineExtensionUpdateProperties.from_json(json)
# print the JSON string representation of the object
print(MachineExtensionUpdateProperties.to_json())

# convert the object into a dict
machine_extension_update_properties_dict = machine_extension_update_properties_instance.to_dict()
# create an instance of MachineExtensionUpdateProperties from a dict
machine_extension_update_properties_from_dict = MachineExtensionUpdateProperties.from_dict(machine_extension_update_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



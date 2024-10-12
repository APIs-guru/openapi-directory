# VMExtensionProperties

Properties of a Virtual Machine Extension Image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compute_role** | **str** | Compute role | [optional] 
**is_system_extension** | **bool** | Indicates if the extension is for the system. | [optional] 
**provisioning_state** | **str** | The provisioning state of the resource. | [optional] 
**source_blob** | [**AzureBlob**](AzureBlob.md) |  | [optional] 
**support_multiple_extensions** | **bool** | True if supports multiple extensions. | [optional] 
**vm_os_type** | **str** | Operating system type. | [optional] 
**vm_scale_set_enabled** | **bool** | Value indicating whether the extension is enabled for virtual machine scale set support. | [optional] 

## Example

```python
from openapi_client.models.vm_extension_properties import VMExtensionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of VMExtensionProperties from a JSON string
vm_extension_properties_instance = VMExtensionProperties.from_json(json)
# print the JSON string representation of the object
print(VMExtensionProperties.to_json())

# convert the object into a dict
vm_extension_properties_dict = vm_extension_properties_instance.to_dict()
# create an instance of VMExtensionProperties from a dict
vm_extension_properties_from_dict = VMExtensionProperties.from_dict(vm_extension_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



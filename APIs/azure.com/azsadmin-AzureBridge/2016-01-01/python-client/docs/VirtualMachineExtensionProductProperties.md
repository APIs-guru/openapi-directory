# VirtualMachineExtensionProductProperties

Product information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compute_role** | [**ComputeRole**](ComputeRole.md) |  | [optional] 
**is_system_extension** | **bool** | Specifies if product is a Virtual Machine Extension. | [optional] [readonly] 
**source_blob** | [**Uri**](Uri.md) |  | [optional] 
**support_multiple_extensions** | **bool** | Indicates if specified product supports multiple extensions. | [optional] [readonly] 
**version** | **str** | Specifies product version. | [optional] [readonly] 
**vm_os_type** | [**OperatingSystem**](OperatingSystem.md) |  | [optional] 
**vm_scale_set_enabled** | **bool** | Indicates if virtual machine Scale Set is enabled in the specified product. | [optional] [readonly] 

## Example

```python
from openapi_client.models.virtual_machine_extension_product_properties import VirtualMachineExtensionProductProperties

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineExtensionProductProperties from a JSON string
virtual_machine_extension_product_properties_instance = VirtualMachineExtensionProductProperties.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineExtensionProductProperties.to_json())

# convert the object into a dict
virtual_machine_extension_product_properties_dict = virtual_machine_extension_product_properties_instance.to_dict()
# create an instance of VirtualMachineExtensionProductProperties from a dict
virtual_machine_extension_product_properties_from_dict = VirtualMachineExtensionProductProperties.from_dict(virtual_machine_extension_product_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



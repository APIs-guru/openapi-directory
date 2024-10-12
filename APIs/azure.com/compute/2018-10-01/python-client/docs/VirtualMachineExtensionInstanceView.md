# VirtualMachineExtensionInstanceView

The instance view of a virtual machine extension.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The virtual machine extension name. | [optional] 
**statuses** | [**List[InstanceViewStatus]**](InstanceViewStatus.md) | The resource status information. | [optional] 
**substatuses** | [**List[InstanceViewStatus]**](InstanceViewStatus.md) | The resource status information. | [optional] 
**type** | **str** | Specifies the type of the extension; an example is \&quot;CustomScriptExtension\&quot;. | [optional] 
**type_handler_version** | **str** | Specifies the version of the script handler. | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_extension_instance_view import VirtualMachineExtensionInstanceView

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineExtensionInstanceView from a JSON string
virtual_machine_extension_instance_view_instance = VirtualMachineExtensionInstanceView.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineExtensionInstanceView.to_json())

# convert the object into a dict
virtual_machine_extension_instance_view_dict = virtual_machine_extension_instance_view_instance.to_dict()
# create an instance of VirtualMachineExtensionInstanceView from a dict
virtual_machine_extension_instance_view_from_dict = VirtualMachineExtensionInstanceView.from_dict(virtual_machine_extension_instance_view_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



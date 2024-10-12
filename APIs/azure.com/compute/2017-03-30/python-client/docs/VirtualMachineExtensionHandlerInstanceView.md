# VirtualMachineExtensionHandlerInstanceView

The instance view of a virtual machine extension handler.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**InstanceViewStatus**](InstanceViewStatus.md) |  | [optional] 
**type** | **str** | Specifies the type of the extension; an example is \&quot;CustomScriptExtension\&quot;. | [optional] 
**type_handler_version** | **str** | Specifies the version of the script handler. | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_extension_handler_instance_view import VirtualMachineExtensionHandlerInstanceView

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineExtensionHandlerInstanceView from a JSON string
virtual_machine_extension_handler_instance_view_instance = VirtualMachineExtensionHandlerInstanceView.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineExtensionHandlerInstanceView.to_json())

# convert the object into a dict
virtual_machine_extension_handler_instance_view_dict = virtual_machine_extension_handler_instance_view_instance.to_dict()
# create an instance of VirtualMachineExtensionHandlerInstanceView from a dict
virtual_machine_extension_handler_instance_view_from_dict = VirtualMachineExtensionHandlerInstanceView.from_dict(virtual_machine_extension_handler_instance_view_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



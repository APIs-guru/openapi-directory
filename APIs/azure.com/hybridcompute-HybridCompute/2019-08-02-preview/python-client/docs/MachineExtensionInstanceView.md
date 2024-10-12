# MachineExtensionInstanceView

Describes the Machine Extension Instance View.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The machine extension name. | [optional] 
**status** | [**MachineExtensionInstanceViewStatus**](MachineExtensionInstanceViewStatus.md) |  | [optional] 
**type** | **str** | Specifies the type of the extension; an example is \&quot;CustomScriptExtension\&quot;. | [optional] 
**type_handler_version** | **str** | Specifies the version of the script handler. | [optional] 

## Example

```python
from openapi_client.models.machine_extension_instance_view import MachineExtensionInstanceView

# TODO update the JSON string below
json = "{}"
# create an instance of MachineExtensionInstanceView from a JSON string
machine_extension_instance_view_instance = MachineExtensionInstanceView.from_json(json)
# print the JSON string representation of the object
print(MachineExtensionInstanceView.to_json())

# convert the object into a dict
machine_extension_instance_view_dict = machine_extension_instance_view_instance.to_dict()
# create an instance of MachineExtensionInstanceView from a dict
machine_extension_instance_view_from_dict = MachineExtensionInstanceView.from_dict(machine_extension_instance_view_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



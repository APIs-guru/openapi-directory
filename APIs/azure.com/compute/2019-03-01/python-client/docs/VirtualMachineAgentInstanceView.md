# VirtualMachineAgentInstanceView

The instance view of the VM Agent running on the virtual machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**extension_handlers** | [**List[VirtualMachineExtensionHandlerInstanceView]**](VirtualMachineExtensionHandlerInstanceView.md) | The virtual machine extension handler instance view. | [optional] 
**statuses** | [**List[InstanceViewStatus]**](InstanceViewStatus.md) | The resource status information. | [optional] 
**vm_agent_version** | **str** | The VM Agent full version. | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_agent_instance_view import VirtualMachineAgentInstanceView

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineAgentInstanceView from a JSON string
virtual_machine_agent_instance_view_instance = VirtualMachineAgentInstanceView.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineAgentInstanceView.to_json())

# convert the object into a dict
virtual_machine_agent_instance_view_dict = virtual_machine_agent_instance_view_instance.to_dict()
# create an instance of VirtualMachineAgentInstanceView from a dict
virtual_machine_agent_instance_view_from_dict = VirtualMachineAgentInstanceView.from_dict(virtual_machine_agent_instance_view_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



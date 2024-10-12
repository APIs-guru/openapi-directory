# VirtualMachineScaleSetInstanceView

The instance view of a virtual machine scale set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**extensions** | [**List[VirtualMachineScaleSetVMExtensionsSummary]**](VirtualMachineScaleSetVMExtensionsSummary.md) | The extensions information. | [optional] [readonly] 
**statuses** | [**List[InstanceViewStatus]**](InstanceViewStatus.md) | The resource status information. | [optional] 
**virtual_machine** | [**VirtualMachineScaleSetInstanceViewStatusesSummary**](VirtualMachineScaleSetInstanceViewStatusesSummary.md) |  | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_scale_set_instance_view import VirtualMachineScaleSetInstanceView

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineScaleSetInstanceView from a JSON string
virtual_machine_scale_set_instance_view_instance = VirtualMachineScaleSetInstanceView.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineScaleSetInstanceView.to_json())

# convert the object into a dict
virtual_machine_scale_set_instance_view_dict = virtual_machine_scale_set_instance_view_instance.to_dict()
# create an instance of VirtualMachineScaleSetInstanceView from a dict
virtual_machine_scale_set_instance_view_from_dict = VirtualMachineScaleSetInstanceView.from_dict(virtual_machine_scale_set_instance_view_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# VirtualMachineStopMode

List of virtual machine stop modes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mode** | **str** | mode indicates a type of stop operation - reboot, suspend, shutdown or power-off | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_stop_mode import VirtualMachineStopMode

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineStopMode from a JSON string
virtual_machine_stop_mode_instance = VirtualMachineStopMode.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineStopMode.to_json())

# convert the object into a dict
virtual_machine_stop_mode_dict = virtual_machine_stop_mode_instance.to_dict()
# create an instance of VirtualMachineStopMode from a dict
virtual_machine_stop_mode_from_dict = VirtualMachineStopMode.from_dict(virtual_machine_stop_mode_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



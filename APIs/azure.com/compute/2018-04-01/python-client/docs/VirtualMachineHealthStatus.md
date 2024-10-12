# VirtualMachineHealthStatus

The health status of the VM.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**InstanceViewStatus**](InstanceViewStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_health_status import VirtualMachineHealthStatus

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineHealthStatus from a JSON string
virtual_machine_health_status_instance = VirtualMachineHealthStatus.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineHealthStatus.to_json())

# convert the object into a dict
virtual_machine_health_status_dict = virtual_machine_health_status_instance.to_dict()
# create an instance of VirtualMachineHealthStatus from a dict
virtual_machine_health_status_from_dict = VirtualMachineHealthStatus.from_dict(virtual_machine_health_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



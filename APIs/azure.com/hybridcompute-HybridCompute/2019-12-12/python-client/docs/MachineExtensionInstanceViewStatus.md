# MachineExtensionInstanceViewStatus

Instance view status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The status code. | [optional] 
**display_status** | **str** | The short localizable label for the status. | [optional] 
**level** | **str** | The level code. | [optional] 
**message** | **str** | The detailed status message, including for alerts and error messages. | [optional] 
**time** | **datetime** | The time of the status. | [optional] 

## Example

```python
from openapi_client.models.machine_extension_instance_view_status import MachineExtensionInstanceViewStatus

# TODO update the JSON string below
json = "{}"
# create an instance of MachineExtensionInstanceViewStatus from a JSON string
machine_extension_instance_view_status_instance = MachineExtensionInstanceViewStatus.from_json(json)
# print the JSON string representation of the object
print(MachineExtensionInstanceViewStatus.to_json())

# convert the object into a dict
machine_extension_instance_view_status_dict = machine_extension_instance_view_status_instance.to_dict()
# create an instance of MachineExtensionInstanceViewStatus from a dict
machine_extension_instance_view_status_from_dict = MachineExtensionInstanceViewStatus.from_dict(machine_extension_instance_view_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# VirtualMachineTaskDetails

This class represents the virtual machine task details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_task** | [**JobEntity**](JobEntity.md) |  | [optional] 
**skipped_reason** | **str** | The skipped reason. | [optional] 
**skipped_reason_string** | **str** | The skipped reason string. | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_task_details import VirtualMachineTaskDetails

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineTaskDetails from a JSON string
virtual_machine_task_details_instance = VirtualMachineTaskDetails.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineTaskDetails.to_json())

# convert the object into a dict
virtual_machine_task_details_dict = virtual_machine_task_details_instance.to_dict()
# create an instance of VirtualMachineTaskDetails from a dict
virtual_machine_task_details_from_dict = VirtualMachineTaskDetails.from_dict(virtual_machine_task_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



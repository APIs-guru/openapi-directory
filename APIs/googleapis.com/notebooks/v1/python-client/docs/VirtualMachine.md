# VirtualMachine

Runtime using Virtual Machine for computing.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_id** | **str** | Output only. The unique identifier of the Managed Compute Engine instance. | [optional] [readonly] 
**instance_name** | **str** | Output only. The user-friendly name of the Managed Compute Engine instance. | [optional] [readonly] 
**virtual_machine_config** | [**VirtualMachineConfig**](VirtualMachineConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.virtual_machine import VirtualMachine

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachine from a JSON string
virtual_machine_instance = VirtualMachine.from_json(json)
# print the JSON string representation of the object
print(VirtualMachine.to_json())

# convert the object into a dict
virtual_machine_dict = virtual_machine_instance.to_dict()
# create an instance of VirtualMachine from a dict
virtual_machine_from_dict = VirtualMachine.from_dict(virtual_machine_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



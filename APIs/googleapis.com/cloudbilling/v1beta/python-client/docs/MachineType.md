# MachineType

Specification of machine series, memory, and number of vCPUs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_machine_type** | [**CustomMachineType**](CustomMachineType.md) |  | [optional] 
**predefined_machine_type** | [**PredefinedMachineType**](PredefinedMachineType.md) |  | [optional] 

## Example

```python
from openapi_client.models.machine_type import MachineType

# TODO update the JSON string below
json = "{}"
# create an instance of MachineType from a JSON string
machine_type_instance = MachineType.from_json(json)
# print the JSON string representation of the object
print(MachineType.to_json())

# convert the object into a dict
machine_type_dict = machine_type_instance.to_dict()
# create an instance of MachineType from a dict
machine_type_from_dict = MachineType.from_dict(machine_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



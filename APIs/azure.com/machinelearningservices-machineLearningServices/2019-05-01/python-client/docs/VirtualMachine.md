# VirtualMachine

A Machine Learning compute based on Azure Virtual Machines.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**VirtualMachineAllOfProperties**](VirtualMachineAllOfProperties.md) |  | [optional] 

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



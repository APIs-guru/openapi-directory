# VirtualMachineConfiguration

VM configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_reference** | [**ImageReference**](ImageReference.md) |  | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_configuration import VirtualMachineConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineConfiguration from a JSON string
virtual_machine_configuration_instance = VirtualMachineConfiguration.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineConfiguration.to_json())

# convert the object into a dict
virtual_machine_configuration_dict = virtual_machine_configuration_instance.to_dict()
# create an instance of VirtualMachineConfiguration from a dict
virtual_machine_configuration_from_dict = VirtualMachineConfiguration.from_dict(virtual_machine_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



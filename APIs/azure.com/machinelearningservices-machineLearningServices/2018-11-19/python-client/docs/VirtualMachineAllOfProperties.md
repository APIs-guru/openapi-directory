# VirtualMachineAllOfProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | Public IP address of the virtual machine. | [optional] 
**administrator_account** | [**VirtualMachineSshCredentials**](VirtualMachineSshCredentials.md) |  | [optional] 
**ssh_port** | **int** | Port open for ssh connections. | [optional] 
**virtual_machine_size** | **str** | Virtual Machine size | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_all_of_properties import VirtualMachineAllOfProperties

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineAllOfProperties from a JSON string
virtual_machine_all_of_properties_instance = VirtualMachineAllOfProperties.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineAllOfProperties.to_json())

# convert the object into a dict
virtual_machine_all_of_properties_dict = virtual_machine_all_of_properties_instance.to_dict()
# create an instance of VirtualMachineAllOfProperties from a dict
virtual_machine_all_of_properties_from_dict = VirtualMachineAllOfProperties.from_dict(virtual_machine_all_of_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



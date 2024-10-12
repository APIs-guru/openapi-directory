# VirtualMachineSshCredentials

Admin credentials for virtual machine

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | **str** | Password of admin account | [optional] 
**private_key_data** | **str** | Private key data | [optional] 
**public_key_data** | **str** | Public key data | [optional] 
**username** | **str** | Username of admin account | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_ssh_credentials import VirtualMachineSshCredentials

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineSshCredentials from a JSON string
virtual_machine_ssh_credentials_instance = VirtualMachineSshCredentials.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineSshCredentials.to_json())

# convert the object into a dict
virtual_machine_ssh_credentials_dict = virtual_machine_ssh_credentials_instance.to_dict()
# create an instance of VirtualMachineSshCredentials from a dict
virtual_machine_ssh_credentials_from_dict = VirtualMachineSshCredentials.from_dict(virtual_machine_ssh_credentials_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



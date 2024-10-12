# VirtualMachineSecrets

Secrets related to a Machine Learning compute based on AKS.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**administrator_account** | [**VirtualMachineSshCredentials**](VirtualMachineSshCredentials.md) |  | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_secrets import VirtualMachineSecrets

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineSecrets from a JSON string
virtual_machine_secrets_instance = VirtualMachineSecrets.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineSecrets.to_json())

# convert the object into a dict
virtual_machine_secrets_dict = virtual_machine_secrets_instance.to_dict()
# create an instance of VirtualMachineSecrets from a dict
virtual_machine_secrets_from_dict = VirtualMachineSecrets.from_dict(virtual_machine_secrets_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



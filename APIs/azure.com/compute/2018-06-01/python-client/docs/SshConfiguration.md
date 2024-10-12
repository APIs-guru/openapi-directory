# SshConfiguration

SSH configuration for Linux based VMs running on Azure

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**public_keys** | [**List[SshPublicKey]**](SshPublicKey.md) | The list of SSH public keys used to authenticate with linux based VMs. | [optional] 

## Example

```python
from openapi_client.models.ssh_configuration import SshConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of SshConfiguration from a JSON string
ssh_configuration_instance = SshConfiguration.from_json(json)
# print the JSON string representation of the object
print(SshConfiguration.to_json())

# convert the object into a dict
ssh_configuration_dict = ssh_configuration_instance.to_dict()
# create an instance of SshConfiguration from a dict
ssh_configuration_from_dict = SshConfiguration.from_dict(ssh_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



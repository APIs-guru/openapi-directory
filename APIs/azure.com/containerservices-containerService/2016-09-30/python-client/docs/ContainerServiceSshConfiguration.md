# ContainerServiceSshConfiguration

SSH configuration for Linux-based VMs running on Azure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**public_keys** | [**List[ContainerServiceSshPublicKey]**](ContainerServiceSshPublicKey.md) | the list of SSH public keys used to authenticate with Linux-based VMs. | 

## Example

```python
from openapi_client.models.container_service_ssh_configuration import ContainerServiceSshConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerServiceSshConfiguration from a JSON string
container_service_ssh_configuration_instance = ContainerServiceSshConfiguration.from_json(json)
# print the JSON string representation of the object
print(ContainerServiceSshConfiguration.to_json())

# convert the object into a dict
container_service_ssh_configuration_dict = container_service_ssh_configuration_instance.to_dict()
# create an instance of ContainerServiceSshConfiguration from a dict
container_service_ssh_configuration_from_dict = ContainerServiceSshConfiguration.from_dict(container_service_ssh_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ContainerRegistryCredentials

Information about the Azure Container Registry which contains the images deployed to the cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**login_server** | **str** | The ACR login server name. User name is the first part of the FQDN. | [optional] [readonly] 
**password** | **str** | The ACR primary password. | [optional] [readonly] 
**password2** | **str** | The ACR secondary password. | [optional] [readonly] 

## Example

```python
from openapi_client.models.container_registry_credentials import ContainerRegistryCredentials

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerRegistryCredentials from a JSON string
container_registry_credentials_instance = ContainerRegistryCredentials.from_json(json)
# print the JSON string representation of the object
print(ContainerRegistryCredentials.to_json())

# convert the object into a dict
container_registry_credentials_dict = container_registry_credentials_instance.to_dict()
# create an instance of ContainerRegistryCredentials from a dict
container_registry_credentials_from_dict = ContainerRegistryCredentials.from_dict(container_registry_credentials_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



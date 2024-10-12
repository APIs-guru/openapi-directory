# ContainerServiceCredentials

Information about the Azure Container Registry which contains the images deployed to the cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acs_kube_config** | **str** | The ACS kube config file. | [optional] [readonly] 
**image_pull_secret_name** | **str** | The ACR image pull secret name which was created in Kubernetes. | [optional] [readonly] 
**service_principal_configuration** | [**ServicePrincipalProperties**](ServicePrincipalProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.container_service_credentials import ContainerServiceCredentials

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerServiceCredentials from a JSON string
container_service_credentials_instance = ContainerServiceCredentials.from_json(json)
# print the JSON string representation of the object
print(ContainerServiceCredentials.to_json())

# convert the object into a dict
container_service_credentials_dict = container_service_credentials_instance.to_dict()
# create an instance of ContainerServiceCredentials from a dict
container_service_credentials_from_dict = ContainerServiceCredentials.from_dict(container_service_credentials_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



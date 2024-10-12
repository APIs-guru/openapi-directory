# CreateComposeDeploymentDescription

Defines description for creating a Service Fabric compose deployment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compose_file_content** | **str** | The content of the compose file that describes the deployment to create. | 
**deployment_name** | **str** | The name of the deployment. | 
**registry_credential** | [**RegistryCredential**](RegistryCredential.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_compose_deployment_description import CreateComposeDeploymentDescription

# TODO update the JSON string below
json = "{}"
# create an instance of CreateComposeDeploymentDescription from a JSON string
create_compose_deployment_description_instance = CreateComposeDeploymentDescription.from_json(json)
# print the JSON string representation of the object
print(CreateComposeDeploymentDescription.to_json())

# convert the object into a dict
create_compose_deployment_description_dict = create_compose_deployment_description_instance.to_dict()
# create an instance of CreateComposeDeploymentDescription from a dict
create_compose_deployment_description_from_dict = CreateComposeDeploymentDescription.from_dict(create_compose_deployment_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



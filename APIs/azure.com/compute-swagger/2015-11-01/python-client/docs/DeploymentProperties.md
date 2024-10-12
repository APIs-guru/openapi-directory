# DeploymentProperties

Deployment properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mode** | **str** | Gets or sets the deployment mode. | 
**parameters** | [**DeploymentParameters**](DeploymentParameters.md) |  | [optional] 
**template_link** | [**TemplateLink**](TemplateLink.md) |  | 

## Example

```python
from openapi_client.models.deployment_properties import DeploymentProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DeploymentProperties from a JSON string
deployment_properties_instance = DeploymentProperties.from_json(json)
# print the JSON string representation of the object
print(DeploymentProperties.to_json())

# convert the object into a dict
deployment_properties_dict = deployment_properties_instance.to_dict()
# create an instance of DeploymentProperties from a dict
deployment_properties_from_dict = DeploymentProperties.from_dict(deployment_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



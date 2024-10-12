# DeploymentProperties

Deployment properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**debug_setting** | [**DebugSetting**](DebugSetting.md) |  | [optional] 
**mode** | **str** | The deployment mode. | 
**parameters** | **object** | Deployment parameters. It can be a JObject or a well formed JSON string. Use only one of Parameters or ParametersLink. | [optional] 
**parameters_link** | [**ParametersLink**](ParametersLink.md) |  | [optional] 
**template** | **object** | The template content. It can be a JObject or a well formed JSON string. Use only one of Template or TemplateLink. | [optional] 
**template_link** | [**TemplateLink**](TemplateLink.md) |  | [optional] 

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



# DeploymentWhatIfProperties

Deployment What-if properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**what_if_settings** | [**DeploymentWhatIfSettings**](DeploymentWhatIfSettings.md) |  | [optional] 
**debug_setting** | [**DebugSetting**](DebugSetting.md) |  | [optional] 
**mode** | **str** | The mode that is used to deploy resources. This value can be either Incremental or Complete. In Incremental mode, resources are deployed without deleting existing resources that are not included in the template. In Complete mode, resources are deployed and existing resources in the resource group that are not included in the template are deleted. Be careful when using Complete mode as you may unintentionally delete resources. | 
**on_error_deployment** | [**OnErrorDeployment**](OnErrorDeployment.md) |  | [optional] 
**parameters** | **object** | Name and value pairs that define the deployment parameters for the template. You use this element when you want to provide the parameter values directly in the request rather than link to an existing parameter file. Use either the parametersLink property or the parameters property, but not both. It can be a JObject or a well formed JSON string. | [optional] 
**parameters_link** | [**ParametersLink**](ParametersLink.md) |  | [optional] 
**template** | **object** | The template content. You use this element when you want to pass the template syntax directly in the request rather than link to an existing template. It can be a JObject or well-formed JSON string. Use either the templateLink property or the template property, but not both. | [optional] 
**template_link** | [**TemplateLink**](TemplateLink.md) |  | [optional] 

## Example

```python
from openapi_client.models.deployment_what_if_properties import DeploymentWhatIfProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DeploymentWhatIfProperties from a JSON string
deployment_what_if_properties_instance = DeploymentWhatIfProperties.from_json(json)
# print the JSON string representation of the object
print(DeploymentWhatIfProperties.to_json())

# convert the object into a dict
deployment_what_if_properties_dict = deployment_what_if_properties_instance.to_dict()
# create an instance of DeploymentWhatIfProperties from a dict
deployment_what_if_properties_from_dict = DeploymentWhatIfProperties.from_dict(deployment_what_if_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



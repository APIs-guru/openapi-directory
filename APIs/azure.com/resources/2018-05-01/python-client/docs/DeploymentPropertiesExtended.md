# DeploymentPropertiesExtended

Deployment properties with additional details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**correlation_id** | **str** | The correlation ID of the deployment. | [optional] [readonly] 
**debug_setting** | [**DebugSetting**](DebugSetting.md) |  | [optional] 
**dependencies** | [**List[Dependency]**](Dependency.md) | The list of deployment dependencies. | [optional] 
**mode** | **str** | The deployment mode. Possible values are Incremental and Complete. | [optional] 
**on_error_deployment** | [**OnErrorDeploymentExtended**](OnErrorDeploymentExtended.md) |  | [optional] 
**outputs** | **object** | Key/value pairs that represent deployment output. | [optional] 
**parameters** | **object** | Deployment parameters. Use only one of Parameters or ParametersLink. | [optional] 
**parameters_link** | [**ParametersLink**](ParametersLink.md) |  | [optional] 
**providers** | [**List[Provider]**](Provider.md) | The list of resource providers needed for the deployment. | [optional] 
**provisioning_state** | **str** | The state of the provisioning. | [optional] [readonly] 
**template** | **object** | The template content. Use only one of Template or TemplateLink. | [optional] 
**template_link** | [**TemplateLink**](TemplateLink.md) |  | [optional] 
**timestamp** | **datetime** | The timestamp of the template deployment. | [optional] [readonly] 

## Example

```python
from openapi_client.models.deployment_properties_extended import DeploymentPropertiesExtended

# TODO update the JSON string below
json = "{}"
# create an instance of DeploymentPropertiesExtended from a JSON string
deployment_properties_extended_instance = DeploymentPropertiesExtended.from_json(json)
# print the JSON string representation of the object
print(DeploymentPropertiesExtended.to_json())

# convert the object into a dict
deployment_properties_extended_dict = deployment_properties_extended_instance.to_dict()
# create an instance of DeploymentPropertiesExtended from a dict
deployment_properties_extended_from_dict = DeploymentPropertiesExtended.from_dict(deployment_properties_extended_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



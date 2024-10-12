# EnvironmentDeploymentProperties

Properties of an environment deployment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arm_template_id** | **str** | The Azure Resource Manager template&#39;s identifier. | [optional] 
**parameters** | [**List[ArmTemplateParameterProperties]**](ArmTemplateParameterProperties.md) | The parameters of the Azure Resource Manager template. | [optional] 

## Example

```python
from openapi_client.models.environment_deployment_properties import EnvironmentDeploymentProperties

# TODO update the JSON string below
json = "{}"
# create an instance of EnvironmentDeploymentProperties from a JSON string
environment_deployment_properties_instance = EnvironmentDeploymentProperties.from_json(json)
# print the JSON string representation of the object
print(EnvironmentDeploymentProperties.to_json())

# convert the object into a dict
environment_deployment_properties_dict = environment_deployment_properties_instance.to_dict()
# create an instance of EnvironmentDeploymentProperties from a dict
environment_deployment_properties_from_dict = EnvironmentDeploymentProperties.from_dict(environment_deployment_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



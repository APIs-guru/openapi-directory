# EnvironmentDeploymentPropertiesFragment

Properties of an environment deployment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arm_template_id** | **str** | The Azure Resource Manager template&#39;s identifier. | [optional] 
**parameters** | [**List[ArmTemplateParameterPropertiesFragment]**](ArmTemplateParameterPropertiesFragment.md) | The parameters of the Azure Resource Manager template. | [optional] 

## Example

```python
from openapi_client.models.environment_deployment_properties_fragment import EnvironmentDeploymentPropertiesFragment

# TODO update the JSON string below
json = "{}"
# create an instance of EnvironmentDeploymentPropertiesFragment from a JSON string
environment_deployment_properties_fragment_instance = EnvironmentDeploymentPropertiesFragment.from_json(json)
# print the JSON string representation of the object
print(EnvironmentDeploymentPropertiesFragment.to_json())

# convert the object into a dict
environment_deployment_properties_fragment_dict = environment_deployment_properties_fragment_instance.to_dict()
# create an instance of EnvironmentDeploymentPropertiesFragment from a dict
environment_deployment_properties_fragment_from_dict = EnvironmentDeploymentPropertiesFragment.from_dict(environment_deployment_properties_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



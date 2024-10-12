# EnvironmentProperties

Properties of an environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arm_template_display_name** | **str** | The display name of the Azure Resource Manager template that produced the environment. | [optional] 
**created_by_user** | **str** | The creator of the environment. | [optional] [readonly] 
**deployment_properties** | [**EnvironmentDeploymentProperties**](EnvironmentDeploymentProperties.md) |  | [optional] 
**provisioning_state** | **str** | The provisioning status of the resource. | [optional] 
**resource_group_id** | **str** | The identifier of the resource group containing the environment&#39;s resources. | [optional] [readonly] 
**unique_identifier** | **str** | The unique immutable identifier of a resource (Guid). | [optional] 

## Example

```python
from openapi_client.models.environment_properties import EnvironmentProperties

# TODO update the JSON string below
json = "{}"
# create an instance of EnvironmentProperties from a JSON string
environment_properties_instance = EnvironmentProperties.from_json(json)
# print the JSON string representation of the object
print(EnvironmentProperties.to_json())

# convert the object into a dict
environment_properties_dict = environment_properties_instance.to_dict()
# create an instance of EnvironmentProperties from a dict
environment_properties_from_dict = EnvironmentProperties.from_dict(environment_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



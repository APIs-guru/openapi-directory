# DeploymentResourceProperties

Deployment resource properties payload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** | Indicates whether the Deployment is active | [optional] [readonly] 
**app_name** | **str** | App name of the deployment | [optional] [readonly] 
**created_time** | **datetime** | Date time when the resource is created | [optional] [readonly] 
**deployment_settings** | [**DeploymentSettings**](DeploymentSettings.md) |  | [optional] 
**instances** | [**List[DeploymentInstance]**](DeploymentInstance.md) | Collection of instances belong to the Deployment | [optional] [readonly] 
**provisioning_state** | **str** | Provisioning state of the Deployment | [optional] [readonly] 
**source** | [**UserSourceInfo**](UserSourceInfo.md) |  | [optional] 
**status** | **str** | Status of the Deployment | [optional] [readonly] 

## Example

```python
from openapi_client.models.deployment_resource_properties import DeploymentResourceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DeploymentResourceProperties from a JSON string
deployment_resource_properties_instance = DeploymentResourceProperties.from_json(json)
# print the JSON string representation of the object
print(DeploymentResourceProperties.to_json())

# convert the object into a dict
deployment_resource_properties_dict = deployment_resource_properties_instance.to_dict()
# create an instance of DeploymentResourceProperties from a dict
deployment_resource_properties_from_dict = DeploymentResourceProperties.from_dict(deployment_resource_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



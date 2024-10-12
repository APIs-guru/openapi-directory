# HostingEnvironmentDeploymentInfo

Information needed to create resources on an App Service Environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Location of the App Service Environment. | [optional] 
**name** | **str** | Name of the App Service Environment. | [optional] 

## Example

```python
from openapi_client.models.hosting_environment_deployment_info import HostingEnvironmentDeploymentInfo

# TODO update the JSON string below
json = "{}"
# create an instance of HostingEnvironmentDeploymentInfo from a JSON string
hosting_environment_deployment_info_instance = HostingEnvironmentDeploymentInfo.from_json(json)
# print the JSON string representation of the object
print(HostingEnvironmentDeploymentInfo.to_json())

# convert the object into a dict
hosting_environment_deployment_info_dict = hosting_environment_deployment_info_instance.to_dict()
# create an instance of HostingEnvironmentDeploymentInfo from a dict
hosting_environment_deployment_info_from_dict = HostingEnvironmentDeploymentInfo.from_dict(hosting_environment_deployment_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



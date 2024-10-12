# DeploymentLocations

List of available locations (regions or App Service Environments) for deployment of App Service resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hosting_environment_deployment_infos** | [**List[HostingEnvironmentDeploymentInfo]**](HostingEnvironmentDeploymentInfo.md) | Available App Service Environments with basic information. | [optional] 
**hosting_environments** | [**List[DeploymentLocationsHostingEnvironmentsInner]**](DeploymentLocationsHostingEnvironmentsInner.md) | Available App Service Environments with full descriptions of the environments. | [optional] 
**locations** | [**List[GeoRegion]**](GeoRegion.md) | Available regions. | [optional] 

## Example

```python
from openapi_client.models.deployment_locations import DeploymentLocations

# TODO update the JSON string below
json = "{}"
# create an instance of DeploymentLocations from a JSON string
deployment_locations_instance = DeploymentLocations.from_json(json)
# print the JSON string representation of the object
print(DeploymentLocations.to_json())

# convert the object into a dict
deployment_locations_dict = deployment_locations_instance.to_dict()
# create an instance of DeploymentLocations from a dict
deployment_locations_from_dict = DeploymentLocations.from_dict(deployment_locations_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



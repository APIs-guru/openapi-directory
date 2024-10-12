# IntegrationServiceEnvironmentNetworkDependency

The azure async operation resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | [**IntegrationServiceEnvironmentNetworkDependencyCategoryType**](IntegrationServiceEnvironmentNetworkDependencyCategoryType.md) |  | [optional] 
**display_name** | **str** | The display name. | [optional] 
**endpoints** | [**List[IntegrationServiceEnvironmentNetworkEndpoint]**](IntegrationServiceEnvironmentNetworkEndpoint.md) | The endpoints. | [optional] 

## Example

```python
from openapi_client.models.integration_service_environment_network_dependency import IntegrationServiceEnvironmentNetworkDependency

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationServiceEnvironmentNetworkDependency from a JSON string
integration_service_environment_network_dependency_instance = IntegrationServiceEnvironmentNetworkDependency.from_json(json)
# print the JSON string representation of the object
print(IntegrationServiceEnvironmentNetworkDependency.to_json())

# convert the object into a dict
integration_service_environment_network_dependency_dict = integration_service_environment_network_dependency_instance.to_dict()
# create an instance of IntegrationServiceEnvironmentNetworkDependency from a dict
integration_service_environment_network_dependency_from_dict = IntegrationServiceEnvironmentNetworkDependency.from_dict(integration_service_environment_network_dependency_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



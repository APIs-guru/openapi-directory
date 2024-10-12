# IntegrationServiceEnvironmentNetworkDependencyHealth

The integration service environment subnet network health.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**ExtendedErrorInfo**](ExtendedErrorInfo.md) |  | [optional] 
**state** | [**IntegrationServiceEnvironmentNetworkDependencyHealthState**](IntegrationServiceEnvironmentNetworkDependencyHealthState.md) |  | [optional] 

## Example

```python
from openapi_client.models.integration_service_environment_network_dependency_health import IntegrationServiceEnvironmentNetworkDependencyHealth

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationServiceEnvironmentNetworkDependencyHealth from a JSON string
integration_service_environment_network_dependency_health_instance = IntegrationServiceEnvironmentNetworkDependencyHealth.from_json(json)
# print the JSON string representation of the object
print(IntegrationServiceEnvironmentNetworkDependencyHealth.to_json())

# convert the object into a dict
integration_service_environment_network_dependency_health_dict = integration_service_environment_network_dependency_health_instance.to_dict()
# create an instance of IntegrationServiceEnvironmentNetworkDependencyHealth from a dict
integration_service_environment_network_dependency_health_from_dict = IntegrationServiceEnvironmentNetworkDependencyHealth.from_dict(integration_service_environment_network_dependency_health_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



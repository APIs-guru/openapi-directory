# IntegrationServiceEnvironmentSubnetNetworkHealth

The integration service environment subnet network health.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network_dependency_health_state** | [**IntegrationServiceEnvironmentNetworkEndPointAccessibilityState**](IntegrationServiceEnvironmentNetworkEndPointAccessibilityState.md) |  | 
**outbound_network_dependencies** | [**List[IntegrationServiceEnvironmentNetworkDependency]**](IntegrationServiceEnvironmentNetworkDependency.md) | The outbound network dependencies. | [optional] 
**outbound_network_health** | [**IntegrationServiceEnvironmentNetworkDependencyHealth**](IntegrationServiceEnvironmentNetworkDependencyHealth.md) |  | [optional] 

## Example

```python
from openapi_client.models.integration_service_environment_subnet_network_health import IntegrationServiceEnvironmentSubnetNetworkHealth

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationServiceEnvironmentSubnetNetworkHealth from a JSON string
integration_service_environment_subnet_network_health_instance = IntegrationServiceEnvironmentSubnetNetworkHealth.from_json(json)
# print the JSON string representation of the object
print(IntegrationServiceEnvironmentSubnetNetworkHealth.to_json())

# convert the object into a dict
integration_service_environment_subnet_network_health_dict = integration_service_environment_subnet_network_health_instance.to_dict()
# create an instance of IntegrationServiceEnvironmentSubnetNetworkHealth from a dict
integration_service_environment_subnet_network_health_from_dict = IntegrationServiceEnvironmentSubnetNetworkHealth.from_dict(integration_service_environment_subnet_network_health_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# IntegrationServiceEnvironmentNetworkEndpoint

The network endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessibility** | [**IntegrationServiceEnvironmentNetworkEndPointAccessibilityState**](IntegrationServiceEnvironmentNetworkEndPointAccessibilityState.md) |  | [optional] 
**domain_name** | **str** | The domain name. | [optional] 
**ports** | **List[str]** | The ports. | [optional] 

## Example

```python
from openapi_client.models.integration_service_environment_network_endpoint import IntegrationServiceEnvironmentNetworkEndpoint

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationServiceEnvironmentNetworkEndpoint from a JSON string
integration_service_environment_network_endpoint_instance = IntegrationServiceEnvironmentNetworkEndpoint.from_json(json)
# print the JSON string representation of the object
print(IntegrationServiceEnvironmentNetworkEndpoint.to_json())

# convert the object into a dict
integration_service_environment_network_endpoint_dict = integration_service_environment_network_endpoint_instance.to_dict()
# create an instance of IntegrationServiceEnvironmentNetworkEndpoint from a dict
integration_service_environment_network_endpoint_from_dict = IntegrationServiceEnvironmentNetworkEndpoint.from_dict(integration_service_environment_network_endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



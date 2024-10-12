# IntegrationServiceEnvironmentAccessEndpoint

The integration service environment access endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**IntegrationServiceEnvironmentAccessEndpointType**](IntegrationServiceEnvironmentAccessEndpointType.md) |  | [optional] 

## Example

```python
from openapi_client.models.integration_service_environment_access_endpoint import IntegrationServiceEnvironmentAccessEndpoint

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationServiceEnvironmentAccessEndpoint from a JSON string
integration_service_environment_access_endpoint_instance = IntegrationServiceEnvironmentAccessEndpoint.from_json(json)
# print the JSON string representation of the object
print(IntegrationServiceEnvironmentAccessEndpoint.to_json())

# convert the object into a dict
integration_service_environment_access_endpoint_dict = integration_service_environment_access_endpoint_instance.to_dict()
# create an instance of IntegrationServiceEnvironmentAccessEndpoint from a dict
integration_service_environment_access_endpoint_from_dict = IntegrationServiceEnvironmentAccessEndpoint.from_dict(integration_service_environment_access_endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



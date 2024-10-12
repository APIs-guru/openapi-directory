# OutboundEnvironmentEndpoint

Endpoints accessed for a common purpose that the App Service Environment requires outbound network access to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | The type of service accessed by the App Service Environment, e.g., Azure Storage, Azure SQL Database, and Azure Active Directory. | [optional] 
**endpoints** | [**List[EndpointDependency]**](EndpointDependency.md) | The endpoints that the App Service Environment reaches the service at. | [optional] 

## Example

```python
from openapi_client.models.outbound_environment_endpoint import OutboundEnvironmentEndpoint

# TODO update the JSON string below
json = "{}"
# create an instance of OutboundEnvironmentEndpoint from a JSON string
outbound_environment_endpoint_instance = OutboundEnvironmentEndpoint.from_json(json)
# print the JSON string representation of the object
print(OutboundEnvironmentEndpoint.to_json())

# convert the object into a dict
outbound_environment_endpoint_dict = outbound_environment_endpoint_instance.to_dict()
# create an instance of OutboundEnvironmentEndpoint from a dict
outbound_environment_endpoint_from_dict = OutboundEnvironmentEndpoint.from_dict(outbound_environment_endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



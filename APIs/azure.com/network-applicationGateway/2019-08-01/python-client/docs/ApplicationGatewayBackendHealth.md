# ApplicationGatewayBackendHealth

Response for ApplicationGatewayBackendHealth API service call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backend_address_pools** | [**List[ApplicationGatewayBackendHealthPool]**](ApplicationGatewayBackendHealthPool.md) | A list of ApplicationGatewayBackendHealthPool resources. | [optional] 

## Example

```python
from openapi_client.models.application_gateway_backend_health import ApplicationGatewayBackendHealth

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendHealth from a JSON string
application_gateway_backend_health_instance = ApplicationGatewayBackendHealth.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendHealth.to_json())

# convert the object into a dict
application_gateway_backend_health_dict = application_gateway_backend_health_instance.to_dict()
# create an instance of ApplicationGatewayBackendHealth from a dict
application_gateway_backend_health_from_dict = ApplicationGatewayBackendHealth.from_dict(application_gateway_backend_health_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



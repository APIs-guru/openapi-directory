# ApplicationGatewayBackendHealthPool

Application gateway BackendHealth pool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backend_address_pool** | **object** |  | [optional] 
**backend_http_settings_collection** | [**List[ApplicationGatewayBackendHealthHttpSettings]**](ApplicationGatewayBackendHealthHttpSettings.md) | List of ApplicationGatewayBackendHealthHttpSettings resources. | [optional] 

## Example

```python
from openapi_client.models.application_gateway_backend_health_pool import ApplicationGatewayBackendHealthPool

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendHealthPool from a JSON string
application_gateway_backend_health_pool_instance = ApplicationGatewayBackendHealthPool.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendHealthPool.to_json())

# convert the object into a dict
application_gateway_backend_health_pool_dict = application_gateway_backend_health_pool_instance.to_dict()
# create an instance of ApplicationGatewayBackendHealthPool from a dict
application_gateway_backend_health_pool_from_dict = ApplicationGatewayBackendHealthPool.from_dict(application_gateway_backend_health_pool_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ApplicationGatewayBackendHealthHttpSettings

Application gateway BackendHealthHttp settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backend_http_settings** | **object** |  | [optional] 
**servers** | [**List[ApplicationGatewayBackendHealthServer]**](ApplicationGatewayBackendHealthServer.md) | List of ApplicationGatewayBackendHealthServer resources. | [optional] 

## Example

```python
from openapi_client.models.application_gateway_backend_health_http_settings import ApplicationGatewayBackendHealthHttpSettings

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendHealthHttpSettings from a JSON string
application_gateway_backend_health_http_settings_instance = ApplicationGatewayBackendHealthHttpSettings.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendHealthHttpSettings.to_json())

# convert the object into a dict
application_gateway_backend_health_http_settings_dict = application_gateway_backend_health_http_settings_instance.to_dict()
# create an instance of ApplicationGatewayBackendHealthHttpSettings from a dict
application_gateway_backend_health_http_settings_from_dict = ApplicationGatewayBackendHealthHttpSettings.from_dict(application_gateway_backend_health_http_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



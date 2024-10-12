# ApplicationGatewayBackendHttpSettings

Backend address pool settings of application gateway

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated | [optional] 
**name** | **str** | Name of the resource that is unique within a resource group. This name can be used to access the resource | [optional] 
**properties** | [**ApplicationGatewayBackendHttpSettingsPropertiesFormat**](ApplicationGatewayBackendHttpSettingsPropertiesFormat.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] 

## Example

```python
from openapi_client.models.application_gateway_backend_http_settings import ApplicationGatewayBackendHttpSettings

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendHttpSettings from a JSON string
application_gateway_backend_http_settings_instance = ApplicationGatewayBackendHttpSettings.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendHttpSettings.to_json())

# convert the object into a dict
application_gateway_backend_http_settings_dict = application_gateway_backend_http_settings_instance.to_dict()
# create an instance of ApplicationGatewayBackendHttpSettings from a dict
application_gateway_backend_http_settings_from_dict = ApplicationGatewayBackendHttpSettings.from_dict(application_gateway_backend_http_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ApplicationGatewayBackendHttpSettingsPropertiesFormat

Properties of Backend address pool settings of an application gateway.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authentication_certificates** | [**List[ApplicationGatewayHttpListenerPropertiesFormatFrontendPort]**](ApplicationGatewayHttpListenerPropertiesFormatFrontendPort.md) | Array of references to application gateway authentication certificates. | [optional] 
**cookie_based_affinity** | **str** | Cookie based affinity. Possible values are: &#39;Enabled&#39; and &#39;Disabled&#39;. | [optional] 
**port** | **int** | Port | [optional] 
**probe** | [**ApplicationGatewayHttpListenerPropertiesFormatFrontendPort**](ApplicationGatewayHttpListenerPropertiesFormatFrontendPort.md) |  | [optional] 
**protocol** | **str** | Protocol. Possible values are: &#39;Http&#39; and &#39;Https&#39;. | [optional] 
**provisioning_state** | **str** | Provisioning state of the backend http settings resource. Possible values are: &#39;Updating&#39;, &#39;Deleting&#39;, and &#39;Failed&#39;. | [optional] 
**request_timeout** | **int** | Request timeout in seconds. Application Gateway will fail the request if response is not received within RequestTimeout. Acceptable values are from 1 second to 86400 seconds. | [optional] 

## Example

```python
from openapi_client.models.application_gateway_backend_http_settings_properties_format import ApplicationGatewayBackendHttpSettingsPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendHttpSettingsPropertiesFormat from a JSON string
application_gateway_backend_http_settings_properties_format_instance = ApplicationGatewayBackendHttpSettingsPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendHttpSettingsPropertiesFormat.to_json())

# convert the object into a dict
application_gateway_backend_http_settings_properties_format_dict = application_gateway_backend_http_settings_properties_format_instance.to_dict()
# create an instance of ApplicationGatewayBackendHttpSettingsPropertiesFormat from a dict
application_gateway_backend_http_settings_properties_format_from_dict = ApplicationGatewayBackendHttpSettingsPropertiesFormat.from_dict(application_gateway_backend_http_settings_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



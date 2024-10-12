# ApplicationGatewayBackendHttpSettingsPropertiesFormat

Properties of Backend address pool settings of application gateway

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authentication_certificates** | [**List[SubResource]**](SubResource.md) | Array of references to Application Gateway Authentication Certificates | [optional] 
**cookie_based_affinity** | **str** | Cookie affinity | [optional] 
**port** | **int** | Port | [optional] 
**probe** | [**SubResource**](SubResource.md) |  | [optional] 
**protocol** | **str** | Protocol | [optional] 
**provisioning_state** | **str** | Provisioning state of the backend http settings resource Updating/Deleting/Failed | [optional] 
**request_timeout** | **int** | Request timeout | [optional] 

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



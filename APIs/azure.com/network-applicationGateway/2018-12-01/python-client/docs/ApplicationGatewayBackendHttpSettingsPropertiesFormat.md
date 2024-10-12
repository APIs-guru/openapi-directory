# ApplicationGatewayBackendHttpSettingsPropertiesFormat

Properties of Backend address pool settings of an application gateway.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affinity_cookie_name** | **str** | Cookie name to use for the affinity cookie. | [optional] 
**authentication_certificates** | [**List[Model0]**](Model0.md) | Array of references to application gateway authentication certificates. | [optional] 
**connection_draining** | [**ApplicationGatewayConnectionDraining**](ApplicationGatewayConnectionDraining.md) |  | [optional] 
**cookie_based_affinity** | **str** | Cookie based affinity. | [optional] 
**host_name** | **str** | Host header to be sent to the backend servers. | [optional] 
**path** | **str** | Path which should be used as a prefix for all HTTP requests. Null means no path will be prefixed. Default value is null. | [optional] 
**pick_host_name_from_backend_address** | **bool** | Whether to pick host header should be picked from the host name of the backend server. Default value is false. | [optional] 
**port** | **int** | The destination port on the backend. | [optional] 
**probe** | [**Model0**](Model0.md) |  | [optional] 
**probe_enabled** | **bool** | Whether the probe is enabled. Default value is false. | [optional] 
**protocol** | **str** | The protocol used to communicate with the backend. Possible values are &#39;Http&#39; and &#39;Https&#39;. | [optional] 
**provisioning_state** | **str** | Provisioning state of the backend http settings resource. Possible values are: &#39;Updating&#39;, &#39;Deleting&#39;, and &#39;Failed&#39;. | [optional] 
**request_timeout** | **int** | Request timeout in seconds. Application Gateway will fail the request if response is not received within RequestTimeout. Acceptable values are from 1 second to 86400 seconds. | [optional] 
**trusted_root_certificates** | [**List[Model0]**](Model0.md) | Array of references to application gateway trusted root certificates. | [optional] 

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



# ApplicationGatewayBackendHealthServerIpConfigurationPropertiesVirtualNetworkTapsInner

Virtual Network Tap resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Gets a unique read-only string that changes whenever the resource is updated. | [optional] 
**properties** | [**ApplicationGatewayBackendHealthServerIpConfigurationPropertiesVirtualNetworkTapsInnerProperties**](ApplicationGatewayBackendHealthServerIpConfigurationPropertiesVirtualNetworkTapsInnerProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.application_gateway_backend_health_server_ip_configuration_properties_virtual_network_taps_inner import ApplicationGatewayBackendHealthServerIpConfigurationPropertiesVirtualNetworkTapsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesVirtualNetworkTapsInner from a JSON string
application_gateway_backend_health_server_ip_configuration_properties_virtual_network_taps_inner_instance = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesVirtualNetworkTapsInner.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendHealthServerIpConfigurationPropertiesVirtualNetworkTapsInner.to_json())

# convert the object into a dict
application_gateway_backend_health_server_ip_configuration_properties_virtual_network_taps_inner_dict = application_gateway_backend_health_server_ip_configuration_properties_virtual_network_taps_inner_instance.to_dict()
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesVirtualNetworkTapsInner from a dict
application_gateway_backend_health_server_ip_configuration_properties_virtual_network_taps_inner_from_dict = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesVirtualNetworkTapsInner.from_dict(application_gateway_backend_health_server_ip_configuration_properties_virtual_network_taps_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



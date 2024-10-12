# ApplicationGatewayBackendAddressPoolPropertiesFormat

Properties of Backend Address Pool of an application gateway.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backend_addresses** | [**List[ApplicationGatewayBackendAddress]**](ApplicationGatewayBackendAddress.md) | Backend addresses | [optional] 
**backend_ip_configurations** | [**List[ApplicationGatewayBackendHealthServerIpConfiguration]**](ApplicationGatewayBackendHealthServerIpConfiguration.md) | Collection of references to IPs defined in network interfaces. | [optional] 
**provisioning_state** | **str** | Provisioning state of the backend address pool resource. Possible values are: &#39;Updating&#39;, &#39;Deleting&#39;, and &#39;Failed&#39;. | [optional] 

## Example

```python
from openapi_client.models.application_gateway_backend_address_pool_properties_format import ApplicationGatewayBackendAddressPoolPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendAddressPoolPropertiesFormat from a JSON string
application_gateway_backend_address_pool_properties_format_instance = ApplicationGatewayBackendAddressPoolPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendAddressPoolPropertiesFormat.to_json())

# convert the object into a dict
application_gateway_backend_address_pool_properties_format_dict = application_gateway_backend_address_pool_properties_format_instance.to_dict()
# create an instance of ApplicationGatewayBackendAddressPoolPropertiesFormat from a dict
application_gateway_backend_address_pool_properties_format_from_dict = ApplicationGatewayBackendAddressPoolPropertiesFormat.from_dict(application_gateway_backend_address_pool_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



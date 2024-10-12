# ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesIpConfigurationsInner

IPConfiguration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] 
**name** | **str** | The name of the resource that is unique within a resource group. This name can be used to access the resource. | [optional] 
**properties** | [**ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesIpConfigurationsInnerProperties**](ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesIpConfigurationsInnerProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_subnet_properties_ip_configurations_inner import ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesIpConfigurationsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesIpConfigurationsInner from a JSON string
application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_subnet_properties_ip_configurations_inner_instance = ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesIpConfigurationsInner.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesIpConfigurationsInner.to_json())

# convert the object into a dict
application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_subnet_properties_ip_configurations_inner_dict = application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_subnet_properties_ip_configurations_inner_instance.to_dict()
# create an instance of ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesIpConfigurationsInner from a dict
application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_subnet_properties_ip_configurations_inner_from_dict = ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesIpConfigurationsInner.from_dict(application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_subnet_properties_ip_configurations_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



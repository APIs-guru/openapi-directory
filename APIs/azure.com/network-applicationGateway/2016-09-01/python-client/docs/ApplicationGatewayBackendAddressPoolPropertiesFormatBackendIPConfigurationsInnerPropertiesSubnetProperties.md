# ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_prefix** | **str** | The address prefix for the subnet. | [optional] 
**ip_configurations** | [**List[ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesIpConfigurationsInner]**](ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesIpConfigurationsInner.md) | Gets an array of references to the network interface IP configurations using subnet. | [optional] [readonly] 
**network_security_group** | [**ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesNetworkSecurityGroup**](ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesNetworkSecurityGroup.md) |  | [optional] 
**provisioning_state** | **str** | The provisioning state of the resource. | [optional] 
**resource_navigation_links** | [**List[ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesResourceNavigationLinksInner]**](ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesResourceNavigationLinksInner.md) | Gets an array of references to the external resources using subnet. | [optional] 
**route_table** | [**ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesRouteTable**](ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesRouteTable.md) |  | [optional] 

## Example

```python
from openapi_client.models.application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_subnet_properties import ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetProperties from a JSON string
application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_subnet_properties_instance = ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetProperties.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetProperties.to_json())

# convert the object into a dict
application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_subnet_properties_dict = application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_subnet_properties_instance.to_dict()
# create an instance of ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetProperties from a dict
application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_subnet_properties_from_dict = ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetProperties.from_dict(application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_subnet_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



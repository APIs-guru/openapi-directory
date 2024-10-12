# ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesRouteTablePropertiesRoutesInnerProperties

Route resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_prefix** | **str** | The destination CIDR to which the route applies. | [optional] 
**next_hop_ip_address** | **str** | The IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance. | [optional] 
**next_hop_type** | **str** | The type of Azure hop the packet should be sent to. Possible values are: &#39;VirtualNetworkGateway&#39;, &#39;VnetLocal&#39;, &#39;Internet&#39;, &#39;VirtualAppliance&#39;, and &#39;None&#39; | 
**provisioning_state** | **str** | The provisioning state of the resource. Possible values are: &#39;Updating&#39;, &#39;Deleting&#39;, and &#39;Failed&#39;. | [optional] 

## Example

```python
from openapi_client.models.application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_subnet_properties_route_table_properties_routes_inner_properties import ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesRouteTablePropertiesRoutesInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesRouteTablePropertiesRoutesInnerProperties from a JSON string
application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_subnet_properties_route_table_properties_routes_inner_properties_instance = ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesRouteTablePropertiesRoutesInnerProperties.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesRouteTablePropertiesRoutesInnerProperties.to_json())

# convert the object into a dict
application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_subnet_properties_route_table_properties_routes_inner_properties_dict = application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_subnet_properties_route_table_properties_routes_inner_properties_instance.to_dict()
# create an instance of ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesRouteTablePropertiesRoutesInnerProperties from a dict
application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_subnet_properties_route_table_properties_routes_inner_properties_from_dict = ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesRouteTablePropertiesRoutesInnerProperties.from_dict(application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_subnet_properties_route_table_properties_routes_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



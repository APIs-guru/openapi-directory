# ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesRouteTable

Route table resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Gets a unique read-only string that changes whenever the resource is updated. | [optional] 
**properties** | [**ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesRouteTableProperties**](ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesRouteTableProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_subnet_properties_route_table import ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesRouteTable

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesRouteTable from a JSON string
application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_subnet_properties_route_table_instance = ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesRouteTable.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesRouteTable.to_json())

# convert the object into a dict
application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_subnet_properties_route_table_dict = application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_subnet_properties_route_table_instance.to_dict()
# create an instance of ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesRouteTable from a dict
application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_subnet_properties_route_table_from_dict = ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesRouteTable.from_dict(application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_subnet_properties_route_table_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



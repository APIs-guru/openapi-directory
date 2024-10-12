# ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesRouteTable

Route table resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Gets a unique read-only string that changes whenever the resource is updated. | [optional] 
**properties** | [**ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesRouteTableProperties**](ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesRouteTableProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_route_table import ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesRouteTable

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesRouteTable from a JSON string
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_route_table_instance = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesRouteTable.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesRouteTable.to_json())

# convert the object into a dict
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_route_table_dict = application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_route_table_instance.to_dict()
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesRouteTable from a dict
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_route_table_from_dict = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesRouteTable.from_dict(application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_route_table_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesRouteTableProperties

Route Table resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_state** | **str** | The provisioning state of the resource. Possible values are: &#39;Updating&#39;, &#39;Deleting&#39;, and &#39;Failed&#39;. | [optional] 
**routes** | [**List[ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesRouteTablePropertiesRoutesInner]**](ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesRouteTablePropertiesRoutesInner.md) | Collection of routes contained within a route table. | [optional] 
**subnets** | [**List[Subnet]**](Subnet.md) | A collection of references to subnets. | [optional] [readonly] 

## Example

```python
from openapi_client.models.application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_route_table_properties import ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesRouteTableProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesRouteTableProperties from a JSON string
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_route_table_properties_instance = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesRouteTableProperties.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesRouteTableProperties.to_json())

# convert the object into a dict
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_route_table_properties_dict = application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_route_table_properties_instance.to_dict()
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesRouteTableProperties from a dict
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_route_table_properties_from_dict = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesRouteTableProperties.from_dict(application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_route_table_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



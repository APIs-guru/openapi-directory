# ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetProperties

Properties of the subnet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_prefix** | **str** | The address prefix for the subnet. | [optional] 
**ip_configurations** | [**List[ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesIpConfigurationsInner]**](ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesIpConfigurationsInner.md) | Gets an array of references to the network interface IP configurations using subnet. | [optional] [readonly] 
**network_security_group** | [**ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesNetworkSecurityGroup**](ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesNetworkSecurityGroup.md) |  | [optional] 
**provisioning_state** | **str** | The provisioning state of the resource. | [optional] 
**resource_navigation_links** | [**List[ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesResourceNavigationLinksInner]**](ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesResourceNavigationLinksInner.md) | Gets an array of references to the external resources using subnet. | [optional] 
**route_table** | [**ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesRouteTable**](ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesRouteTable.md) |  | [optional] 
**service_endpoint_policies** | [**List[ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesServiceEndpointPoliciesInner]**](ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesServiceEndpointPoliciesInner.md) | An array of service endpoint policies. | [optional] 
**service_endpoints** | [**List[ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesServiceEndpointsInner]**](ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesServiceEndpointsInner.md) | An array of service endpoints. | [optional] 

## Example

```python
from openapi_client.models.application_gateway_backend_health_server_ip_configuration_properties_subnet_properties import ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetProperties from a JSON string
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_instance = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetProperties.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetProperties.to_json())

# convert the object into a dict
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_dict = application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_instance.to_dict()
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetProperties from a dict
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_from_dict = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetProperties.from_dict(application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



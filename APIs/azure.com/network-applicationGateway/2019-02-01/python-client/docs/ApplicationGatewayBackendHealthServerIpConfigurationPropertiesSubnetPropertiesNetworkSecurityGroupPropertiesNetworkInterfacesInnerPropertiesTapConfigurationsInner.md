# ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesNetworkSecurityGroupPropertiesNetworkInterfacesInnerPropertiesTapConfigurationsInner

Tap configuration in a Network Interface

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] 
**name** | **str** | The name of the resource that is unique within a resource group. This name can be used to access the resource. | [optional] 
**properties** | [**ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesNetworkSecurityGroupPropertiesNetworkInterfacesInnerPropertiesTapConfigurationsInnerProperties**](ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesNetworkSecurityGroupPropertiesNetworkInterfacesInnerPropertiesTapConfigurationsInnerProperties.md) |  | [optional] 
**type** | **str** | Sub Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_network_security_group_properties_network_interfaces_inner_properties_tap_configurations_inner import ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesNetworkSecurityGroupPropertiesNetworkInterfacesInnerPropertiesTapConfigurationsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesNetworkSecurityGroupPropertiesNetworkInterfacesInnerPropertiesTapConfigurationsInner from a JSON string
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_network_security_group_properties_network_interfaces_inner_properties_tap_configurations_inner_instance = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesNetworkSecurityGroupPropertiesNetworkInterfacesInnerPropertiesTapConfigurationsInner.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesNetworkSecurityGroupPropertiesNetworkInterfacesInnerPropertiesTapConfigurationsInner.to_json())

# convert the object into a dict
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_network_security_group_properties_network_interfaces_inner_properties_tap_configurations_inner_dict = application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_network_security_group_properties_network_interfaces_inner_properties_tap_configurations_inner_instance.to_dict()
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesNetworkSecurityGroupPropertiesNetworkInterfacesInnerPropertiesTapConfigurationsInner from a dict
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_network_security_group_properties_network_interfaces_inner_properties_tap_configurations_inner_from_dict = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesNetworkSecurityGroupPropertiesNetworkInterfacesInnerPropertiesTapConfigurationsInner.from_dict(application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_network_security_group_properties_network_interfaces_inner_properties_tap_configurations_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



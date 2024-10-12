# ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesNetworkSecurityGroupProperties

Network Security Group resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_security_rules** | [**List[Items]**](Items.md) | The default security rules of network security group. | [optional] 
**network_interfaces** | [**List[ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesNetworkSecurityGroupPropertiesNetworkInterfacesInner]**](ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesNetworkSecurityGroupPropertiesNetworkInterfacesInner.md) | A collection of references to network interfaces. | [optional] [readonly] 
**provisioning_state** | [**ProvisioningState**](ProvisioningState.md) |  | [optional] 
**resource_guid** | **str** | The resource GUID property of the network security group resource. | [optional] 
**security_rules** | [**List[ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesNetworkSecurityGroupPropertiesSecurityRulesInner]**](ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesNetworkSecurityGroupPropertiesSecurityRulesInner.md) | A collection of security rules of the network security group. | [optional] 
**subnets** | [**List[Subnet]**](Subnet.md) | A collection of references to subnets. | [optional] [readonly] 

## Example

```python
from openapi_client.models.application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_network_security_group_properties import ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesNetworkSecurityGroupProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesNetworkSecurityGroupProperties from a JSON string
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_network_security_group_properties_instance = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesNetworkSecurityGroupProperties.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesNetworkSecurityGroupProperties.to_json())

# convert the object into a dict
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_network_security_group_properties_dict = application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_network_security_group_properties_instance.to_dict()
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesNetworkSecurityGroupProperties from a dict
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_network_security_group_properties_from_dict = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesNetworkSecurityGroupProperties.from_dict(application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_network_security_group_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



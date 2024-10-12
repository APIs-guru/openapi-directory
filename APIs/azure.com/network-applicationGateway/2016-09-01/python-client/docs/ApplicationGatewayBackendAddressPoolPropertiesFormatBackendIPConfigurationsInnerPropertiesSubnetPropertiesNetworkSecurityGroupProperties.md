# ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesNetworkSecurityGroupProperties

Network Security Group resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_security_rules** | [**List[Items]**](Items.md) | The default security rules of network security group. | [optional] 
**network_interfaces** | [**List[ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesNetworkSecurityGroupPropertiesNetworkInterfacesInner]**](ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesNetworkSecurityGroupPropertiesNetworkInterfacesInner.md) | A collection of references to network interfaces. | [optional] [readonly] 
**provisioning_state** | **str** | The provisioning state of the public IP resource. Possible values are: &#39;Updating&#39;, &#39;Deleting&#39;, and &#39;Failed&#39;. | [optional] 
**resource_guid** | **str** | The resource GUID property of the network security group resource. | [optional] 
**security_rules** | [**List[ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesNetworkSecurityGroupPropertiesSecurityRulesInner]**](ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesNetworkSecurityGroupPropertiesSecurityRulesInner.md) | A collection of security rules of the network security group. | [optional] 
**subnets** | [**List[Subnet]**](Subnet.md) | A collection of references to subnets. | [optional] [readonly] 

## Example

```python
from openapi_client.models.application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_subnet_properties_network_security_group_properties import ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesNetworkSecurityGroupProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesNetworkSecurityGroupProperties from a JSON string
application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_subnet_properties_network_security_group_properties_instance = ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesNetworkSecurityGroupProperties.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesNetworkSecurityGroupProperties.to_json())

# convert the object into a dict
application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_subnet_properties_network_security_group_properties_dict = application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_subnet_properties_network_security_group_properties_instance.to_dict()
# create an instance of ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesNetworkSecurityGroupProperties from a dict
application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_subnet_properties_network_security_group_properties_from_dict = ApplicationGatewayBackendAddressPoolPropertiesFormatBackendIPConfigurationsInnerPropertiesSubnetPropertiesNetworkSecurityGroupProperties.from_dict(application_gateway_backend_address_pool_properties_format_backend_ip_configurations_inner_properties_subnet_properties_network_security_group_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



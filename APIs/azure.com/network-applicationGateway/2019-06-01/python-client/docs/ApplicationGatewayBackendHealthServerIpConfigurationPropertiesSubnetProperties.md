# ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetProperties

Properties of the subnet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_prefix** | **str** | The address prefix for the subnet. | [optional] 
**address_prefixes** | **List[str]** | List of address prefixes for the subnet. | [optional] 
**delegations** | [**List[ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesDelegationsInner]**](ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesDelegationsInner.md) | Gets an array of references to the delegations on the subnet. | [optional] 
**ip_configuration_profiles** | [**List[ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesIpConfigurationProfilesInner]**](ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesIpConfigurationProfilesInner.md) | Array of IP configuration profiles which reference this subnet. | [optional] [readonly] 
**ip_configurations** | [**List[ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesIpConfigurationsInner]**](ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesIpConfigurationsInner.md) | Gets an array of references to the network interface IP configurations using subnet. | [optional] [readonly] 
**nat_gateway** | [**Model0**](Model0.md) |  | [optional] 
**network_security_group** | [**ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesNetworkSecurityGroup**](ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesNetworkSecurityGroup.md) |  | [optional] 
**private_endpoint_network_policies** | **str** | Enable or Disable apply network policies on private end point in the subnet. | [optional] 
**private_endpoints** | [**List[ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesPrivateEndpointsInner]**](ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesPrivateEndpointsInner.md) | An array of references to private endpoints. | [optional] [readonly] 
**private_link_service_network_policies** | **str** | Enable or Disable apply network policies on private link service in the subnet. | [optional] 
**provisioning_state** | **str** | The provisioning state of the resource. | [optional] 
**purpose** | **str** | A read-only string identifying the intention of use for this subnet based on delegations and other user-defined properties. | [optional] [readonly] 
**resource_navigation_links** | [**List[ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesResourceNavigationLinksInner]**](ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesResourceNavigationLinksInner.md) | Gets an array of references to the external resources using subnet. | [optional] 
**route_table** | [**ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesRouteTable**](ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesRouteTable.md) |  | [optional] 
**service_association_links** | [**List[ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesServiceAssociationLinksInner]**](ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesServiceAssociationLinksInner.md) | Gets an array of references to services injecting into this subnet. | [optional] 
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



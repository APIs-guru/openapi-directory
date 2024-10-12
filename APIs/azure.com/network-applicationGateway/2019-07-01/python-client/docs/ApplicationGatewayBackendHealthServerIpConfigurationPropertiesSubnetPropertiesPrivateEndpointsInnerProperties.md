# ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesPrivateEndpointsInnerProperties

Properties of the private endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**manual_private_link_service_connections** | [**List[Items]**](Items.md) | A grouping of information about the connection to the remote resource. Used when the network admin does not have access to approve connections to the remote resource. | [optional] 
**network_interfaces** | [**List[Items]**](Items.md) | An array of references to the network interfaces created for this private endpoint. | [optional] [readonly] 
**private_link_service_connections** | [**List[ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesPrivateEndpointsInnerPropertiesPrivateLinkServiceConnectionsInner]**](ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesPrivateEndpointsInnerPropertiesPrivateLinkServiceConnectionsInner.md) | A grouping of information about the connection to the remote resource. | [optional] 
**provisioning_state** | [**ProvisioningState**](ProvisioningState.md) |  | [optional] 
**subnet** | [**Subnet**](Subnet.md) |  | [optional] 

## Example

```python
from openapi_client.models.application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_private_endpoints_inner_properties import ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesPrivateEndpointsInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesPrivateEndpointsInnerProperties from a JSON string
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_private_endpoints_inner_properties_instance = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesPrivateEndpointsInnerProperties.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesPrivateEndpointsInnerProperties.to_json())

# convert the object into a dict
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_private_endpoints_inner_properties_dict = application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_private_endpoints_inner_properties_instance.to_dict()
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesPrivateEndpointsInnerProperties from a dict
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_private_endpoints_inner_properties_from_dict = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesPrivateEndpointsInnerProperties.from_dict(application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_private_endpoints_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



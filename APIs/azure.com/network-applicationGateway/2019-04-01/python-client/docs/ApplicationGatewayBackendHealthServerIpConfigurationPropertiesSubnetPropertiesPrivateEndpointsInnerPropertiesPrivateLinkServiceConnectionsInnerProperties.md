# ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesPrivateEndpointsInnerPropertiesPrivateLinkServiceConnectionsInnerProperties

Properties of the PrivateLinkServiceConnection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group_ids** | **List[str]** | The ID(s) of the group(s) obtained from the remote resource that this private endpoint should connect to. | [optional] 
**private_link_service_connection_state** | [**ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesPrivateEndpointsInnerPropertiesPrivateLinkServiceConnectionsInnerPropertiesPrivateLinkServiceConnectionState**](ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesPrivateEndpointsInnerPropertiesPrivateLinkServiceConnectionsInnerPropertiesPrivateLinkServiceConnectionState.md) |  | [optional] 
**private_link_service_id** | **str** | The resource id of private link service. | [optional] 
**provisioning_state** | [**ProvisioningState**](ProvisioningState.md) |  | [optional] 
**request_message** | **str** | A message passed to the owner of the remote resource with this connection request. Restricted to 140 chars. | [optional] 

## Example

```python
from openapi_client.models.application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_private_endpoints_inner_properties_private_link_service_connections_inner_properties import ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesPrivateEndpointsInnerPropertiesPrivateLinkServiceConnectionsInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesPrivateEndpointsInnerPropertiesPrivateLinkServiceConnectionsInnerProperties from a JSON string
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_private_endpoints_inner_properties_private_link_service_connections_inner_properties_instance = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesPrivateEndpointsInnerPropertiesPrivateLinkServiceConnectionsInnerProperties.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesPrivateEndpointsInnerPropertiesPrivateLinkServiceConnectionsInnerProperties.to_json())

# convert the object into a dict
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_private_endpoints_inner_properties_private_link_service_connections_inner_properties_dict = application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_private_endpoints_inner_properties_private_link_service_connections_inner_properties_instance.to_dict()
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesPrivateEndpointsInnerPropertiesPrivateLinkServiceConnectionsInnerProperties from a dict
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_private_endpoints_inner_properties_private_link_service_connections_inner_properties_from_dict = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesPrivateEndpointsInnerPropertiesPrivateLinkServiceConnectionsInnerProperties.from_dict(application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_private_endpoints_inner_properties_private_link_service_connections_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



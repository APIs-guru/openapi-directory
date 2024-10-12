# ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesInterfaceEndpointsInnerProperties

Properties of the interface endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint_service** | [**ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesInterfaceEndpointsInnerPropertiesEndpointService**](ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesInterfaceEndpointsInnerPropertiesEndpointService.md) |  | [optional] 
**fqdn** | **str** | A first-party service&#39;s FQDN that is mapped to the private IP allocated via this interface endpoint. | [optional] 
**network_interfaces** | [**List[Items]**](Items.md) | Gets an array of references to the network interfaces created for this interface endpoint. | [optional] [readonly] 
**owner** | **str** | A read-only property that identifies who created this interface endpoint. | [optional] [readonly] 
**provisioning_state** | **str** | The provisioning state of the interface endpoint. Possible values are: &#39;Updating&#39;, &#39;Deleting&#39;, and &#39;Failed&#39;. | [optional] [readonly] 
**subnet** | [**Subnet**](Subnet.md) |  | [optional] 

## Example

```python
from openapi_client.models.application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_interface_endpoints_inner_properties import ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesInterfaceEndpointsInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesInterfaceEndpointsInnerProperties from a JSON string
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_interface_endpoints_inner_properties_instance = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesInterfaceEndpointsInnerProperties.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesInterfaceEndpointsInnerProperties.to_json())

# convert the object into a dict
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_interface_endpoints_inner_properties_dict = application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_interface_endpoints_inner_properties_instance.to_dict()
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesInterfaceEndpointsInnerProperties from a dict
application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_interface_endpoints_inner_properties_from_dict = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesSubnetPropertiesInterfaceEndpointsInnerProperties.from_dict(application_gateway_backend_health_server_ip_configuration_properties_subnet_properties_interface_endpoints_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



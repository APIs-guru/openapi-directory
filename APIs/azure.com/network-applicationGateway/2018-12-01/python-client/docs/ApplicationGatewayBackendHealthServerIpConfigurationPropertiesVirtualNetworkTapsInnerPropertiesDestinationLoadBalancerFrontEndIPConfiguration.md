# ApplicationGatewayBackendHealthServerIpConfigurationPropertiesVirtualNetworkTapsInnerPropertiesDestinationLoadBalancerFrontEndIPConfiguration

Frontend IP address of the load balancer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] 
**name** | **str** | The name of the resource that is unique within a resource group. This name can be used to access the resource. | [optional] 
**properties** | [**ApplicationGatewayBackendHealthServerIpConfigurationPropertiesVirtualNetworkTapsInnerPropertiesDestinationLoadBalancerFrontEndIPConfigurationProperties**](ApplicationGatewayBackendHealthServerIpConfigurationPropertiesVirtualNetworkTapsInnerPropertiesDestinationLoadBalancerFrontEndIPConfigurationProperties.md) |  | [optional] 
**zones** | **List[str]** | A list of availability zones denoting the IP allocated for the resource needs to come from. | [optional] 

## Example

```python
from openapi_client.models.application_gateway_backend_health_server_ip_configuration_properties_virtual_network_taps_inner_properties_destination_load_balancer_front_end_ip_configuration import ApplicationGatewayBackendHealthServerIpConfigurationPropertiesVirtualNetworkTapsInnerPropertiesDestinationLoadBalancerFrontEndIPConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesVirtualNetworkTapsInnerPropertiesDestinationLoadBalancerFrontEndIPConfiguration from a JSON string
application_gateway_backend_health_server_ip_configuration_properties_virtual_network_taps_inner_properties_destination_load_balancer_front_end_ip_configuration_instance = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesVirtualNetworkTapsInnerPropertiesDestinationLoadBalancerFrontEndIPConfiguration.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendHealthServerIpConfigurationPropertiesVirtualNetworkTapsInnerPropertiesDestinationLoadBalancerFrontEndIPConfiguration.to_json())

# convert the object into a dict
application_gateway_backend_health_server_ip_configuration_properties_virtual_network_taps_inner_properties_destination_load_balancer_front_end_ip_configuration_dict = application_gateway_backend_health_server_ip_configuration_properties_virtual_network_taps_inner_properties_destination_load_balancer_front_end_ip_configuration_instance.to_dict()
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesVirtualNetworkTapsInnerPropertiesDestinationLoadBalancerFrontEndIPConfiguration from a dict
application_gateway_backend_health_server_ip_configuration_properties_virtual_network_taps_inner_properties_destination_load_balancer_front_end_ip_configuration_from_dict = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesVirtualNetworkTapsInnerPropertiesDestinationLoadBalancerFrontEndIPConfiguration.from_dict(application_gateway_backend_health_server_ip_configuration_properties_virtual_network_taps_inner_properties_destination_load_balancer_front_end_ip_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



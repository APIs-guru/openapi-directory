# ApplicationGatewayBackendHealthServerIpConfigurationPropertiesLoadBalancerInboundNatRulesInnerProperties

Properties of the inbound NAT rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backend_ip_configuration** | [**DestinationNetworkInterfaceIPConfiguration**](DestinationNetworkInterfaceIPConfiguration.md) |  | [optional] 
**backend_port** | **int** | The port used for the internal endpoint. Acceptable values range from 1 to 65535. | [optional] 
**enable_floating_ip** | **bool** | Configures a virtual machine&#39;s endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can&#39;t be changed after you create the endpoint. | [optional] 
**enable_tcp_reset** | **bool** | Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP. | [optional] 
**frontend_ip_configuration** | [**Model0**](Model0.md) |  | [optional] 
**frontend_port** | **int** | The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values range from 1 to 65534. | [optional] 
**idle_timeout_in_minutes** | **int** | The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP. | [optional] 
**protocol** | **str** | The transport protocol for the endpoint. | [optional] 
**provisioning_state** | [**ProvisioningState**](ProvisioningState.md) |  | [optional] 

## Example

```python
from openapi_client.models.application_gateway_backend_health_server_ip_configuration_properties_load_balancer_inbound_nat_rules_inner_properties import ApplicationGatewayBackendHealthServerIpConfigurationPropertiesLoadBalancerInboundNatRulesInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesLoadBalancerInboundNatRulesInnerProperties from a JSON string
application_gateway_backend_health_server_ip_configuration_properties_load_balancer_inbound_nat_rules_inner_properties_instance = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesLoadBalancerInboundNatRulesInnerProperties.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewayBackendHealthServerIpConfigurationPropertiesLoadBalancerInboundNatRulesInnerProperties.to_json())

# convert the object into a dict
application_gateway_backend_health_server_ip_configuration_properties_load_balancer_inbound_nat_rules_inner_properties_dict = application_gateway_backend_health_server_ip_configuration_properties_load_balancer_inbound_nat_rules_inner_properties_instance.to_dict()
# create an instance of ApplicationGatewayBackendHealthServerIpConfigurationPropertiesLoadBalancerInboundNatRulesInnerProperties from a dict
application_gateway_backend_health_server_ip_configuration_properties_load_balancer_inbound_nat_rules_inner_properties_from_dict = ApplicationGatewayBackendHealthServerIpConfigurationPropertiesLoadBalancerInboundNatRulesInnerProperties.from_dict(application_gateway_backend_health_server_ip_configuration_properties_load_balancer_inbound_nat_rules_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



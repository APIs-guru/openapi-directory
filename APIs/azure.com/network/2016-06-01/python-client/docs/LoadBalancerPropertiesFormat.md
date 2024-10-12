# LoadBalancerPropertiesFormat

Properties of Load Balancer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backend_address_pools** | [**List[BackendAddressPool]**](BackendAddressPool.md) | Gets or sets Pools of backend IP addresses | [optional] 
**frontend_ip_configurations** | [**List[FrontendIPConfiguration]**](FrontendIPConfiguration.md) | Gets or sets frontend IP addresses of the load balancer | [optional] 
**inbound_nat_pools** | [**List[InboundNatPool]**](InboundNatPool.md) | Gets or sets inbound NAT pools | [optional] 
**inbound_nat_rules** | [**List[InboundNatRule]**](InboundNatRule.md) | Gets or sets list of inbound rules | [optional] 
**load_balancing_rules** | [**List[LoadBalancingRule]**](LoadBalancingRule.md) | Gets or sets load balancing rules | [optional] 
**outbound_nat_rules** | [**List[OutboundNatRule]**](OutboundNatRule.md) | Gets or sets outbound NAT rules | [optional] 
**probes** | [**List[Probe]**](Probe.md) | Gets or sets list of Load balancer probes | [optional] 
**provisioning_state** | **str** | Gets provisioning state of the PublicIP resource Updating/Deleting/Failed | [optional] 
**resource_guid** | **str** | Gets or sets resource guid property of the Load balancer resource | [optional] 

## Example

```python
from openapi_client.models.load_balancer_properties_format import LoadBalancerPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of LoadBalancerPropertiesFormat from a JSON string
load_balancer_properties_format_instance = LoadBalancerPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(LoadBalancerPropertiesFormat.to_json())

# convert the object into a dict
load_balancer_properties_format_dict = load_balancer_properties_format_instance.to_dict()
# create an instance of LoadBalancerPropertiesFormat from a dict
load_balancer_properties_format_from_dict = LoadBalancerPropertiesFormat.from_dict(load_balancer_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



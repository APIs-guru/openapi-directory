# OutboundNatRulePropertiesFormat

Outbound NAT pool of the loadbalancer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allocated_outbound_ports** | **int** | Gets or sets the number of outbound ports to be used for SNAT | 
**backend_address_pool** | [**SubResource**](SubResource.md) |  | 
**frontend_ip_configurations** | [**List[SubResource]**](SubResource.md) | Gets or sets Frontend IP addresses of the load balancer | [optional] 
**provisioning_state** | **str** | Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed | [optional] 

## Example

```python
from openapi_client.models.outbound_nat_rule_properties_format import OutboundNatRulePropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of OutboundNatRulePropertiesFormat from a JSON string
outbound_nat_rule_properties_format_instance = OutboundNatRulePropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(OutboundNatRulePropertiesFormat.to_json())

# convert the object into a dict
outbound_nat_rule_properties_format_dict = outbound_nat_rule_properties_format_instance.to_dict()
# create an instance of OutboundNatRulePropertiesFormat from a dict
outbound_nat_rule_properties_format_from_dict = OutboundNatRulePropertiesFormat.from_dict(outbound_nat_rule_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



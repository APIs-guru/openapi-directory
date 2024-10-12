# VirtualNetworkRuleProperties

Properties of a virtual network rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ignore_missing_vnet_service_endpoint** | **bool** | Create firewall rule before the virtual network has vnet service endpoint enabled. | [optional] 
**state** | **str** | Virtual Network Rule State | [optional] [readonly] 
**virtual_network_subnet_id** | **str** | The ARM resource id of the virtual network subnet. | 

## Example

```python
from openapi_client.models.virtual_network_rule_properties import VirtualNetworkRuleProperties

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualNetworkRuleProperties from a JSON string
virtual_network_rule_properties_instance = VirtualNetworkRuleProperties.from_json(json)
# print the JSON string representation of the object
print(VirtualNetworkRuleProperties.to_json())

# convert the object into a dict
virtual_network_rule_properties_dict = virtual_network_rule_properties_instance.to_dict()
# create an instance of VirtualNetworkRuleProperties from a dict
virtual_network_rule_properties_from_dict = VirtualNetworkRuleProperties.from_dict(virtual_network_rule_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# VirtualNetworkRule

A rule governing the accessibility of a vault from a specific virtual network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Full resource id of a vnet subnet, such as &#39;/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/subnet1&#39;. | 

## Example

```python
from openapi_client.models.virtual_network_rule import VirtualNetworkRule

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualNetworkRule from a JSON string
virtual_network_rule_instance = VirtualNetworkRule.from_json(json)
# print the JSON string representation of the object
print(VirtualNetworkRule.to_json())

# convert the object into a dict
virtual_network_rule_dict = virtual_network_rule_instance.to_dict()
# create an instance of VirtualNetworkRule from a dict
virtual_network_rule_from_dict = VirtualNetworkRule.from_dict(virtual_network_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



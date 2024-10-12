# VirtualNetworkRule

Virtual Network ACL Rule object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource ID of a subnet, for example: /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}. | [optional] 
**ignore_missing_v_net_service_endpoint** | **bool** | Create firewall rule before the virtual network has vnet service endpoint enabled. | [optional] 

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



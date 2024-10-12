# NWRuleSetVirtualNetworkRules

The response from the List namespace operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ignore_missing_vnet_service_endpoint** | **bool** | Value that indicates whether to ignore missing Vnet Service Endpoint | [optional] 
**subnet** | [**Subnet**](Subnet.md) |  | [optional] 

## Example

```python
from openapi_client.models.nw_rule_set_virtual_network_rules import NWRuleSetVirtualNetworkRules

# TODO update the JSON string below
json = "{}"
# create an instance of NWRuleSetVirtualNetworkRules from a JSON string
nw_rule_set_virtual_network_rules_instance = NWRuleSetVirtualNetworkRules.from_json(json)
# print the JSON string representation of the object
print(NWRuleSetVirtualNetworkRules.to_json())

# convert the object into a dict
nw_rule_set_virtual_network_rules_dict = nw_rule_set_virtual_network_rules_instance.to_dict()
# create an instance of NWRuleSetVirtualNetworkRules from a dict
nw_rule_set_virtual_network_rules_from_dict = NWRuleSetVirtualNetworkRules.from_dict(nw_rule_set_virtual_network_rules_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



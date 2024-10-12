# VirtualNetworkRule

A virtual network rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**VirtualNetworkRuleProperties**](VirtualNetworkRuleProperties.md) |  | [optional] 
**id** | **str** | Resource ID | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

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



# UpdateVirtualNetworkRuleProperties

The virtual network rule properties to use when updating a virtual network rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subnet_id** | **str** | The resource identifier for the subnet. | [optional] 

## Example

```python
from openapi_client.models.update_virtual_network_rule_properties import UpdateVirtualNetworkRuleProperties

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateVirtualNetworkRuleProperties from a JSON string
update_virtual_network_rule_properties_instance = UpdateVirtualNetworkRuleProperties.from_json(json)
# print the JSON string representation of the object
print(UpdateVirtualNetworkRuleProperties.to_json())

# convert the object into a dict
update_virtual_network_rule_properties_dict = update_virtual_network_rule_properties_instance.to_dict()
# create an instance of UpdateVirtualNetworkRuleProperties from a dict
update_virtual_network_rule_properties_from_dict = UpdateVirtualNetworkRuleProperties.from_dict(update_virtual_network_rule_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



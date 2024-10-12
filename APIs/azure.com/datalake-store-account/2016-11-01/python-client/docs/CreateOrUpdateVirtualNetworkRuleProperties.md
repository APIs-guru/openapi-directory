# CreateOrUpdateVirtualNetworkRuleProperties

The virtual network rule properties to use when creating a new virtual network rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subnet_id** | **str** | The resource identifier for the subnet. | 

## Example

```python
from openapi_client.models.create_or_update_virtual_network_rule_properties import CreateOrUpdateVirtualNetworkRuleProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrUpdateVirtualNetworkRuleProperties from a JSON string
create_or_update_virtual_network_rule_properties_instance = CreateOrUpdateVirtualNetworkRuleProperties.from_json(json)
# print the JSON string representation of the object
print(CreateOrUpdateVirtualNetworkRuleProperties.to_json())

# convert the object into a dict
create_or_update_virtual_network_rule_properties_dict = create_or_update_virtual_network_rule_properties_instance.to_dict()
# create an instance of CreateOrUpdateVirtualNetworkRuleProperties from a dict
create_or_update_virtual_network_rule_properties_from_dict = CreateOrUpdateVirtualNetworkRuleProperties.from_dict(create_or_update_virtual_network_rule_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



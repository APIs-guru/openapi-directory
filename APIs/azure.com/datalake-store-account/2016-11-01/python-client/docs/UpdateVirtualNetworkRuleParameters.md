# UpdateVirtualNetworkRuleParameters

The parameters used to update a virtual network rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**UpdateVirtualNetworkRuleProperties**](UpdateVirtualNetworkRuleProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_virtual_network_rule_parameters import UpdateVirtualNetworkRuleParameters

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateVirtualNetworkRuleParameters from a JSON string
update_virtual_network_rule_parameters_instance = UpdateVirtualNetworkRuleParameters.from_json(json)
# print the JSON string representation of the object
print(UpdateVirtualNetworkRuleParameters.to_json())

# convert the object into a dict
update_virtual_network_rule_parameters_dict = update_virtual_network_rule_parameters_instance.to_dict()
# create an instance of UpdateVirtualNetworkRuleParameters from a dict
update_virtual_network_rule_parameters_from_dict = UpdateVirtualNetworkRuleParameters.from_dict(update_virtual_network_rule_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



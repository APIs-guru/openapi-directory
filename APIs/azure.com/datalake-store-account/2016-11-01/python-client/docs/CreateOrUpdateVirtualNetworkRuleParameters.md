# CreateOrUpdateVirtualNetworkRuleParameters

The parameters used to create a new virtual network rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**CreateOrUpdateVirtualNetworkRuleProperties**](CreateOrUpdateVirtualNetworkRuleProperties.md) |  | 

## Example

```python
from openapi_client.models.create_or_update_virtual_network_rule_parameters import CreateOrUpdateVirtualNetworkRuleParameters

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrUpdateVirtualNetworkRuleParameters from a JSON string
create_or_update_virtual_network_rule_parameters_instance = CreateOrUpdateVirtualNetworkRuleParameters.from_json(json)
# print the JSON string representation of the object
print(CreateOrUpdateVirtualNetworkRuleParameters.to_json())

# convert the object into a dict
create_or_update_virtual_network_rule_parameters_dict = create_or_update_virtual_network_rule_parameters_instance.to_dict()
# create an instance of CreateOrUpdateVirtualNetworkRuleParameters from a dict
create_or_update_virtual_network_rule_parameters_from_dict = CreateOrUpdateVirtualNetworkRuleParameters.from_dict(create_or_update_virtual_network_rule_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



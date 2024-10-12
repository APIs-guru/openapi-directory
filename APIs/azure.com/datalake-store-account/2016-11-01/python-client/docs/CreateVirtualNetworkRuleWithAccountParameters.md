# CreateVirtualNetworkRuleWithAccountParameters

The parameters used to create a new virtual network rule while creating a new Data Lake Store account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The unique name of the virtual network rule to create. | 
**properties** | [**CreateOrUpdateVirtualNetworkRuleProperties**](CreateOrUpdateVirtualNetworkRuleProperties.md) |  | 

## Example

```python
from openapi_client.models.create_virtual_network_rule_with_account_parameters import CreateVirtualNetworkRuleWithAccountParameters

# TODO update the JSON string below
json = "{}"
# create an instance of CreateVirtualNetworkRuleWithAccountParameters from a JSON string
create_virtual_network_rule_with_account_parameters_instance = CreateVirtualNetworkRuleWithAccountParameters.from_json(json)
# print the JSON string representation of the object
print(CreateVirtualNetworkRuleWithAccountParameters.to_json())

# convert the object into a dict
create_virtual_network_rule_with_account_parameters_dict = create_virtual_network_rule_with_account_parameters_instance.to_dict()
# create an instance of CreateVirtualNetworkRuleWithAccountParameters from a dict
create_virtual_network_rule_with_account_parameters_from_dict = CreateVirtualNetworkRuleWithAccountParameters.from_dict(create_virtual_network_rule_with_account_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



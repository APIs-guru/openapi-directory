# UpdateVirtualNetworkRuleWithAccountParameters

The parameters used to update a virtual network rule while updating a Data Lake Store account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The unique name of the virtual network rule to update. | 
**properties** | [**UpdateVirtualNetworkRuleProperties**](UpdateVirtualNetworkRuleProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_virtual_network_rule_with_account_parameters import UpdateVirtualNetworkRuleWithAccountParameters

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateVirtualNetworkRuleWithAccountParameters from a JSON string
update_virtual_network_rule_with_account_parameters_instance = UpdateVirtualNetworkRuleWithAccountParameters.from_json(json)
# print the JSON string representation of the object
print(UpdateVirtualNetworkRuleWithAccountParameters.to_json())

# convert the object into a dict
update_virtual_network_rule_with_account_parameters_dict = update_virtual_network_rule_with_account_parameters_instance.to_dict()
# create an instance of UpdateVirtualNetworkRuleWithAccountParameters from a dict
update_virtual_network_rule_with_account_parameters_from_dict = UpdateVirtualNetworkRuleWithAccountParameters.from_dict(update_virtual_network_rule_with_account_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



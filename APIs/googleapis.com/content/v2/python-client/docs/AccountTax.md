# AccountTax

The tax settings of a merchant account. All methods require the admin role.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Required. The ID of the account to which these account tax settings belong. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;content#accountTax\&quot;. | [optional] 
**rules** | [**List[AccountTaxTaxRule]**](AccountTaxTaxRule.md) | Tax rules. Updating the tax rules will enable US taxes (not reversible). Defining no rules is equivalent to not charging tax at all. | [optional] 

## Example

```python
from openapi_client.models.account_tax import AccountTax

# TODO update the JSON string below
json = "{}"
# create an instance of AccountTax from a JSON string
account_tax_instance = AccountTax.from_json(json)
# print the JSON string representation of the object
print(AccountTax.to_json())

# convert the object into a dict
account_tax_dict = account_tax_instance.to_dict()
# create an instance of AccountTax from a dict
account_tax_from_dict = AccountTax.from_dict(account_tax_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



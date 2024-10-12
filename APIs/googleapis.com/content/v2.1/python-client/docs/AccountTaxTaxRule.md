# AccountTaxTaxRule

Tax calculation rule to apply in a state or province (US only).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** | Country code in which tax is applicable. | [optional] 
**location_id** | **str** | Required. State (or province) is which the tax is applicable, described by its location ID (also called criteria ID). | [optional] 
**rate_percent** | **str** | Explicit tax rate in percent, represented as a floating point number without the percentage character. Must not be negative. | [optional] 
**shipping_taxed** | **bool** | If true, shipping charges are also taxed. | [optional] 
**use_global_rate** | **bool** | Whether the tax rate is taken from a global tax table or specified explicitly. | [optional] 

## Example

```python
from openapi_client.models.account_tax_tax_rule import AccountTaxTaxRule

# TODO update the JSON string below
json = "{}"
# create an instance of AccountTaxTaxRule from a JSON string
account_tax_tax_rule_instance = AccountTaxTaxRule.from_json(json)
# print the JSON string representation of the object
print(AccountTaxTaxRule.to_json())

# convert the object into a dict
account_tax_tax_rule_dict = account_tax_tax_rule_instance.to_dict()
# create an instance of AccountTaxTaxRule from a dict
account_tax_tax_rule_from_dict = AccountTaxTaxRule.from_dict(account_tax_tax_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



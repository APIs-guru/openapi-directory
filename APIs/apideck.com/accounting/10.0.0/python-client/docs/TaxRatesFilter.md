# TaxRatesFilter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | **bool** | Boolean to describe if tax rate can be used for asset accounts | [optional] 
**equity** | **bool** | Boolean to describe if tax rate can be used for equity accounts | [optional] 
**expenses** | **bool** | Boolean to describe if tax rate can be used for expense accounts | [optional] 
**liabilities** | **bool** | Boolean to describe if tax rate can be used for liability accounts | [optional] 
**revenue** | **bool** | Boolean to describe if tax rate can be used for revenue accounts | [optional] 

## Example

```python
from openapi_client.models.tax_rates_filter import TaxRatesFilter

# TODO update the JSON string below
json = "{}"
# create an instance of TaxRatesFilter from a JSON string
tax_rates_filter_instance = TaxRatesFilter.from_json(json)
# print the JSON string representation of the object
print(TaxRatesFilter.to_json())

# convert the object into a dict
tax_rates_filter_dict = tax_rates_filter_instance.to_dict()
# create an instance of TaxRatesFilter from a dict
tax_rates_filter_from_dict = TaxRatesFilter.from_dict(tax_rates_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



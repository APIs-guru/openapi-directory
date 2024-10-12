# ProductTaxAddTaxRatesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**value** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.product_tax_add_tax_rates_inner import ProductTaxAddTaxRatesInner

# TODO update the JSON string below
json = "{}"
# create an instance of ProductTaxAddTaxRatesInner from a JSON string
product_tax_add_tax_rates_inner_instance = ProductTaxAddTaxRatesInner.from_json(json)
# print the JSON string representation of the object
print(ProductTaxAddTaxRatesInner.to_json())

# convert the object into a dict
product_tax_add_tax_rates_inner_dict = product_tax_add_tax_rates_inner_instance.to_dict()
# create an instance of ProductTaxAddTaxRatesInner from a dict
product_tax_add_tax_rates_inner_from_dict = ProductTaxAddTaxRatesInner.from_dict(product_tax_add_tax_rates_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



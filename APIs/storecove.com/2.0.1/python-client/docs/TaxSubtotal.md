# TaxSubtotal

The total amount of tax of this type in the invoice.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | The tax category. For a description see &lt;&lt;_openapi_tax&gt;&gt; | [optional] 
**country** | [**Country**](Country.md) |  | 
**percentage** | **float** | The tax percentage. This should be a valid tax percentage in the country at the time of the taxpointDate of this invoice. | 
**tax_amount** | **float** | The amount of tax. | 
**taxable_amount** | **float** | The amount on which the tax is levied. | 

## Example

```python
from openapi_client.models.tax_subtotal import TaxSubtotal

# TODO update the JSON string below
json = "{}"
# create an instance of TaxSubtotal from a JSON string
tax_subtotal_instance = TaxSubtotal.from_json(json)
# print the JSON string representation of the object
print(TaxSubtotal.to_json())

# convert the object into a dict
tax_subtotal_dict = tax_subtotal_instance.to_dict()
# create an instance of TaxSubtotal from a dict
tax_subtotal_from_dict = TaxSubtotal.from_dict(tax_subtotal_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# Taxes

The type that defines the tax fields.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ebay_collect_and_remit_tax** | **bool** | This field is only returned if true, and indicates that eBay will collect tax (sales tax, Goods and Services tax, or VAT) for at least one line item in the order, and remit the tax to the taxing authority of the buyer&#39;s residence. | [optional] 
**included_in_price** | **bool** | This indicates if tax was applied for the cost of the item. | [optional] 
**shipping_and_handling_taxed** | **bool** | This indicates if tax is applied for the shipping cost. | [optional] 
**tax_jurisdiction** | [**TaxJurisdiction**](TaxJurisdiction.md) |  | [optional] 
**tax_percentage** | **str** | The percentage of tax. | [optional] 
**tax_type** | **str** | This field indicates the type of tax that may be collected for the item. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/buy/browse/types/gct:TaxType&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 

## Example

```python
from openapi_client.models.taxes import Taxes

# TODO update the JSON string below
json = "{}"
# create an instance of Taxes from a JSON string
taxes_instance = Taxes.from_json(json)
# print the JSON string representation of the object
print(Taxes.to_json())

# convert the object into a dict
taxes_dict = taxes_instance.to_dict()
# create an instance of Taxes from a dict
taxes_from_dict = Taxes.from_dict(taxes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# SalesTaxBase

This type is used by the base request of the <b>createOrReplaceSalesTax</b>. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sales_tax_percentage** | **str** | This field is used to set the sales tax rate for the tax jurisdiction set in the call URI. When applicable to an order, this sales tax rate will be applied to sales price. The &lt;b&gt;shippingAndHandlingTaxed&lt;/b&gt; value will indicate whether or not sales tax is also applied to shipping and handling charges&lt;br&gt;&lt;br&gt;Although it is a string, a percentage value is set here, such as &lt;code&gt;7.75&lt;/code&gt;. | [optional] 
**shipping_and_handling_taxed** | **bool** | This field is set to &lt;code&gt;true&lt;/code&gt; if the seller wishes to apply sales tax to shipping and handling charges, and not just the total sales price of the order. Otherwise, this field&#39;s value should be set to &lt;code&gt;false&lt;/code&gt;. | [optional] 

## Example

```python
from openapi_client.models.sales_tax_base import SalesTaxBase

# TODO update the JSON string below
json = "{}"
# create an instance of SalesTaxBase from a JSON string
sales_tax_base_instance = SalesTaxBase.from_json(json)
# print the JSON string representation of the object
print(SalesTaxBase.to_json())

# convert the object into a dict
sales_tax_base_dict = sales_tax_base_instance.to_dict()
# create an instance of SalesTaxBase from a dict
sales_tax_base_from_dict = SalesTaxBase.from_dict(sales_tax_base_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



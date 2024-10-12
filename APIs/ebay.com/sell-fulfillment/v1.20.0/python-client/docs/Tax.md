# Tax

This type contains information about any sales tax applied to a line item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | [**Amount**](Amount.md) |  | [optional] 
**tax_type** | **str** | Tax type. This field is only available when &lt;strong&gt;fieldGroups&lt;/strong&gt; is set to &lt;code&gt;TAX_BREAKDOWN&lt;/code&gt;. If the order has fees, a breakdown of the fees is also provided. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:TaxTypeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 

## Example

```python
from openapi_client.models.tax import Tax

# TODO update the JSON string below
json = "{}"
# create an instance of Tax from a JSON string
tax_instance = Tax.from_json(json)
# print the JSON string representation of the object
print(Tax.to_json())

# convert the object into a dict
tax_dict = tax_instance.to_dict()
# create an instance of Tax from a dict
tax_from_dict = Tax.from_dict(tax_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



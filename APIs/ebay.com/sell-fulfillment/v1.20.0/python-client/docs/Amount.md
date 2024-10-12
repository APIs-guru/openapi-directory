# Amount

This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**converted_from_currency** | **str** | A three-letter ISO 4217 code that indicates the currency of the amount in the &lt;b&gt;convertedFromValue&lt;/b&gt; field. This value is required or returned only if currency conversion/localization is required, and represents the pre-conversion currency. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CurrencyCodeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**converted_from_value** | **str** | The monetary amount before any conversion is performed, in the currency specified by the &lt;b&gt;convertedFromCurrency&lt;/b&gt; field. This value is required or returned only if currency conversion/localization is required. The &lt;b&gt;value&lt;/b&gt; field contains the converted amount of this value, in the currency specified by the &lt;b&gt;currency&lt;/b&gt; field. | [optional] 
**currency** | **str** | A three-letter ISO 4217 code that indicates the currency of the amount in the &lt;b&gt;value&lt;/b&gt; field. If currency conversion/localization is required, this is the post-conversion currency of the amount in the &lt;b&gt;value&lt;/b&gt; field.&lt;br&gt;&lt;br&gt;&lt;b&gt;Default:&lt;/b&gt; The default currency of the eBay marketplace that hosts the listing. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CurrencyCodeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**value** | **str** | The monetary amount, in the currency specified by the &lt;b&gt;currency&lt;/b&gt; field. If currency conversion/localization is required, this value is the converted amount, and the &lt;b&gt;convertedFromValue&lt;/b&gt; field contains the amount in the original currency.  &lt;br&gt;&lt;br&gt;&lt;i&gt;Required in&lt;/i&gt; the &lt;b&gt;amount&lt;/b&gt; type. | [optional] 

## Example

```python
from openapi_client.models.amount import Amount

# TODO update the JSON string below
json = "{}"
# create an instance of Amount from a JSON string
amount_instance = Amount.from_json(json)
# print the JSON string representation of the object
print(Amount.to_json())

# convert the object into a dict
amount_dict = amount_instance.to_dict()
# create an instance of Amount from a dict
amount_from_dict = Amount.from_dict(amount_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



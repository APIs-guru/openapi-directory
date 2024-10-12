# ConvertedAmount

This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**converted_from_currency** | **str** | The three-letter ISO 4217 code representing the currency of the amount in the convertedFromValue field. This value is required or returned only if currency conversion/localization is required, and represents the pre-conversion currency. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/buy/browse/types/ba:CurrencyCodeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**converted_from_value** | **str** | The monetary amount before any conversion is performed, in the currency specified by the convertedFromCurrency field. This value is required or returned only if currency conversion/localization is required. The value field contains the converted amount of this value, in the currency specified by the currency field. | [optional] 
**currency** | **str** | The three-letter ISO 4217 code representing the currency of the amount in the value field. If currency conversion/localization is required, this is the post-conversion currency of the amount in the value field. Default: The currency of the authenticated user&#39;s country. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/buy/browse/types/ba:CurrencyCodeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**value** | **str** | The monetary amount, in the currency specified by the currency field. If currency conversion/localization is required, this value is the converted amount, and the convertedFromValue field contains the amount in the original currency. | [optional] 

## Example

```python
from openapi_client.models.converted_amount import ConvertedAmount

# TODO update the JSON string below
json = "{}"
# create an instance of ConvertedAmount from a JSON string
converted_amount_instance = ConvertedAmount.from_json(json)
# print the JSON string representation of the object
print(ConvertedAmount.to_json())

# convert the object into a dict
converted_amount_dict = converted_amount_instance.to_dict()
# create an instance of ConvertedAmount from a dict
converted_amount_from_dict = ConvertedAmount.from_dict(converted_amount_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



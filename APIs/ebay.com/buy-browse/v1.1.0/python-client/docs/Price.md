# Price

The type that defines the fields for the monetary value and currency of the price of the item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**converted_from_currency** | **str** | The three-letter ISO 4217 code representing the currency of the amount in the convertedFromValue field. This value is the pre-conversion currency. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/buy/browse/types/ba:CurrencyCodeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**converted_from_value** | **str** | The monetary amount before any conversion is performed, in the currency specified by the convertedFromCurrency field. This value is the pre-conversion amount. The value field contains the converted amount of this value, in the currency specified by the currency field. | [optional] 
**currency** | **str** | The three-letter ISO 4217 code representing the currency of the amount in the value field. If currency conversion/localization was performed, this is the post-conversion currency of the amount in the value field. Default: The currency of the user&#39;s country. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/buy/browse/types/ba:CurrencyCodeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**value** | **str** | The amount of the currency specified in the currency field. The value of currency defaults to the standard currency used by the country of the eBay site offering the item. If currency conversion/localization was performed, this is the post-conversion amount. Default: The currency of the user&#39;s country. | [optional] 

## Example

```python
from openapi_client.models.price import Price

# TODO update the JSON string below
json = "{}"
# create an instance of Price from a JSON string
price_instance = Price.from_json(json)
# print the JSON string representation of the object
print(Price.to_json())

# convert the object into a dict
price_dict = price_instance.to_dict()
# create an instance of Price from a dict
price_from_dict = Price.from_dict(price_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



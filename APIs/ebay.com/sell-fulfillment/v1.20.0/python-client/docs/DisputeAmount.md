# DisputeAmount

This type defines the monetary value of an amount. It can provide the amount in both the currency used on the eBay site where an item is being offered and the conversion of that value into another currency, if applicable.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**converted_from_currency** | **str** | The three-letter &lt;a href&#x3D;\&quot;https://www.iso.org/iso-4217-currency-codes.html \&quot; target&#x3D;\&quot;_blank\&quot;&gt;ISO 4217&lt;/a&gt; code representing the currency of the amount in the &lt;b&gt; convertedFromValue&lt;/b&gt; field. This value is the pre-conversion currency.&lt;br&gt;&lt;br&gt;This field is only returned if/when currency conversion was applied by eBay. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CurrencyCodeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**converted_from_value** | **str** | The monetary amount before any conversion is performed, in the currency specified by the &lt;b&gt; convertedFromCurrency&lt;/b&gt; field. This value is the pre-conversion amount. The &lt;b&gt; value&lt;/b&gt; field contains the converted amount of this value, in the currency specified by the &lt;b&gt; currency&lt;/b&gt; field.&lt;br&gt;&lt;br&gt;This field is only returned if/when currency conversion was applied by eBay. | [optional] 
**currency** | **str** | A three-letter ISO 4217 code that indicates the currency of the amount in the &lt;b&gt;value&lt;/b&gt; field. This field is always returned with any container using &lt;b&gt;Amount&lt;/b&gt; type. &lt;br&gt;&lt;br&gt;&lt;b&gt;Default&lt;/b&gt;: The currency of the authenticated user&#39;s country. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CurrencyCodeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**exchange_rate** | **str** | The exchange rate used for the monetary conversion. This field shows the exchange rate used to convert the dollar value in the &lt;b&gt;value&lt;/b&gt; field from the dollar value in the &lt;b&gt;convertedFromValue&lt;/b&gt; field.&lt;br&gt;&lt;br&gt;This field is only returned if/when currency conversion was applied by eBay. | [optional] 
**value** | **str** | The monetary amount, in the currency specified by the &lt;b&gt;currency&lt;/b&gt; field. This field is always returned with any container using &lt;b&gt;Amount&lt;/b&gt; type. | [optional] 

## Example

```python
from openapi_client.models.dispute_amount import DisputeAmount

# TODO update the JSON string below
json = "{}"
# create an instance of DisputeAmount from a JSON string
dispute_amount_instance = DisputeAmount.from_json(json)
# print the JSON string representation of the object
print(DisputeAmount.to_json())

# convert the object into a dict
dispute_amount_dict = dispute_amount_instance.to_dict()
# create an instance of DisputeAmount from a dict
dispute_amount_from_dict = DisputeAmount.from_dict(dispute_amount_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



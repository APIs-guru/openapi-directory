# Amount

A complex type that describes the value of a monetary amount as represented by a global currency.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **str** | The base currency applied to the &lt;b&gt;value&lt;/b&gt; field to establish a monetary amount.  &lt;br&gt;&lt;br&gt;The currency is represented as a 3-letter &lt;a href&#x3D;\&quot;https://www.iso.org/iso-4217-currency-codes.html\&quot; title&#x3D;\&quot;https://www.iso.org\&quot; target&#x3D;\&quot;_blank\&quot;&gt;ISO 4217&lt;/a&gt; currency code. For example, the code for the Canadian Dollar is &lt;code&gt;CAD&lt;/code&gt;.  &lt;br&gt;&lt;br&gt;&lt;b&gt;Default:&lt;/b&gt; The default currency of the eBay marketplace that hosts the listing. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/logistics/types/bas:CurrencyCodeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**value** | **str** | The monetary amount in the specified &lt;b&gt;currency&lt;/b&gt;. | [optional] 

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



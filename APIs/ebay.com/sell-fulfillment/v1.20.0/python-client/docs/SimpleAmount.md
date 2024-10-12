# SimpleAmount

This type defines the monetary value of the payment dispute, and the currency used.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **str** | A three-letter ISO 4217 code (such as &lt;code&gt;USD&lt;/code&gt; for US site) that indicates the currency of the amount in the &lt;strong&gt;value&lt;/strong&gt; field. Both the &lt;strong&gt;value&lt;/strong&gt; and &lt;strong&gt;currency&lt;/strong&gt; fields are always returned with the &lt;strong&gt;amount&lt;/strong&gt; container. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CurrencyCodeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**value** | **str** | The monetary amount of the payment dispute. Both the &lt;strong&gt;value&lt;/strong&gt; and &lt;strong&gt;currency&lt;/strong&gt; fields are always returned with the &lt;strong&gt;amount&lt;/strong&gt; container. | [optional] 

## Example

```python
from openapi_client.models.simple_amount import SimpleAmount

# TODO update the JSON string below
json = "{}"
# create an instance of SimpleAmount from a JSON string
simple_amount_instance = SimpleAmount.from_json(json)
# print the JSON string representation of the object
print(SimpleAmount.to_json())

# convert the object into a dict
simple_amount_dict = simple_amount_instance.to_dict()
# create an instance of SimpleAmount from a dict
simple_amount_from_dict = SimpleAmount.from_dict(simple_amount_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



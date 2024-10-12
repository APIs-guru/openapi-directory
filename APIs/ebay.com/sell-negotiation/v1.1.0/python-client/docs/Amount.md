# Amount

A complex type that describes the value of a monetary amount as represented by a global currency.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **str** | The base currency applied to the value field to establish a monetary amount. The currency is represented as a 3-letter ISO4217 currency code. For example, the code for the Canadian Dollar is CAD. Default: The default currency of the eBay marketplace that hosts the listing. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/negotiation/types/bas:CurrencyCodeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**value** | **str** | The monetary amount in the specified currency. | [optional] 

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



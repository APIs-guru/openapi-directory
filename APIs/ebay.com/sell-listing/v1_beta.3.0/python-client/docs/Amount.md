# Amount

The type that defines the fields for the currency and a monetary amount.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **str** | The three-letter ISO 4217 code representing the currency of the amount in the value field. Restriction: Only the currency of the marketplace is supported. For example, on the US marketplace the only currency supported is USD. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/listing/types/bas:CurrencyCodeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**value** | **str** | The monetary amount, in the currency specified by the currency field. | [optional] 

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



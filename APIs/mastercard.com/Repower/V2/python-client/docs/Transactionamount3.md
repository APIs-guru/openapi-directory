# Transactionamount3

Transaction amount value and currency

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **str** | Global currency code used to represent the type of currency for the \&quot;Value\&quot; representing funds to be topped up. Details- numeric, 3, valid ISO 4217 numeric currency codes (leading zeros may be required.) | 
**value** | **str** | The amount to be loaded onto the account. Implied decimal point based on currency exponent. Details- Numeric, 2-12 | 

## Example

```python
from openapi_client.models.transactionamount3 import Transactionamount3

# TODO update the JSON string below
json = "{}"
# create an instance of Transactionamount3 from a JSON string
transactionamount3_instance = Transactionamount3.from_json(json)
# print the JSON string representation of the object
print(Transactionamount3.to_json())

# convert the object into a dict
transactionamount3_dict = transactionamount3_instance.to_dict()
# create an instance of Transactionamount3 from a dict
transactionamount3_from_dict = Transactionamount3.from_dict(transactionamount3_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



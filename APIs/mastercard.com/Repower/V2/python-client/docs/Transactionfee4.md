# Transactionfee4

Transaction fee amount and currency

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **str** | Global currency code used to represent the type of currency for the \&quot;Value\&quot; representing the fees.It should match the transaction amount currency. Details- Numeric, 3, valid ISO 4217 numeric currency codes (leading zeros may be required.) | [optional] 
**value** | **str** | Fee charged by the acquirer for transaction activity in the currency of the Transaction amount value. Details- numeric, 1-8 | [optional] 

## Example

```python
from openapi_client.models.transactionfee4 import Transactionfee4

# TODO update the JSON string below
json = "{}"
# create an instance of Transactionfee4 from a JSON string
transactionfee4_instance = Transactionfee4.from_json(json)
# print the JSON string representation of the object
print(Transactionfee4.to_json())

# convert the object into a dict
transactionfee4_dict = transactionfee4_instance.to_dict()
# create an instance of Transactionfee4 from a dict
transactionfee4_from_dict = Transactionfee4.from_dict(transactionfee4_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



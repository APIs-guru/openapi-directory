# TransactionAmount25

Transaction amount consists of value and currency

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **str** | Currency of the transfer amount as an ISO alpha currency code.   Type: Alpha [A-Z], Maximum Length: 3 | [optional] 
**value** | **str** | Amount of the transfer. Decimal implied based on the exponent for the merchant_transfer.currency.   Example: 100 &#x3D; $1.00 USD.   Type: Numeric [0-9], Maximum Length: 12 | [optional] 

## Example

```python
from openapi_client.models.transaction_amount25 import TransactionAmount25

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionAmount25 from a JSON string
transaction_amount25_instance = TransactionAmount25.from_json(json)
# print the JSON string representation of the object
print(TransactionAmount25.to_json())

# convert the object into a dict
transaction_amount25_dict = transaction_amount25_instance.to_dict()
# create an instance of TransactionAmount25 from a dict
transaction_amount25_from_dict = TransactionAmount25.from_dict(transaction_amount25_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



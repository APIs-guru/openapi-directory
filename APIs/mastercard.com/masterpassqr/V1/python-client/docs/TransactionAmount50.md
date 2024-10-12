# TransactionAmount50

transaction amount consist of value and currency

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **str** | Currency of the transfer amount as an ISO alpha currency code. | [optional] 
**value** | **str** | Amount of the transfer. The decimal point is implied based on the payment_transfer.currency. | [optional] 

## Example

```python
from openapi_client.models.transaction_amount50 import TransactionAmount50

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionAmount50 from a JSON string
transaction_amount50_instance = TransactionAmount50.from_json(json)
# print the JSON string representation of the object
print(TransactionAmount50.to_json())

# convert the object into a dict
transaction_amount50_dict = transaction_amount50_instance.to_dict()
# create an instance of TransactionAmount50 from a dict
transaction_amount50_from_dict = TransactionAmount50.from_dict(transaction_amount50_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



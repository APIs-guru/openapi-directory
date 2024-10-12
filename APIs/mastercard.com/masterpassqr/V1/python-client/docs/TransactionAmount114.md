# TransactionAmount114

transaction amount consist of value and currency

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **str** | Currency of the transfer amount as an ISO alpha currency code. | [optional] 
**value** | **str** | Amount of the transfer. The decimal point is implied based on the payment_transfer.currency. | [optional] 

## Example

```python
from openapi_client.models.transaction_amount114 import TransactionAmount114

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionAmount114 from a JSON string
transaction_amount114_instance = TransactionAmount114.from_json(json)
# print the JSON string representation of the object
print(TransactionAmount114.to_json())

# convert the object into a dict
transaction_amount114_dict = transaction_amount114_instance.to_dict()
# create an instance of TransactionAmount114 from a dict
transaction_amount114_from_dict = TransactionAmount114.from_dict(transaction_amount114_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



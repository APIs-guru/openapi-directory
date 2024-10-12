# TransactionAmount65

Transaction amount consist of value and currency

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **str** | Currency of the transfer amount as an ISO alpha currency code. | [optional] 
**value** | **str** | Amount of the transfer. The decimal point is implied based on the merchant_payment_transfer.currency. | [optional] 

## Example

```python
from openapi_client.models.transaction_amount65 import TransactionAmount65

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionAmount65 from a JSON string
transaction_amount65_instance = TransactionAmount65.from_json(json)
# print the JSON string representation of the object
print(TransactionAmount65.to_json())

# convert the object into a dict
transaction_amount65_dict = transaction_amount65_instance.to_dict()
# create an instance of TransactionAmount65 from a dict
transaction_amount65_from_dict = TransactionAmount65.from_dict(transaction_amount65_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



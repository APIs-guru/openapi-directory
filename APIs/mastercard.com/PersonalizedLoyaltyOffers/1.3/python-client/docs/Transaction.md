# Transaction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cash_back_earned** | **str** | Value earned upon fulfillment of offer conditions, not applicable to points activations. | [optional] 
**points_earned** | **str** | Value earned upon fulfillment of offer conditions, not applicable to cash activations. | [optional] 
**redemption_date** | **date** | The day on which a purchase fulfilled the offer. | [optional] 
**transaction_amount** | **str** | Value of the purchase that fulfilled the offer, decimal is implied. | [optional] 

## Example

```python
from openapi_client.models.transaction import Transaction

# TODO update the JSON string below
json = "{}"
# create an instance of Transaction from a JSON string
transaction_instance = Transaction.from_json(json)
# print the JSON string representation of the object
print(Transaction.to_json())

# convert the object into a dict
transaction_dict = transaction_instance.to_dict()
# create an instance of Transaction from a dict
transaction_from_dict = Transaction.from_dict(transaction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



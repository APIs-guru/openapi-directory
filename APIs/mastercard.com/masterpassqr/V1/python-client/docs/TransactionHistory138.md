# TransactionHistory138

A list of all Transactions in the transfer including reversals.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Data139**](Data139.md) |  | [optional] 
**item_count** | **int** | Number of Transactions in the list. Details- Numeric Example: 1 | [optional] 
**resource_type** | **str** | Resource type of the resource that is being returned. | [optional] 

## Example

```python
from openapi_client.models.transaction_history138 import TransactionHistory138

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionHistory138 from a JSON string
transaction_history138_instance = TransactionHistory138.from_json(json)
# print the JSON string representation of the object
print(TransactionHistory138.to_json())

# convert the object into a dict
transaction_history138_dict = transaction_history138_instance.to_dict()
# create an instance of TransactionHistory138 from a dict
transaction_history138_from_dict = TransactionHistory138.from_dict(transaction_history138_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



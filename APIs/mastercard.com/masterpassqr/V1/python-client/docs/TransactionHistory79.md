# TransactionHistory79

A list of all Transactions in the transfer including reversals, if any applicable.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Data80**](Data80.md) |  | [optional] 
**item_count** | **int** | Number of Transactions in the list. Details- Numeric Example: 1 | [optional] 
**resource_type** | **str** | Type of the resource that is being returned. Valid value:  list | [optional] 

## Example

```python
from openapi_client.models.transaction_history79 import TransactionHistory79

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionHistory79 from a JSON string
transaction_history79_instance = TransactionHistory79.from_json(json)
# print the JSON string representation of the object
print(TransactionHistory79.to_json())

# convert the object into a dict
transaction_history79_dict = transaction_history79_instance.to_dict()
# create an instance of TransactionHistory79 from a dict
transaction_history79_from_dict = TransactionHistory79.from_dict(transaction_history79_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



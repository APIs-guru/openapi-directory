# TransactionHistory47

A list of all Transactions in the transfer including reversals, if any applicable.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Data48**](Data48.md) |  | [optional] 
**item_count** | **int** | Number of Transactions in the list. Details- Numeric Example: 1 | [optional] 
**resource_type** | **str** | Type of the resource that is being returned. Valid value:  list | [optional] 

## Example

```python
from openapi_client.models.transaction_history47 import TransactionHistory47

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionHistory47 from a JSON string
transaction_history47_instance = TransactionHistory47.from_json(json)
# print the JSON string representation of the object
print(TransactionHistory47.to_json())

# convert the object into a dict
transaction_history47_dict = transaction_history47_instance.to_dict()
# create an instance of TransactionHistory47 from a dict
transaction_history47_from_dict = TransactionHistory47.from_dict(transaction_history47_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



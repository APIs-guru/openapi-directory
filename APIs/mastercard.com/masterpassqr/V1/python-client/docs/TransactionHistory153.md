# TransactionHistory153

A list of all Transactions in the transfer including reversals.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Data154**](Data154.md) |  | [optional] 
**item_count** | **int** | Number of Transactions in the list. Details- Numeric Example: 1 | [optional] 
**resource_type** | **str** | Resource type of the resource that is being returned. | [optional] 

## Example

```python
from openapi_client.models.transaction_history153 import TransactionHistory153

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionHistory153 from a JSON string
transaction_history153_instance = TransactionHistory153.from_json(json)
# print the JSON string representation of the object
print(TransactionHistory153.to_json())

# convert the object into a dict
transaction_history153_dict = transaction_history153_instance.to_dict()
# create an instance of TransactionHistory153 from a dict
transaction_history153_from_dict = TransactionHistory153.from_dict(transaction_history153_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# TransactionHistory22

A list of all Transactions in the transfer including reversals, if any applicable.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Data23**](Data23.md) |  | [optional] 
**item_count** | **int** | Number of Transactions in the list.   Type: Numeric, Maximum Length: 1 | [optional] 
**resource_type** | **str** | Type of the resource that is being returned.   Type: Alpha Special [a-z _], Maximum Length: 17 | [optional] 

## Example

```python
from openapi_client.models.transaction_history22 import TransactionHistory22

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionHistory22 from a JSON string
transaction_history22_instance = TransactionHistory22.from_json(json)
# print the JSON string representation of the object
print(TransactionHistory22.to_json())

# convert the object into a dict
transaction_history22_dict = transaction_history22_instance.to_dict()
# create an instance of TransactionHistory22 from a dict
transaction_history22_from_dict = TransactionHistory22.from_dict(transaction_history22_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



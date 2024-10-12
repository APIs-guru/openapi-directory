# TransactionListResult

Result of listing reservation transactions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link (url) to the next page of results. | [optional] [readonly] 
**value** | [**List[Transaction]**](Transaction.md) | The list of reservation transactions. | [optional] [readonly] 

## Example

```python
from openapi_client.models.transaction_list_result import TransactionListResult

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionListResult from a JSON string
transaction_list_result_instance = TransactionListResult.from_json(json)
# print the JSON string representation of the object
print(TransactionListResult.to_json())

# convert the object into a dict
transaction_list_result_dict = transaction_list_result_instance.to_dict()
# create an instance of TransactionListResult from a dict
transaction_list_result_from_dict = TransactionListResult.from_dict(transaction_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



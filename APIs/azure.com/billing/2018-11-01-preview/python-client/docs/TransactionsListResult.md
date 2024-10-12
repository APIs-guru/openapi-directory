# TransactionsListResult

Result of listing reservation transactions summary.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link (url) to the next page of results. | [optional] [readonly] 
**value** | [**List[TransactionsSummary]**](TransactionsSummary.md) | The list of reservation transactions summary. | [optional] [readonly] 

## Example

```python
from openapi_client.models.transactions_list_result import TransactionsListResult

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionsListResult from a JSON string
transactions_list_result_instance = TransactionsListResult.from_json(json)
# print the JSON string representation of the object
print(TransactionsListResult.to_json())

# convert the object into a dict
transactions_list_result_dict = transactions_list_result_instance.to_dict()
# create an instance of TransactionsListResult from a dict
transactions_list_result_from_dict = TransactionsListResult.from_dict(transactions_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



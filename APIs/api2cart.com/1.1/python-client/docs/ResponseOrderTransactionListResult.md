# ResponseOrderTransactionListResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**transactions** | [**List[OrderTransaction]**](OrderTransaction.md) |  | [optional] 
**transactions_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.response_order_transaction_list_result import ResponseOrderTransactionListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseOrderTransactionListResult from a JSON string
response_order_transaction_list_result_instance = ResponseOrderTransactionListResult.from_json(json)
# print the JSON string representation of the object
print(ResponseOrderTransactionListResult.to_json())

# convert the object into a dict
response_order_transaction_list_result_dict = response_order_transaction_list_result_instance.to_dict()
# create an instance of ResponseOrderTransactionListResult from a dict
response_order_transaction_list_result_from_dict = ResponseOrderTransactionListResult.from_dict(response_order_transaction_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



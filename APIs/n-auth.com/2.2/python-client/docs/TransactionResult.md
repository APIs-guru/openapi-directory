# TransactionResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tstatus** | **str** | 0 &#x3D; new, 1 &#x3D; approved, 2 &#x3D; declined | [optional] 

## Example

```python
from openapi_client.models.transaction_result import TransactionResult

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionResult from a JSON string
transaction_result_instance = TransactionResult.from_json(json)
# print the JSON string representation of the object
print(TransactionResult.to_json())

# convert the object into a dict
transaction_result_dict = transaction_result_instance.to_dict()
# create an instance of TransactionResult from a dict
transaction_result_from_dict = TransactionResult.from_dict(transaction_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



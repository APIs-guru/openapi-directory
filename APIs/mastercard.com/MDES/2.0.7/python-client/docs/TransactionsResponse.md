# TransactionsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transactions** | [**Transactions**](Transactions.md) |  | [optional] 

## Example

```python
from openapi_client.models.transactions_response import TransactionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionsResponse from a JSON string
transactions_response_instance = TransactionsResponse.from_json(json)
# print the JSON string representation of the object
print(TransactionsResponse.to_json())

# convert the object into a dict
transactions_response_dict = transactions_response_instance.to_dict()
# create an instance of TransactionsResponse from a dict
transactions_response_from_dict = TransactionsResponse.from_dict(transactions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



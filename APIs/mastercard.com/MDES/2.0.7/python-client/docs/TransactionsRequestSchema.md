# TransactionsRequestSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transactions_request** | [**TransactionsRequest**](TransactionsRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.transactions_request_schema import TransactionsRequestSchema

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionsRequestSchema from a JSON string
transactions_request_schema_instance = TransactionsRequestSchema.from_json(json)
# print the JSON string representation of the object
print(TransactionsRequestSchema.to_json())

# convert the object into a dict
transactions_request_schema_dict = transactions_request_schema_instance.to_dict()
# create an instance of TransactionsRequestSchema from a dict
transactions_request_schema_from_dict = TransactionsRequestSchema.from_dict(transactions_request_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



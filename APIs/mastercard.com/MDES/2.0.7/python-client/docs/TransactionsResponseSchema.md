# TransactionsResponseSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transactions_response** | [**TransactionsResponse**](TransactionsResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.transactions_response_schema import TransactionsResponseSchema

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionsResponseSchema from a JSON string
transactions_response_schema_instance = TransactionsResponseSchema.from_json(json)
# print the JSON string representation of the object
print(TransactionsResponseSchema.to_json())

# convert the object into a dict
transactions_response_schema_dict = transactions_response_schema_instance.to_dict()
# create an instance of TransactionsResponseSchema from a dict
transactions_response_schema_from_dict = TransactionsResponseSchema.from_dict(transactions_response_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



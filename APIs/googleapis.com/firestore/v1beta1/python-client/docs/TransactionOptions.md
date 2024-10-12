# TransactionOptions

Options for creating a new transaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**read_only** | [**ReadOnly**](ReadOnly.md) |  | [optional] 
**read_write** | [**ReadWrite**](ReadWrite.md) |  | [optional] 

## Example

```python
from openapi_client.models.transaction_options import TransactionOptions

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionOptions from a JSON string
transaction_options_instance = TransactionOptions.from_json(json)
# print the JSON string representation of the object
print(TransactionOptions.to_json())

# convert the object into a dict
transaction_options_dict = transaction_options_instance.to_dict()
# create an instance of TransactionOptions from a dict
transaction_options_from_dict = TransactionOptions.from_dict(transaction_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# BeginTransactionResponse

The response for Firestore.BeginTransaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transaction** | **bytearray** | The transaction that was started. | [optional] 

## Example

```python
from openapi_client.models.begin_transaction_response import BeginTransactionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BeginTransactionResponse from a JSON string
begin_transaction_response_instance = BeginTransactionResponse.from_json(json)
# print the JSON string representation of the object
print(BeginTransactionResponse.to_json())

# convert the object into a dict
begin_transaction_response_dict = begin_transaction_response_instance.to_dict()
# create an instance of BeginTransactionResponse from a dict
begin_transaction_response_from_dict = BeginTransactionResponse.from_dict(begin_transaction_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



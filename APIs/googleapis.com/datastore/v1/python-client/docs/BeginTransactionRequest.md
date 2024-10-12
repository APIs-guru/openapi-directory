# BeginTransactionRequest

The request for Datastore.BeginTransaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**database_id** | **str** | The ID of the database against which to make the request. &#39;(default)&#39; is not allowed; please use empty string &#39;&#39; to refer the default database. | [optional] 
**transaction_options** | [**TransactionOptions**](TransactionOptions.md) |  | [optional] 

## Example

```python
from openapi_client.models.begin_transaction_request import BeginTransactionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BeginTransactionRequest from a JSON string
begin_transaction_request_instance = BeginTransactionRequest.from_json(json)
# print the JSON string representation of the object
print(BeginTransactionRequest.to_json())

# convert the object into a dict
begin_transaction_request_dict = begin_transaction_request_instance.to_dict()
# create an instance of BeginTransactionRequest from a dict
begin_transaction_request_from_dict = BeginTransactionRequest.from_dict(begin_transaction_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



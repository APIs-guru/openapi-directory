# TransactionsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audit_info** | [**AuditInfo**](AuditInfo.md) |  | 
**token_unique_reference** | **str** | The TokenUniqueReference of the token. | 

## Example

```python
from openapi_client.models.transactions_request import TransactionsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionsRequest from a JSON string
transactions_request_instance = TransactionsRequest.from_json(json)
# print the JSON string representation of the object
print(TransactionsRequest.to_json())

# convert the object into a dict
transactions_request_dict = transactions_request_instance.to_dict()
# create an instance of TransactionsRequest from a dict
transactions_request_from_dict = TransactionsRequest.from_dict(transactions_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



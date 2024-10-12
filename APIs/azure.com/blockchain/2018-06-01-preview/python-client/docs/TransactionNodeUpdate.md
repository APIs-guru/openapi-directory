# TransactionNodeUpdate

Update the transaction node payload which is exposed in the request/response of the resource provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**TransactionNodePropertiesUpdate**](TransactionNodePropertiesUpdate.md) |  | [optional] 

## Example

```python
from openapi_client.models.transaction_node_update import TransactionNodeUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionNodeUpdate from a JSON string
transaction_node_update_instance = TransactionNodeUpdate.from_json(json)
# print the JSON string representation of the object
print(TransactionNodeUpdate.to_json())

# convert the object into a dict
transaction_node_update_dict = transaction_node_update_instance.to_dict()
# create an instance of TransactionNodeUpdate from a dict
transaction_node_update_from_dict = TransactionNodeUpdate.from_dict(transaction_node_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# TransactionNode

Payload of the transaction node which is the request/response of the resource provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Gets or sets the transaction node location. | [optional] 
**properties** | [**TransactionNodeProperties**](TransactionNodeProperties.md) |  | [optional] 
**id** | **str** | Fully qualified resource Id of the resource. | [optional] [readonly] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**type** | **str** | The type of the service - e.g. \&quot;Microsoft.Blockchain\&quot; | [optional] [readonly] 

## Example

```python
from openapi_client.models.transaction_node import TransactionNode

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionNode from a JSON string
transaction_node_instance = TransactionNode.from_json(json)
# print the JSON string representation of the object
print(TransactionNode.to_json())

# convert the object into a dict
transaction_node_dict = transaction_node_instance.to_dict()
# create an instance of TransactionNode from a dict
transaction_node_from_dict = TransactionNode.from_dict(transaction_node_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# TransactionNodeCollection

Collection of transaction node payload which is exposed in the request/response of the resource provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets or sets the URL, that the client should use to fetch the next page (per server side paging).  It&#39;s null for now, added for future use. | [optional] 
**value** | [**List[TransactionNode]**](TransactionNode.md) | Gets or sets the collection of transaction nodes. | [optional] 

## Example

```python
from openapi_client.models.transaction_node_collection import TransactionNodeCollection

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionNodeCollection from a JSON string
transaction_node_collection_instance = TransactionNodeCollection.from_json(json)
# print the JSON string representation of the object
print(TransactionNodeCollection.to_json())

# convert the object into a dict
transaction_node_collection_dict = transaction_node_collection_instance.to_dict()
# create an instance of TransactionNodeCollection from a dict
transaction_node_collection_from_dict = TransactionNodeCollection.from_dict(transaction_node_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



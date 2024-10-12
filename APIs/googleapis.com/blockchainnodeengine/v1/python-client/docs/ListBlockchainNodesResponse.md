# ListBlockchainNodesResponse

Message for response to listing blockchain nodes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blockchain_nodes** | [**List[BlockchainNode]**](BlockchainNode.md) | The list of nodes | [optional] 
**next_page_token** | **str** | A token identifying a page of results the server should return. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_blockchain_nodes_response import ListBlockchainNodesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListBlockchainNodesResponse from a JSON string
list_blockchain_nodes_response_instance = ListBlockchainNodesResponse.from_json(json)
# print the JSON string representation of the object
print(ListBlockchainNodesResponse.to_json())

# convert the object into a dict
list_blockchain_nodes_response_dict = list_blockchain_nodes_response_instance.to_dict()
# create an instance of ListBlockchainNodesResponse from a dict
list_blockchain_nodes_response_from_dict = ListBlockchainNodesResponse.from_dict(list_blockchain_nodes_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# NodeHealthStateChunkList

The list of node health state chunks in the cluster that respect the input filters in the chunk query. Returned by get cluster health state chunks query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_count** | **int** | Total number of entity health state objects that match the specified filters from the cluster health chunk query description. | [optional] 
**items** | [**List[NodeHealthStateChunk]**](NodeHealthStateChunk.md) | The list of node health state chunks that respect the input filters in the chunk query. | [optional] 

## Example

```python
from openapi_client.models.node_health_state_chunk_list import NodeHealthStateChunkList

# TODO update the JSON string below
json = "{}"
# create an instance of NodeHealthStateChunkList from a JSON string
node_health_state_chunk_list_instance = NodeHealthStateChunkList.from_json(json)
# print the JSON string representation of the object
print(NodeHealthStateChunkList.to_json())

# convert the object into a dict
node_health_state_chunk_list_dict = node_health_state_chunk_list_instance.to_dict()
# create an instance of NodeHealthStateChunkList from a dict
node_health_state_chunk_list_from_dict = NodeHealthStateChunkList.from_dict(node_health_state_chunk_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



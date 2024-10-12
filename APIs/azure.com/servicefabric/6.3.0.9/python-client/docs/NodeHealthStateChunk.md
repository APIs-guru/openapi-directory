# NodeHealthStateChunk

Represents the health state chunk of a node, which contains the node name and its aggregated health state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**health_state** | [**HealthState**](HealthState.md) |  | [optional] 
**node_name** | **str** | The name of a Service Fabric node. | [optional] 

## Example

```python
from openapi_client.models.node_health_state_chunk import NodeHealthStateChunk

# TODO update the JSON string below
json = "{}"
# create an instance of NodeHealthStateChunk from a JSON string
node_health_state_chunk_instance = NodeHealthStateChunk.from_json(json)
# print the JSON string representation of the object
print(NodeHealthStateChunk.to_json())

# convert the object into a dict
node_health_state_chunk_dict = node_health_state_chunk_instance.to_dict()
# create an instance of NodeHealthStateChunk from a dict
node_health_state_chunk_from_dict = NodeHealthStateChunk.from_dict(node_health_state_chunk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



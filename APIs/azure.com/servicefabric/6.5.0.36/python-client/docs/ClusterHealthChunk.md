# ClusterHealthChunk

Represents the health chunk of the cluster. Contains the cluster aggregated health state, and the cluster entities that respect the input filter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_health_state_chunks** | [**ApplicationHealthStateChunkList**](ApplicationHealthStateChunkList.md) |  | [optional] 
**health_state** | [**HealthState**](HealthState.md) |  | [optional] 
**node_health_state_chunks** | [**NodeHealthStateChunkList**](NodeHealthStateChunkList.md) |  | [optional] 

## Example

```python
from openapi_client.models.cluster_health_chunk import ClusterHealthChunk

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterHealthChunk from a JSON string
cluster_health_chunk_instance = ClusterHealthChunk.from_json(json)
# print the JSON string representation of the object
print(ClusterHealthChunk.to_json())

# convert the object into a dict
cluster_health_chunk_dict = cluster_health_chunk_instance.to_dict()
# create an instance of ClusterHealthChunk from a dict
cluster_health_chunk_from_dict = ClusterHealthChunk.from_dict(cluster_health_chunk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



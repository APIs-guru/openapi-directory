# ReplicaHealthStateChunkList

The list of replica health state chunks that respect the input filters in the chunk query. Returned by get cluster health state chunks query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[ReplicaHealthStateChunk]**](ReplicaHealthStateChunk.md) | The list of replica health state chunks that respect the input filters in the chunk query. | [optional] 

## Example

```python
from openapi_client.models.replica_health_state_chunk_list import ReplicaHealthStateChunkList

# TODO update the JSON string below
json = "{}"
# create an instance of ReplicaHealthStateChunkList from a JSON string
replica_health_state_chunk_list_instance = ReplicaHealthStateChunkList.from_json(json)
# print the JSON string representation of the object
print(ReplicaHealthStateChunkList.to_json())

# convert the object into a dict
replica_health_state_chunk_list_dict = replica_health_state_chunk_list_instance.to_dict()
# create an instance of ReplicaHealthStateChunkList from a dict
replica_health_state_chunk_list_from_dict = ReplicaHealthStateChunkList.from_dict(replica_health_state_chunk_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ServiceHealthStateChunk

Represents the health state chunk of a service, which contains the service name, its aggregated health state and any partitions that respect the filters in the cluster health chunk query description.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**partition_health_state_chunks** | [**PartitionHealthStateChunkList**](PartitionHealthStateChunkList.md) |  | [optional] 
**service_name** | **str** | The full name of the service with &#39;fabric:&#39; URI scheme. | [optional] 
**health_state** | [**HealthState**](HealthState.md) |  | [optional] 

## Example

```python
from openapi_client.models.service_health_state_chunk import ServiceHealthStateChunk

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceHealthStateChunk from a JSON string
service_health_state_chunk_instance = ServiceHealthStateChunk.from_json(json)
# print the JSON string representation of the object
print(ServiceHealthStateChunk.to_json())

# convert the object into a dict
service_health_state_chunk_dict = service_health_state_chunk_instance.to_dict()
# create an instance of ServiceHealthStateChunk from a dict
service_health_state_chunk_from_dict = ServiceHealthStateChunk.from_dict(service_health_state_chunk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



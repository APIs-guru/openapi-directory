# ServiceHealthStateChunkList

The list of service health state chunks that respect the input filters in the chunk query. Returned by get cluster health state chunks query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[ServiceHealthStateChunk]**](ServiceHealthStateChunk.md) | The list of service health state chunks that respect the input filters in the chunk query. | [optional] 

## Example

```python
from openapi_client.models.service_health_state_chunk_list import ServiceHealthStateChunkList

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceHealthStateChunkList from a JSON string
service_health_state_chunk_list_instance = ServiceHealthStateChunkList.from_json(json)
# print the JSON string representation of the object
print(ServiceHealthStateChunkList.to_json())

# convert the object into a dict
service_health_state_chunk_list_dict = service_health_state_chunk_list_instance.to_dict()
# create an instance of ServiceHealthStateChunkList from a dict
service_health_state_chunk_list_from_dict = ServiceHealthStateChunkList.from_dict(service_health_state_chunk_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# EntityHealthStateChunk

A base type for the health state chunk of various entities in the cluster. It contains the aggregated health state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**health_state** | [**HealthState**](HealthState.md) |  | [optional] 

## Example

```python
from openapi_client.models.entity_health_state_chunk import EntityHealthStateChunk

# TODO update the JSON string below
json = "{}"
# create an instance of EntityHealthStateChunk from a JSON string
entity_health_state_chunk_instance = EntityHealthStateChunk.from_json(json)
# print the JSON string representation of the object
print(EntityHealthStateChunk.to_json())

# convert the object into a dict
entity_health_state_chunk_dict = entity_health_state_chunk_instance.to_dict()
# create an instance of EntityHealthStateChunk from a dict
entity_health_state_chunk_from_dict = EntityHealthStateChunk.from_dict(entity_health_state_chunk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



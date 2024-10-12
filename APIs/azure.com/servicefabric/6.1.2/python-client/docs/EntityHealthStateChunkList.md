# EntityHealthStateChunkList

A base type for the list of health state chunks found in the cluster. It contains the total number of health states that match the input filters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_count** | **int** | Total number of entity health state objects that match the specified filters from the cluster health chunk query description.  | [optional] 

## Example

```python
from openapi_client.models.entity_health_state_chunk_list import EntityHealthStateChunkList

# TODO update the JSON string below
json = "{}"
# create an instance of EntityHealthStateChunkList from a JSON string
entity_health_state_chunk_list_instance = EntityHealthStateChunkList.from_json(json)
# print the JSON string representation of the object
print(EntityHealthStateChunkList.to_json())

# convert the object into a dict
entity_health_state_chunk_list_dict = entity_health_state_chunk_list_instance.to_dict()
# create an instance of EntityHealthStateChunkList from a dict
entity_health_state_chunk_list_from_dict = EntityHealthStateChunkList.from_dict(entity_health_state_chunk_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



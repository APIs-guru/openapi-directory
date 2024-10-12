# MapNodes

The nodes (entities) of a map.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_groups** | [**List[ClientGroup]**](ClientGroup.md) | Client Group resources. | [optional] 
**machines** | [**List[Machine]**](Machine.md) | Machine resources. | [optional] 
**ports** | [**List[Port]**](Port.md) | Port resources. | [optional] 
**processes** | [**List[Process]**](Process.md) | Process resources. | [optional] 

## Example

```python
from openapi_client.models.map_nodes import MapNodes

# TODO update the JSON string below
json = "{}"
# create an instance of MapNodes from a JSON string
map_nodes_instance = MapNodes.from_json(json)
# print the JSON string representation of the object
print(MapNodes.to_json())

# convert the object into a dict
map_nodes_dict = map_nodes_instance.to_dict()
# create an instance of MapNodes from a dict
map_nodes_from_dict = MapNodes.from_dict(map_nodes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



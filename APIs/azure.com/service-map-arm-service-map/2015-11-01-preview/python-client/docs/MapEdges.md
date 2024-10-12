# MapEdges

The edges (relationships) of a map.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acceptors** | [**List[Acceptor]**](Acceptor.md) | Processes accepting on a port. | [optional] 
**connections** | [**List[Connection]**](Connection.md) | Network connections. | [optional] 

## Example

```python
from openapi_client.models.map_edges import MapEdges

# TODO update the JSON string below
json = "{}"
# create an instance of MapEdges from a JSON string
map_edges_instance = MapEdges.from_json(json)
# print the JSON string representation of the object
print(MapEdges.to_json())

# convert the object into a dict
map_edges_dict = map_edges_instance.to_dict()
# create an instance of MapEdges from a dict
map_edges_from_dict = MapEdges.from_dict(map_edges_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



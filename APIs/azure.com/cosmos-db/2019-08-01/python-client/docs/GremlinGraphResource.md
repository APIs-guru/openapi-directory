# GremlinGraphResource

Cosmos DB Gremlin graph resource object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conflict_resolution_policy** | [**ConflictResolutionPolicy**](ConflictResolutionPolicy.md) |  | [optional] 
**default_ttl** | **int** | Default time to live | [optional] 
**id** | **str** | Name of the Cosmos DB Gremlin graph | 
**indexing_policy** | [**IndexingPolicy**](IndexingPolicy.md) |  | [optional] 
**partition_key** | [**ContainerPartitionKey**](ContainerPartitionKey.md) |  | [optional] 
**unique_key_policy** | [**UniqueKeyPolicy**](UniqueKeyPolicy.md) |  | [optional] 

## Example

```python
from openapi_client.models.gremlin_graph_resource import GremlinGraphResource

# TODO update the JSON string below
json = "{}"
# create an instance of GremlinGraphResource from a JSON string
gremlin_graph_resource_instance = GremlinGraphResource.from_json(json)
# print the JSON string representation of the object
print(GremlinGraphResource.to_json())

# convert the object into a dict
gremlin_graph_resource_dict = gremlin_graph_resource_instance.to_dict()
# create an instance of GremlinGraphResource from a dict
gremlin_graph_resource_from_dict = GremlinGraphResource.from_dict(gremlin_graph_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



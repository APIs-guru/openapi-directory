# GremlinGraphProperties

The properties of an Azure Cosmos DB Gremlin graph

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conflict_resolution_policy** | [**ConflictResolutionPolicy**](ConflictResolutionPolicy.md) |  | [optional] 
**default_ttl** | **int** | Default time to live | [optional] 
**id** | **str** | Name of the Cosmos DB Gremlin graph | 
**indexing_policy** | [**IndexingPolicy**](IndexingPolicy.md) |  | [optional] 
**partition_key** | [**ContainerPartitionKey**](ContainerPartitionKey.md) |  | [optional] 
**unique_key_policy** | [**UniqueKeyPolicy**](UniqueKeyPolicy.md) |  | [optional] 
**etag** | **str** | A system generated property representing the resource etag required for optimistic concurrency control. | [optional] 
**rid** | **str** | A system generated property. A unique identifier. | [optional] 
**ts** | **object** | A system generated property that denotes the last updated timestamp of the resource. | [optional] 

## Example

```python
from openapi_client.models.gremlin_graph_properties import GremlinGraphProperties

# TODO update the JSON string below
json = "{}"
# create an instance of GremlinGraphProperties from a JSON string
gremlin_graph_properties_instance = GremlinGraphProperties.from_json(json)
# print the JSON string representation of the object
print(GremlinGraphProperties.to_json())

# convert the object into a dict
gremlin_graph_properties_dict = gremlin_graph_properties_instance.to_dict()
# create an instance of GremlinGraphProperties from a dict
gremlin_graph_properties_from_dict = GremlinGraphProperties.from_dict(gremlin_graph_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



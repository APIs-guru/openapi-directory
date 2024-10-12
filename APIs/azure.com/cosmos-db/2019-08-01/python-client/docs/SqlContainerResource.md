# SqlContainerResource

Cosmos DB SQL container resource object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conflict_resolution_policy** | [**ConflictResolutionPolicy**](ConflictResolutionPolicy.md) |  | [optional] 
**default_ttl** | **int** | Default time to live | [optional] 
**id** | **str** | Name of the Cosmos DB SQL container | 
**indexing_policy** | [**IndexingPolicy**](IndexingPolicy.md) |  | [optional] 
**partition_key** | [**ContainerPartitionKey**](ContainerPartitionKey.md) |  | [optional] 
**unique_key_policy** | [**UniqueKeyPolicy**](UniqueKeyPolicy.md) |  | [optional] 

## Example

```python
from openapi_client.models.sql_container_resource import SqlContainerResource

# TODO update the JSON string below
json = "{}"
# create an instance of SqlContainerResource from a JSON string
sql_container_resource_instance = SqlContainerResource.from_json(json)
# print the JSON string representation of the object
print(SqlContainerResource.to_json())

# convert the object into a dict
sql_container_resource_dict = sql_container_resource_instance.to_dict()
# create an instance of SqlContainerResource from a dict
sql_container_resource_from_dict = SqlContainerResource.from_dict(sql_container_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



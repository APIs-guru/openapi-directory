# SqlContainerGetPropertiesResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conflict_resolution_policy** | [**ConflictResolutionPolicy**](ConflictResolutionPolicy.md) |  | [optional] 
**default_ttl** | **int** | Default time to live | [optional] 
**id** | **str** | Name of the Cosmos DB SQL container | 
**indexing_policy** | [**IndexingPolicy**](IndexingPolicy.md) |  | [optional] 
**partition_key** | [**ContainerPartitionKey**](ContainerPartitionKey.md) |  | [optional] 
**unique_key_policy** | [**UniqueKeyPolicy**](UniqueKeyPolicy.md) |  | [optional] 
**etag** | **str** | A system generated property representing the resource etag required for optimistic concurrency control. | [optional] [readonly] 
**rid** | **str** | A system generated property. A unique identifier. | [optional] [readonly] 
**ts** | **object** | A system generated property that denotes the last updated timestamp of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sql_container_get_properties_resource import SqlContainerGetPropertiesResource

# TODO update the JSON string below
json = "{}"
# create an instance of SqlContainerGetPropertiesResource from a JSON string
sql_container_get_properties_resource_instance = SqlContainerGetPropertiesResource.from_json(json)
# print the JSON string representation of the object
print(SqlContainerGetPropertiesResource.to_json())

# convert the object into a dict
sql_container_get_properties_resource_dict = sql_container_get_properties_resource_instance.to_dict()
# create an instance of SqlContainerGetPropertiesResource from a dict
sql_container_get_properties_resource_from_dict = SqlContainerGetPropertiesResource.from_dict(sql_container_get_properties_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



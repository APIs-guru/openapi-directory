# SqlContainerProperties

The properties of an Azure Cosmos DB container

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conflict_resolution_policy** | [**ConflictResolutionPolicy**](ConflictResolutionPolicy.md) |  | [optional] 
**default_ttl** | **int** | Default time to live | [optional] 
**id** | **str** | Name of the Cosmos DB SQL container | 
**indexing_policy** | [**IndexingPolicy**](IndexingPolicy.md) |  | [optional] 
**partition_key** | [**ContainerPartitionKey**](ContainerPartitionKey.md) |  | [optional] 
**unique_key_policy** | [**UniqueKeyPolicy**](UniqueKeyPolicy.md) |  | [optional] 
**etag** | **str** | A system generated property representing the resource etag required for optimistic concurrency control. | [optional] 
**rid** | **str** | A system generated property. A unique identifier. | [optional] 
**ts** | **object** | A system generated property that denotes the last updated timestamp of the resource. | [optional] 

## Example

```python
from openapi_client.models.sql_container_properties import SqlContainerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SqlContainerProperties from a JSON string
sql_container_properties_instance = SqlContainerProperties.from_json(json)
# print the JSON string representation of the object
print(SqlContainerProperties.to_json())

# convert the object into a dict
sql_container_properties_dict = sql_container_properties_instance.to_dict()
# create an instance of SqlContainerProperties from a dict
sql_container_properties_from_dict = SqlContainerProperties.from_dict(sql_container_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



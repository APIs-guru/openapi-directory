# CassandraTableGetPropertiesResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_ttl** | **int** | Time to live of the Cosmos DB Cassandra table | [optional] 
**id** | **str** | Name of the Cosmos DB Cassandra table | 
**var_schema** | [**CassandraSchema**](CassandraSchema.md) |  | [optional] 
**etag** | **str** | A system generated property representing the resource etag required for optimistic concurrency control. | [optional] [readonly] 
**rid** | **str** | A system generated property. A unique identifier. | [optional] [readonly] 
**ts** | **object** | A system generated property that denotes the last updated timestamp of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.cassandra_table_get_properties_resource import CassandraTableGetPropertiesResource

# TODO update the JSON string below
json = "{}"
# create an instance of CassandraTableGetPropertiesResource from a JSON string
cassandra_table_get_properties_resource_instance = CassandraTableGetPropertiesResource.from_json(json)
# print the JSON string representation of the object
print(CassandraTableGetPropertiesResource.to_json())

# convert the object into a dict
cassandra_table_get_properties_resource_dict = cassandra_table_get_properties_resource_instance.to_dict()
# create an instance of CassandraTableGetPropertiesResource from a dict
cassandra_table_get_properties_resource_from_dict = CassandraTableGetPropertiesResource.from_dict(cassandra_table_get_properties_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



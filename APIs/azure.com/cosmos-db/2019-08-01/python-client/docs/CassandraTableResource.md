# CassandraTableResource

Cosmos DB Cassandra table resource object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_ttl** | **int** | Time to live of the Cosmos DB Cassandra table | [optional] 
**id** | **str** | Name of the Cosmos DB Cassandra table | 
**var_schema** | [**CassandraSchema**](CassandraSchema.md) |  | [optional] 

## Example

```python
from openapi_client.models.cassandra_table_resource import CassandraTableResource

# TODO update the JSON string below
json = "{}"
# create an instance of CassandraTableResource from a JSON string
cassandra_table_resource_instance = CassandraTableResource.from_json(json)
# print the JSON string representation of the object
print(CassandraTableResource.to_json())

# convert the object into a dict
cassandra_table_resource_dict = cassandra_table_resource_instance.to_dict()
# create an instance of CassandraTableResource from a dict
cassandra_table_resource_from_dict = CassandraTableResource.from_dict(cassandra_table_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# CassandraSchema

Cosmos DB Cassandra table schema

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_keys** | [**List[ClusterKey]**](ClusterKey.md) | List of cluster key. | [optional] 
**columns** | [**List[Column]**](Column.md) | List of Cassandra table columns. | [optional] 
**partition_keys** | [**List[CassandraPartitionKey]**](CassandraPartitionKey.md) | List of partition key. | [optional] 

## Example

```python
from openapi_client.models.cassandra_schema import CassandraSchema

# TODO update the JSON string below
json = "{}"
# create an instance of CassandraSchema from a JSON string
cassandra_schema_instance = CassandraSchema.from_json(json)
# print the JSON string representation of the object
print(CassandraSchema.to_json())

# convert the object into a dict
cassandra_schema_dict = cassandra_schema_instance.to_dict()
# create an instance of CassandraSchema from a dict
cassandra_schema_from_dict = CassandraSchema.from_dict(cassandra_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



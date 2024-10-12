# CassandraKeyspaceProperties

The properties of an Azure Cosmos DB Cassandra keyspace

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Name of the Cosmos DB Cassandra keyspace | 

## Example

```python
from openapi_client.models.cassandra_keyspace_properties import CassandraKeyspaceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CassandraKeyspaceProperties from a JSON string
cassandra_keyspace_properties_instance = CassandraKeyspaceProperties.from_json(json)
# print the JSON string representation of the object
print(CassandraKeyspaceProperties.to_json())

# convert the object into a dict
cassandra_keyspace_properties_dict = cassandra_keyspace_properties_instance.to_dict()
# create an instance of CassandraKeyspaceProperties from a dict
cassandra_keyspace_properties_from_dict = CassandraKeyspaceProperties.from_dict(cassandra_keyspace_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



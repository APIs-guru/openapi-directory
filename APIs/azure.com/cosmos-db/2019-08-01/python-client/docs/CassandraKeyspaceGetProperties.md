# CassandraKeyspaceGetProperties

The properties of an Azure Cosmos DB Cassandra keyspace

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource** | [**CassandraKeyspaceGetPropertiesResource**](CassandraKeyspaceGetPropertiesResource.md) |  | [optional] 

## Example

```python
from openapi_client.models.cassandra_keyspace_get_properties import CassandraKeyspaceGetProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CassandraKeyspaceGetProperties from a JSON string
cassandra_keyspace_get_properties_instance = CassandraKeyspaceGetProperties.from_json(json)
# print the JSON string representation of the object
print(CassandraKeyspaceGetProperties.to_json())

# convert the object into a dict
cassandra_keyspace_get_properties_dict = cassandra_keyspace_get_properties_instance.to_dict()
# create an instance of CassandraKeyspaceGetProperties from a dict
cassandra_keyspace_get_properties_from_dict = CassandraKeyspaceGetProperties.from_dict(cassandra_keyspace_get_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



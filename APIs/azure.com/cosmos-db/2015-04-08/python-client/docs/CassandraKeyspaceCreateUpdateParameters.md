# CassandraKeyspaceCreateUpdateParameters

Parameters to create and update Cosmos DB Cassandra keyspace.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**CassandraKeyspaceCreateUpdateProperties**](CassandraKeyspaceCreateUpdateProperties.md) |  | 

## Example

```python
from openapi_client.models.cassandra_keyspace_create_update_parameters import CassandraKeyspaceCreateUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of CassandraKeyspaceCreateUpdateParameters from a JSON string
cassandra_keyspace_create_update_parameters_instance = CassandraKeyspaceCreateUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(CassandraKeyspaceCreateUpdateParameters.to_json())

# convert the object into a dict
cassandra_keyspace_create_update_parameters_dict = cassandra_keyspace_create_update_parameters_instance.to_dict()
# create an instance of CassandraKeyspaceCreateUpdateParameters from a dict
cassandra_keyspace_create_update_parameters_from_dict = CassandraKeyspaceCreateUpdateParameters.from_dict(cassandra_keyspace_create_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



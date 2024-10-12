# CassandraKeyspaceResource

Cosmos DB Cassandra keyspace resource object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Name of the Cosmos DB Cassandra keyspace | 

## Example

```python
from openapi_client.models.cassandra_keyspace_resource import CassandraKeyspaceResource

# TODO update the JSON string below
json = "{}"
# create an instance of CassandraKeyspaceResource from a JSON string
cassandra_keyspace_resource_instance = CassandraKeyspaceResource.from_json(json)
# print the JSON string representation of the object
print(CassandraKeyspaceResource.to_json())

# convert the object into a dict
cassandra_keyspace_resource_dict = cassandra_keyspace_resource_instance.to_dict()
# create an instance of CassandraKeyspaceResource from a dict
cassandra_keyspace_resource_from_dict = CassandraKeyspaceResource.from_dict(cassandra_keyspace_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



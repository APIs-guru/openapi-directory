# CassandraKeyspaceCreateUpdateProperties

Properties to create and update Azure Cosmos DB Cassandra keyspace.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**options** | **Dict[str, str]** | CreateUpdateOptions are a list of key-value pairs that describe the resource. Supported keys are \&quot;If-Match\&quot;, \&quot;If-None-Match\&quot;, \&quot;Session-Token\&quot; and \&quot;Throughput\&quot; | 
**resource** | [**CassandraKeyspaceResource**](CassandraKeyspaceResource.md) |  | 

## Example

```python
from openapi_client.models.cassandra_keyspace_create_update_properties import CassandraKeyspaceCreateUpdateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CassandraKeyspaceCreateUpdateProperties from a JSON string
cassandra_keyspace_create_update_properties_instance = CassandraKeyspaceCreateUpdateProperties.from_json(json)
# print the JSON string representation of the object
print(CassandraKeyspaceCreateUpdateProperties.to_json())

# convert the object into a dict
cassandra_keyspace_create_update_properties_dict = cassandra_keyspace_create_update_properties_instance.to_dict()
# create an instance of CassandraKeyspaceCreateUpdateProperties from a dict
cassandra_keyspace_create_update_properties_from_dict = CassandraKeyspaceCreateUpdateProperties.from_dict(cassandra_keyspace_create_update_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



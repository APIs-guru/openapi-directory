# CassandraTableCreateUpdateProperties

Properties to create and update Azure Cosmos DB Cassandra table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**options** | **Dict[str, str]** | CreateUpdateOptions are a list of key-value pairs that describe the resource. Supported keys are \&quot;If-Match\&quot;, \&quot;If-None-Match\&quot;, \&quot;Session-Token\&quot; and \&quot;Throughput\&quot; | 
**resource** | [**CassandraTableResource**](CassandraTableResource.md) |  | 

## Example

```python
from openapi_client.models.cassandra_table_create_update_properties import CassandraTableCreateUpdateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CassandraTableCreateUpdateProperties from a JSON string
cassandra_table_create_update_properties_instance = CassandraTableCreateUpdateProperties.from_json(json)
# print the JSON string representation of the object
print(CassandraTableCreateUpdateProperties.to_json())

# convert the object into a dict
cassandra_table_create_update_properties_dict = cassandra_table_create_update_properties_instance.to_dict()
# create an instance of CassandraTableCreateUpdateProperties from a dict
cassandra_table_create_update_properties_from_dict = CassandraTableCreateUpdateProperties.from_dict(cassandra_table_create_update_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



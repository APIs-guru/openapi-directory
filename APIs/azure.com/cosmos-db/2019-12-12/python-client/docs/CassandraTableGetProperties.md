# CassandraTableGetProperties

The properties of an Azure Cosmos DB Cassandra table

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource** | [**CassandraTableGetPropertiesResource**](CassandraTableGetPropertiesResource.md) |  | [optional] 

## Example

```python
from openapi_client.models.cassandra_table_get_properties import CassandraTableGetProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CassandraTableGetProperties from a JSON string
cassandra_table_get_properties_instance = CassandraTableGetProperties.from_json(json)
# print the JSON string representation of the object
print(CassandraTableGetProperties.to_json())

# convert the object into a dict
cassandra_table_get_properties_dict = cassandra_table_get_properties_instance.to_dict()
# create an instance of CassandraTableGetProperties from a dict
cassandra_table_get_properties_from_dict = CassandraTableGetProperties.from_dict(cassandra_table_get_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



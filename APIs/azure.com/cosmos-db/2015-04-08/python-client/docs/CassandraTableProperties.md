# CassandraTableProperties

The properties of an Azure Cosmos DB Cassandra table

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_ttl** | **int** | Time to live of the Cosmos DB Cassandra table | [optional] 
**id** | **str** | Name of the Cosmos DB Cassandra table | 
**var_schema** | [**CassandraSchema**](CassandraSchema.md) |  | [optional] 

## Example

```python
from openapi_client.models.cassandra_table_properties import CassandraTableProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CassandraTableProperties from a JSON string
cassandra_table_properties_instance = CassandraTableProperties.from_json(json)
# print the JSON string representation of the object
print(CassandraTableProperties.to_json())

# convert the object into a dict
cassandra_table_properties_dict = cassandra_table_properties_instance.to_dict()
# create an instance of CassandraTableProperties from a dict
cassandra_table_properties_from_dict = CassandraTableProperties.from_dict(cassandra_table_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



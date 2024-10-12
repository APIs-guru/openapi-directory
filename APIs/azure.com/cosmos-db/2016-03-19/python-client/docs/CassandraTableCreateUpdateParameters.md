# CassandraTableCreateUpdateParameters

Parameters to create and update Cosmos DB Cassandra table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**CassandraTableCreateUpdateProperties**](CassandraTableCreateUpdateProperties.md) |  | 

## Example

```python
from openapi_client.models.cassandra_table_create_update_parameters import CassandraTableCreateUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of CassandraTableCreateUpdateParameters from a JSON string
cassandra_table_create_update_parameters_instance = CassandraTableCreateUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(CassandraTableCreateUpdateParameters.to_json())

# convert the object into a dict
cassandra_table_create_update_parameters_dict = cassandra_table_create_update_parameters_instance.to_dict()
# create an instance of CassandraTableCreateUpdateParameters from a dict
cassandra_table_create_update_parameters_from_dict = CassandraTableCreateUpdateParameters.from_dict(cassandra_table_create_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



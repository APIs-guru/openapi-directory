# CassandraKeyspaceListResult

The List operation response, that contains the Cassandra keyspaces and their properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[CassandraKeyspaceGetResults]**](CassandraKeyspaceGetResults.md) | List of Cassandra keyspaces and their properties. | [optional] [readonly] 

## Example

```python
from openapi_client.models.cassandra_keyspace_list_result import CassandraKeyspaceListResult

# TODO update the JSON string below
json = "{}"
# create an instance of CassandraKeyspaceListResult from a JSON string
cassandra_keyspace_list_result_instance = CassandraKeyspaceListResult.from_json(json)
# print the JSON string representation of the object
print(CassandraKeyspaceListResult.to_json())

# convert the object into a dict
cassandra_keyspace_list_result_dict = cassandra_keyspace_list_result_instance.to_dict()
# create an instance of CassandraKeyspaceListResult from a dict
cassandra_keyspace_list_result_from_dict = CassandraKeyspaceListResult.from_dict(cassandra_keyspace_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



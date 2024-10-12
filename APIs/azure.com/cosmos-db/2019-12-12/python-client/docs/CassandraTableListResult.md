# CassandraTableListResult

The List operation response, that contains the Cassandra tables and their properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[CassandraTableGetResults]**](CassandraTableGetResults.md) | List of Cassandra tables and their properties. | [optional] [readonly] 

## Example

```python
from openapi_client.models.cassandra_table_list_result import CassandraTableListResult

# TODO update the JSON string below
json = "{}"
# create an instance of CassandraTableListResult from a JSON string
cassandra_table_list_result_instance = CassandraTableListResult.from_json(json)
# print the JSON string representation of the object
print(CassandraTableListResult.to_json())

# convert the object into a dict
cassandra_table_list_result_dict = cassandra_table_list_result_instance.to_dict()
# create an instance of CassandraTableListResult from a dict
cassandra_table_list_result_from_dict = CassandraTableListResult.from_dict(cassandra_table_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



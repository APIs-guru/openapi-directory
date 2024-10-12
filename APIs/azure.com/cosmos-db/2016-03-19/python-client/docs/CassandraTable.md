# CassandraTable

An Azure Cosmos DB Cassandra table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**CassandraTableProperties**](CassandraTableProperties.md) |  | [optional] 
**id** | **str** | The unique resource identifier of the database account. | [optional] [readonly] 
**location** | **str** | The location of the resource group to which the resource belongs. | [optional] 
**name** | **str** | The name of the database account. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with \&quot;defaultExperience\&quot;: \&quot;Cassandra\&quot;. Current \&quot;defaultExperience\&quot; values also include \&quot;Table\&quot;, \&quot;Graph\&quot;, \&quot;DocumentDB\&quot;, and \&quot;MongoDB\&quot;. | [optional] 
**type** | **str** | The type of Azure resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.cassandra_table import CassandraTable

# TODO update the JSON string below
json = "{}"
# create an instance of CassandraTable from a JSON string
cassandra_table_instance = CassandraTable.from_json(json)
# print the JSON string representation of the object
print(CassandraTable.to_json())

# convert the object into a dict
cassandra_table_dict = cassandra_table_instance.to_dict()
# create an instance of CassandraTable from a dict
cassandra_table_from_dict = CassandraTable.from_dict(cassandra_table_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# CassandraTableCreateUpdateParameters

Parameters to create and update Cosmos DB Cassandra table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**CassandraTableCreateUpdateProperties**](CassandraTableCreateUpdateProperties.md) |  | 
**id** | **str** | The unique resource identifier of the ARM resource. | [optional] [readonly] 
**location** | **str** | The location of the resource group to which the resource belongs. | [optional] 
**name** | **str** | The name of the ARM resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with \&quot;defaultExperience\&quot;: \&quot;Cassandra\&quot;. Current \&quot;defaultExperience\&quot; values also include \&quot;Table\&quot;, \&quot;Graph\&quot;, \&quot;DocumentDB\&quot;, and \&quot;MongoDB\&quot;. | [optional] 
**type** | **str** | The type of Azure resource. | [optional] [readonly] 

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



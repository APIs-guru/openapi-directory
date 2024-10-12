# Relation

Represents a database relation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_options** | **Dict[str, str]** | Additional options that will be provided as key/value pairs into the options clause of a create table/view statement. See https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language for more information on which options are supported. | [optional] 
**cluster_expressions** | **List[str]** | A list of columns or SQL expressions used to cluster the table. | [optional] 
**dependency_targets** | [**List[Target]**](Target.md) | A list of actions that this action depends on. | [optional] 
**disabled** | **bool** | Whether this action is disabled (i.e. should not be run). | [optional] 
**incremental_table_config** | [**IncrementalTableConfig**](IncrementalTableConfig.md) |  | [optional] 
**partition_expiration_days** | **int** | Sets the partition expiration in days. | [optional] 
**partition_expression** | **str** | The SQL expression used to partition the relation. | [optional] 
**post_operations** | **List[str]** | SQL statements to be executed after creating the relation. | [optional] 
**pre_operations** | **List[str]** | SQL statements to be executed before creating the relation. | [optional] 
**relation_descriptor** | [**RelationDescriptor**](RelationDescriptor.md) |  | [optional] 
**relation_type** | **str** | The type of this relation. | [optional] 
**require_partition_filter** | **bool** | Specifies whether queries on this table must include a predicate filter that filters on the partitioning column. | [optional] 
**select_query** | **str** | The SELECT query which returns rows which this relation should contain. | [optional] 
**tags** | **List[str]** | Arbitrary, user-defined tags on this action. | [optional] 

## Example

```python
from openapi_client.models.relation import Relation

# TODO update the JSON string below
json = "{}"
# create an instance of Relation from a JSON string
relation_instance = Relation.from_json(json)
# print the JSON string representation of the object
print(Relation.to_json())

# convert the object into a dict
relation_dict = relation_instance.to_dict()
# create an instance of Relation from a dict
relation_from_dict = Relation.from_dict(relation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



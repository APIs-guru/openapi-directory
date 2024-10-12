# TableListTablesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clustering** | [**Clustering**](Clustering.md) |  | [optional] 
**creation_time** | **str** | Output only. The time when this table was created, in milliseconds since the epoch. | [optional] [readonly] 
**expiration_time** | **str** | The time when this table expires, in milliseconds since the epoch. If not present, the table will persist indefinitely. Expired tables will be deleted and their storage reclaimed. | [optional] 
**friendly_name** | **str** | The user-friendly name for this table. | [optional] 
**id** | **str** | An opaque ID of the table. | [optional] 
**kind** | **str** | The resource type. | [optional] 
**labels** | **Dict[str, str]** | The labels associated with this table. You can use these to organize and group your tables. | [optional] 
**range_partitioning** | [**RangePartitioning**](RangePartitioning.md) |  | [optional] 
**require_partition_filter** | **bool** | Optional. If set to true, queries including this table must specify a partition filter. This filter is used for partition elimination. | [optional] [default to False]
**table_reference** | [**TableReference**](TableReference.md) |  | [optional] 
**time_partitioning** | [**TimePartitioning**](TimePartitioning.md) |  | [optional] 
**type** | **str** | The type of table. | [optional] 
**view** | [**TableListTablesInnerView**](TableListTablesInnerView.md) |  | [optional] 

## Example

```python
from openapi_client.models.table_list_tables_inner import TableListTablesInner

# TODO update the JSON string below
json = "{}"
# create an instance of TableListTablesInner from a JSON string
table_list_tables_inner_instance = TableListTablesInner.from_json(json)
# print the JSON string representation of the object
print(TableListTablesInner.to_json())

# convert the object into a dict
table_list_tables_inner_dict = table_list_tables_inner_instance.to_dict()
# create an instance of TableListTablesInner from a dict
table_list_tables_inner_from_dict = TableListTablesInner.from_dict(table_list_tables_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



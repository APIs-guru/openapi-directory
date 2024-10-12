# SyncFullSchemaTableColumn

Properties of the column in the table of database full schema.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_size** | **str** | Data size of the column. | [optional] [readonly] 
**data_type** | **str** | Data type of the column. | [optional] [readonly] 
**error_id** | **str** | Error id of the column. | [optional] [readonly] 
**has_error** | **bool** | If there is error in the table. | [optional] [readonly] 
**is_primary_key** | **bool** | If it is the primary key of the table. | [optional] [readonly] 
**name** | **str** | Name of the column. | [optional] [readonly] 
**quoted_name** | **str** | Quoted name of the column. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sync_full_schema_table_column import SyncFullSchemaTableColumn

# TODO update the JSON string below
json = "{}"
# create an instance of SyncFullSchemaTableColumn from a JSON string
sync_full_schema_table_column_instance = SyncFullSchemaTableColumn.from_json(json)
# print the JSON string representation of the object
print(SyncFullSchemaTableColumn.to_json())

# convert the object into a dict
sync_full_schema_table_column_dict = sync_full_schema_table_column_instance.to_dict()
# create an instance of SyncFullSchemaTableColumn from a dict
sync_full_schema_table_column_from_dict = SyncFullSchemaTableColumn.from_dict(sync_full_schema_table_column_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



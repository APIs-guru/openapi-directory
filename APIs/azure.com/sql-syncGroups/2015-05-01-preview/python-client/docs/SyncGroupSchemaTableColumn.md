# SyncGroupSchemaTableColumn

Properties of column in sync group table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_size** | **str** | Data size of the column. | [optional] 
**data_type** | **str** | Data type of the column. | [optional] 
**quoted_name** | **str** | Quoted name of sync group table column. | [optional] 

## Example

```python
from openapi_client.models.sync_group_schema_table_column import SyncGroupSchemaTableColumn

# TODO update the JSON string below
json = "{}"
# create an instance of SyncGroupSchemaTableColumn from a JSON string
sync_group_schema_table_column_instance = SyncGroupSchemaTableColumn.from_json(json)
# print the JSON string representation of the object
print(SyncGroupSchemaTableColumn.to_json())

# convert the object into a dict
sync_group_schema_table_column_dict = sync_group_schema_table_column_instance.to_dict()
# create an instance of SyncGroupSchemaTableColumn from a dict
sync_group_schema_table_column_from_dict = SyncGroupSchemaTableColumn.from_dict(sync_group_schema_table_column_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



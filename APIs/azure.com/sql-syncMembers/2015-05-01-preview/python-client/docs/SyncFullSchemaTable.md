# SyncFullSchemaTable

Properties of the table in the database full schema.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columns** | [**List[SyncFullSchemaTableColumn]**](SyncFullSchemaTableColumn.md) | List of columns in the table of database full schema. | [optional] [readonly] 
**error_id** | **str** | Error id of the table. | [optional] [readonly] 
**has_error** | **bool** | If there is error in the table. | [optional] [readonly] 
**name** | **str** | Name of the table. | [optional] [readonly] 
**quoted_name** | **str** | Quoted name of the table. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sync_full_schema_table import SyncFullSchemaTable

# TODO update the JSON string below
json = "{}"
# create an instance of SyncFullSchemaTable from a JSON string
sync_full_schema_table_instance = SyncFullSchemaTable.from_json(json)
# print the JSON string representation of the object
print(SyncFullSchemaTable.to_json())

# convert the object into a dict
sync_full_schema_table_dict = sync_full_schema_table_instance.to_dict()
# create an instance of SyncFullSchemaTable from a dict
sync_full_schema_table_from_dict = SyncFullSchemaTable.from_dict(sync_full_schema_table_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



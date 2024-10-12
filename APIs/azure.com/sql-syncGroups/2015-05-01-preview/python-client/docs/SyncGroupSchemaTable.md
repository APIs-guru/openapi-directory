# SyncGroupSchemaTable

Properties of table in sync group schema.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columns** | [**List[SyncGroupSchemaTableColumn]**](SyncGroupSchemaTableColumn.md) | List of columns in sync group schema. | [optional] 
**quoted_name** | **str** | Quoted name of sync group schema table. | [optional] 

## Example

```python
from openapi_client.models.sync_group_schema_table import SyncGroupSchemaTable

# TODO update the JSON string below
json = "{}"
# create an instance of SyncGroupSchemaTable from a JSON string
sync_group_schema_table_instance = SyncGroupSchemaTable.from_json(json)
# print the JSON string representation of the object
print(SyncGroupSchemaTable.to_json())

# convert the object into a dict
sync_group_schema_table_dict = sync_group_schema_table_instance.to_dict()
# create an instance of SyncGroupSchemaTable from a dict
sync_group_schema_table_from_dict = SyncGroupSchemaTable.from_dict(sync_group_schema_table_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# USqlTablePreview

A Data Lake Analytics catalog table or partition preview rows item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rows** | **List[List[str]]** | the rows of the table or partition preview, where each row is an array of string representations the row&#39;s values. Note: Byte arrays will appear as base-64 encoded values, SqlMap and SqlArray objects will appear as escaped JSON objects, and DateTime objects will appear as ISO formatted UTC date-times. | [optional] 
**var_schema** | [**List[USqlTableColumn]**](USqlTableColumn.md) | the schema of the table or partition. | [optional] 
**total_column_count** | **int** | the total number of columns in the table or partition. | [optional] 
**total_row_count** | **int** | the total number of rows in the table or partition. | [optional] 
**truncated** | **bool** | true if the amount of data in the response is less than expected due to the preview operation&#39;s size limitations. This can occur if the requested rows or row counts are too large. | [optional] 

## Example

```python
from openapi_client.models.u_sql_table_preview import USqlTablePreview

# TODO update the JSON string below
json = "{}"
# create an instance of USqlTablePreview from a JSON string
u_sql_table_preview_instance = USqlTablePreview.from_json(json)
# print the JSON string representation of the object
print(USqlTablePreview.to_json())

# convert the object into a dict
u_sql_table_preview_dict = u_sql_table_preview_instance.to_dict()
# create an instance of USqlTablePreview from a dict
u_sql_table_preview_from_dict = USqlTablePreview.from_dict(u_sql_table_preview_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



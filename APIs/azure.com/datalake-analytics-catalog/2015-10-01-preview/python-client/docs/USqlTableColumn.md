# USqlTableColumn

A Data Lake Analytics catalog U-SQL table column item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | the name of the column in the table. | [optional] 
**type** | **str** | the object type of the specified column (such as System.String). | [optional] 

## Example

```python
from openapi_client.models.u_sql_table_column import USqlTableColumn

# TODO update the JSON string below
json = "{}"
# create an instance of USqlTableColumn from a JSON string
u_sql_table_column_instance = USqlTableColumn.from_json(json)
# print the JSON string representation of the object
print(USqlTableColumn.to_json())

# convert the object into a dict
u_sql_table_column_dict = u_sql_table_column_instance.to_dict()
# create an instance of USqlTableColumn from a dict
u_sql_table_column_from_dict = USqlTableColumn.from_dict(u_sql_table_column_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



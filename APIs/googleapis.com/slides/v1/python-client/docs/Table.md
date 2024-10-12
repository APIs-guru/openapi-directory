# Table

A PageElement kind representing a table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columns** | **int** | Number of columns in the table. | [optional] 
**horizontal_border_rows** | [**List[TableBorderRow]**](TableBorderRow.md) | Properties of horizontal cell borders. A table&#39;s horizontal cell borders are represented as a grid. The grid has one more row than the number of rows in the table and the same number of columns as the table. For example, if the table is 3 x 3, its horizontal borders will be represented as a grid with 4 rows and 3 columns. | [optional] 
**rows** | **int** | Number of rows in the table. | [optional] 
**table_columns** | [**List[TableColumnProperties]**](TableColumnProperties.md) | Properties of each column. | [optional] 
**table_rows** | [**List[TableRow]**](TableRow.md) | Properties and contents of each row. Cells that span multiple rows are contained in only one of these rows and have a row_span greater than 1. | [optional] 
**vertical_border_rows** | [**List[TableBorderRow]**](TableBorderRow.md) | Properties of vertical cell borders. A table&#39;s vertical cell borders are represented as a grid. The grid has the same number of rows as the table and one more column than the number of columns in the table. For example, if the table is 3 x 3, its vertical borders will be represented as a grid with 3 rows and 4 columns. | [optional] 

## Example

```python
from openapi_client.models.table import Table

# TODO update the JSON string below
json = "{}"
# create an instance of Table from a JSON string
table_instance = Table.from_json(json)
# print the JSON string representation of the object
print(Table.to_json())

# convert the object into a dict
table_dict = table_instance.to_dict()
# create an instance of Table from a dict
table_from_dict = Table.from_dict(table_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# TableRow

Properties and contents of each row in a table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**row_height** | [**Dimension**](Dimension.md) |  | [optional] 
**table_cells** | [**List[TableCell]**](TableCell.md) | Properties and contents of each cell. Cells that span multiple columns are represented only once with a column_span greater than 1. As a result, the length of this collection does not always match the number of columns of the entire table. | [optional] 
**table_row_properties** | [**TableRowProperties**](TableRowProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.table_row import TableRow

# TODO update the JSON string below
json = "{}"
# create an instance of TableRow from a JSON string
table_row_instance = TableRow.from_json(json)
# print the JSON string representation of the object
print(TableRow.to_json())

# convert the object into a dict
table_row_dict = table_row_instance.to_dict()
# create an instance of TableRow from a dict
table_row_from_dict = TableRow.from_dict(table_row_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



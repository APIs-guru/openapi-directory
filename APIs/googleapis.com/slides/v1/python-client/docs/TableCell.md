# TableCell

Properties and contents of each table cell.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_span** | **int** | Column span of the cell. | [optional] 
**location** | [**TableCellLocation**](TableCellLocation.md) |  | [optional] 
**row_span** | **int** | Row span of the cell. | [optional] 
**table_cell_properties** | [**TableCellProperties**](TableCellProperties.md) |  | [optional] 
**text** | [**TextContent**](TextContent.md) |  | [optional] 

## Example

```python
from openapi_client.models.table_cell import TableCell

# TODO update the JSON string below
json = "{}"
# create an instance of TableCell from a JSON string
table_cell_instance = TableCell.from_json(json)
# print the JSON string representation of the object
print(TableCell.to_json())

# convert the object into a dict
table_cell_dict = table_cell_instance.to_dict()
# create an instance of TableCell from a dict
table_cell_from_dict = TableCell.from_dict(table_cell_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



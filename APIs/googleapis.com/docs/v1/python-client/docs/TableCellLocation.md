# TableCellLocation

Location of a single cell within a table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_index** | **int** | The zero-based column index. For example, the second column in the table has a column index of 1. | [optional] 
**row_index** | **int** | The zero-based row index. For example, the second row in the table has a row index of 1. | [optional] 
**table_start_location** | [**Location**](Location.md) |  | [optional] 

## Example

```python
from openapi_client.models.table_cell_location import TableCellLocation

# TODO update the JSON string below
json = "{}"
# create an instance of TableCellLocation from a JSON string
table_cell_location_instance = TableCellLocation.from_json(json)
# print the JSON string representation of the object
print(TableCellLocation.to_json())

# convert the object into a dict
table_cell_location_dict = table_cell_location_instance.to_dict()
# create an instance of TableCellLocation from a dict
table_cell_location_from_dict = TableCellLocation.from_dict(table_cell_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



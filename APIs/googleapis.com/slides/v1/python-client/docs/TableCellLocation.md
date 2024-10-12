# TableCellLocation

A location of a single table cell within a table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_index** | **int** | The 0-based column index. | [optional] 
**row_index** | **int** | The 0-based row index. | [optional] 

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



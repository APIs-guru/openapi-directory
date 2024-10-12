# GridData

Data in the grid, as well as metadata about the dimensions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_metadata** | [**List[DimensionProperties]**](DimensionProperties.md) | Metadata about the requested columns in the grid, starting with the column in start_column. | [optional] 
**row_data** | [**List[RowData]**](RowData.md) | The data in the grid, one entry per row, starting with the row in startRow. The values in RowData will correspond to columns starting at start_column. | [optional] 
**row_metadata** | [**List[DimensionProperties]**](DimensionProperties.md) | Metadata about the requested rows in the grid, starting with the row in start_row. | [optional] 
**start_column** | **int** | The first column this GridData refers to, zero-based. | [optional] 
**start_row** | **int** | The first row this GridData refers to, zero-based. | [optional] 

## Example

```python
from openapi_client.models.grid_data import GridData

# TODO update the JSON string below
json = "{}"
# create an instance of GridData from a JSON string
grid_data_instance = GridData.from_json(json)
# print the JSON string representation of the object
print(GridData.to_json())

# convert the object into a dict
grid_data_dict = grid_data_instance.to_dict()
# create an instance of GridData from a dict
grid_data_from_dict = GridData.from_dict(grid_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



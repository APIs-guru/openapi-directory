# GridProperties

Properties of a grid.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_count** | **int** | The number of columns in the grid. | [optional] 
**column_group_control_after** | **bool** | True if the column grouping control toggle is shown after the group. | [optional] 
**frozen_column_count** | **int** | The number of columns that are frozen in the grid. | [optional] 
**frozen_row_count** | **int** | The number of rows that are frozen in the grid. | [optional] 
**hide_gridlines** | **bool** | True if the grid isn&#39;t showing gridlines in the UI. | [optional] 
**row_count** | **int** | The number of rows in the grid. | [optional] 
**row_group_control_after** | **bool** | True if the row grouping control toggle is shown after the group. | [optional] 

## Example

```python
from openapi_client.models.grid_properties import GridProperties

# TODO update the JSON string below
json = "{}"
# create an instance of GridProperties from a JSON string
grid_properties_instance = GridProperties.from_json(json)
# print the JSON string representation of the object
print(GridProperties.to_json())

# convert the object into a dict
grid_properties_dict = grid_properties_instance.to_dict()
# create an instance of GridProperties from a dict
grid_properties_from_dict = GridProperties.from_dict(grid_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



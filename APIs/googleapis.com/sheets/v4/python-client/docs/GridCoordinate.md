# GridCoordinate

A coordinate in a sheet. All indexes are zero-based.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_index** | **int** | The column index of the coordinate. | [optional] 
**row_index** | **int** | The row index of the coordinate. | [optional] 
**sheet_id** | **int** | The sheet this coordinate is on. | [optional] 

## Example

```python
from openapi_client.models.grid_coordinate import GridCoordinate

# TODO update the JSON string below
json = "{}"
# create an instance of GridCoordinate from a JSON string
grid_coordinate_instance = GridCoordinate.from_json(json)
# print the JSON string representation of the object
print(GridCoordinate.to_json())

# convert the object into a dict
grid_coordinate_dict = grid_coordinate_instance.to_dict()
# create an instance of GridCoordinate from a dict
grid_coordinate_from_dict = GridCoordinate.from_dict(grid_coordinate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



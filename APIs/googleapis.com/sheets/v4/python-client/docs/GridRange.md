# GridRange

A range on a sheet. All indexes are zero-based. Indexes are half open, i.e. the start index is inclusive and the end index is exclusive -- [start_index, end_index). Missing indexes indicate the range is unbounded on that side. For example, if `\"Sheet1\"` is sheet ID 123456, then: `Sheet1!A1:A1 == sheet_id: 123456, start_row_index: 0, end_row_index: 1, start_column_index: 0, end_column_index: 1` `Sheet1!A3:B4 == sheet_id: 123456, start_row_index: 2, end_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1!A:B == sheet_id: 123456, start_column_index: 0, end_column_index: 2` `Sheet1!A5:B == sheet_id: 123456, start_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1 == sheet_id: 123456` The start index must always be less than or equal to the end index. If the start index equals the end index, then the range is empty. Empty ranges are typically not meaningful and are usually rendered in the UI as `#REF!`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_column_index** | **int** | The end column (exclusive) of the range, or not set if unbounded. | [optional] 
**end_row_index** | **int** | The end row (exclusive) of the range, or not set if unbounded. | [optional] 
**sheet_id** | **int** | The sheet this range is on. | [optional] 
**start_column_index** | **int** | The start column (inclusive) of the range, or not set if unbounded. | [optional] 
**start_row_index** | **int** | The start row (inclusive) of the range, or not set if unbounded. | [optional] 

## Example

```python
from openapi_client.models.grid_range import GridRange

# TODO update the JSON string below
json = "{}"
# create an instance of GridRange from a JSON string
grid_range_instance = GridRange.from_json(json)
# print the JSON string representation of the object
print(GridRange.to_json())

# convert the object into a dict
grid_range_dict = grid_range_instance.to_dict()
# create an instance of GridRange from a dict
grid_range_from_dict = GridRange.from_dict(grid_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# MergeTableCellsRequest

Merges cells in a Table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_id** | **str** | The object ID of the table. | [optional] 
**table_range** | [**TableRange**](TableRange.md) |  | [optional] 

## Example

```python
from openapi_client.models.merge_table_cells_request import MergeTableCellsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of MergeTableCellsRequest from a JSON string
merge_table_cells_request_instance = MergeTableCellsRequest.from_json(json)
# print the JSON string representation of the object
print(MergeTableCellsRequest.to_json())

# convert the object into a dict
merge_table_cells_request_dict = merge_table_cells_request_instance.to_dict()
# create an instance of MergeTableCellsRequest from a dict
merge_table_cells_request_from_dict = MergeTableCellsRequest.from_dict(merge_table_cells_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



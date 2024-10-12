# UnmergeTableCellsRequest

Unmerges cells in a Table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**table_range** | [**TableRange**](TableRange.md) |  | [optional] 

## Example

```python
from openapi_client.models.unmerge_table_cells_request import UnmergeTableCellsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UnmergeTableCellsRequest from a JSON string
unmerge_table_cells_request_instance = UnmergeTableCellsRequest.from_json(json)
# print the JSON string representation of the object
print(UnmergeTableCellsRequest.to_json())

# convert the object into a dict
unmerge_table_cells_request_dict = unmerge_table_cells_request_instance.to_dict()
# create an instance of UnmergeTableCellsRequest from a dict
unmerge_table_cells_request_from_dict = UnmergeTableCellsRequest.from_dict(unmerge_table_cells_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



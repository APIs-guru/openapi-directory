# MergeCellsRequest

Merges all cells in the range.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merge_type** | **str** | How the cells should be merged. | [optional] 
**range** | [**GridRange**](GridRange.md) |  | [optional] 

## Example

```python
from openapi_client.models.merge_cells_request import MergeCellsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of MergeCellsRequest from a JSON string
merge_cells_request_instance = MergeCellsRequest.from_json(json)
# print the JSON string representation of the object
print(MergeCellsRequest.to_json())

# convert the object into a dict
merge_cells_request_dict = merge_cells_request_instance.to_dict()
# create an instance of MergeCellsRequest from a dict
merge_cells_request_from_dict = MergeCellsRequest.from_dict(merge_cells_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# UnmergeCellsRequest

Unmerges cells in the given range.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**range** | [**GridRange**](GridRange.md) |  | [optional] 

## Example

```python
from openapi_client.models.unmerge_cells_request import UnmergeCellsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UnmergeCellsRequest from a JSON string
unmerge_cells_request_instance = UnmergeCellsRequest.from_json(json)
# print the JSON string representation of the object
print(UnmergeCellsRequest.to_json())

# convert the object into a dict
unmerge_cells_request_dict = unmerge_cells_request_instance.to_dict()
# create an instance of UnmergeCellsRequest from a dict
unmerge_cells_request_from_dict = UnmergeCellsRequest.from_dict(unmerge_cells_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



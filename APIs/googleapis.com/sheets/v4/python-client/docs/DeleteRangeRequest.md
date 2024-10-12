# DeleteRangeRequest

Deletes a range of cells, shifting other cells into the deleted area.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**range** | [**GridRange**](GridRange.md) |  | [optional] 
**shift_dimension** | **str** | The dimension from which deleted cells will be replaced with. If ROWS, existing cells will be shifted upward to replace the deleted cells. If COLUMNS, existing cells will be shifted left to replace the deleted cells. | [optional] 

## Example

```python
from openapi_client.models.delete_range_request import DeleteRangeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteRangeRequest from a JSON string
delete_range_request_instance = DeleteRangeRequest.from_json(json)
# print the JSON string representation of the object
print(DeleteRangeRequest.to_json())

# convert the object into a dict
delete_range_request_dict = delete_range_request_instance.to_dict()
# create an instance of DeleteRangeRequest from a dict
delete_range_request_from_dict = DeleteRangeRequest.from_dict(delete_range_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



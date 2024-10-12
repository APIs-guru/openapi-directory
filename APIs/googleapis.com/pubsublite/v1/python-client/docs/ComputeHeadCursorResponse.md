# ComputeHeadCursorResponse

Response containing the head cursor for the requested topic and partition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**head_cursor** | [**Cursor**](Cursor.md) |  | [optional] 

## Example

```python
from openapi_client.models.compute_head_cursor_response import ComputeHeadCursorResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ComputeHeadCursorResponse from a JSON string
compute_head_cursor_response_instance = ComputeHeadCursorResponse.from_json(json)
# print the JSON string representation of the object
print(ComputeHeadCursorResponse.to_json())

# convert the object into a dict
compute_head_cursor_response_dict = compute_head_cursor_response_instance.to_dict()
# create an instance of ComputeHeadCursorResponse from a dict
compute_head_cursor_response_from_dict = ComputeHeadCursorResponse.from_dict(compute_head_cursor_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



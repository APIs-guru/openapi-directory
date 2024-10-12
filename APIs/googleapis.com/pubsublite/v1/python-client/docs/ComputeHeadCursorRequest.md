# ComputeHeadCursorRequest

Compute the current head cursor for a partition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**partition** | **str** | Required. The partition for which we should compute the head cursor. | [optional] 

## Example

```python
from openapi_client.models.compute_head_cursor_request import ComputeHeadCursorRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ComputeHeadCursorRequest from a JSON string
compute_head_cursor_request_instance = ComputeHeadCursorRequest.from_json(json)
# print the JSON string representation of the object
print(ComputeHeadCursorRequest.to_json())

# convert the object into a dict
compute_head_cursor_request_dict = compute_head_cursor_request_instance.to_dict()
# create an instance of ComputeHeadCursorRequest from a dict
compute_head_cursor_request_from_dict = ComputeHeadCursorRequest.from_dict(compute_head_cursor_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ComputeTimeCursorRequest

Compute the corresponding cursor for a publish or event time in a topic partition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**partition** | **str** | Required. The partition for which we should compute the cursor. | [optional] 
**target** | [**TimeTarget**](TimeTarget.md) |  | [optional] 

## Example

```python
from openapi_client.models.compute_time_cursor_request import ComputeTimeCursorRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ComputeTimeCursorRequest from a JSON string
compute_time_cursor_request_instance = ComputeTimeCursorRequest.from_json(json)
# print the JSON string representation of the object
print(ComputeTimeCursorRequest.to_json())

# convert the object into a dict
compute_time_cursor_request_dict = compute_time_cursor_request_instance.to_dict()
# create an instance of ComputeTimeCursorRequest from a dict
compute_time_cursor_request_from_dict = ComputeTimeCursorRequest.from_dict(compute_time_cursor_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



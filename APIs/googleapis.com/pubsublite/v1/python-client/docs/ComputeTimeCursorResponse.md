# ComputeTimeCursorResponse

Response containing the cursor corresponding to a publish or event time in a topic partition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cursor** | [**Cursor**](Cursor.md) |  | [optional] 

## Example

```python
from openapi_client.models.compute_time_cursor_response import ComputeTimeCursorResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ComputeTimeCursorResponse from a JSON string
compute_time_cursor_response_instance = ComputeTimeCursorResponse.from_json(json)
# print the JSON string representation of the object
print(ComputeTimeCursorResponse.to_json())

# convert the object into a dict
compute_time_cursor_response_dict = compute_time_cursor_response_instance.to_dict()
# create an instance of ComputeTimeCursorResponse from a dict
compute_time_cursor_response_from_dict = ComputeTimeCursorResponse.from_dict(compute_time_cursor_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



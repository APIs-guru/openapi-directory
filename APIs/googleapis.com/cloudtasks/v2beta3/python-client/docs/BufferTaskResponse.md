# BufferTaskResponse

Response message for BufferTask.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**task** | [**Task**](Task.md) |  | [optional] 

## Example

```python
from openapi_client.models.buffer_task_response import BufferTaskResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BufferTaskResponse from a JSON string
buffer_task_response_instance = BufferTaskResponse.from_json(json)
# print the JSON string representation of the object
print(BufferTaskResponse.to_json())

# convert the object into a dict
buffer_task_response_dict = buffer_task_response_instance.to_dict()
# create an instance of BufferTaskResponse from a dict
buffer_task_response_from_dict = BufferTaskResponse.from_dict(buffer_task_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



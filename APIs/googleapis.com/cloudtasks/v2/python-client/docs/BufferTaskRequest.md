# BufferTaskRequest

Request message for BufferTask.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | [**HttpBody**](HttpBody.md) |  | [optional] 

## Example

```python
from openapi_client.models.buffer_task_request import BufferTaskRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BufferTaskRequest from a JSON string
buffer_task_request_instance = BufferTaskRequest.from_json(json)
# print the JSON string representation of the object
print(BufferTaskRequest.to_json())

# convert the object into a dict
buffer_task_request_dict = buffer_task_request_instance.to_dict()
# create an instance of BufferTaskRequest from a dict
buffer_task_request_from_dict = BufferTaskRequest.from_dict(buffer_task_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



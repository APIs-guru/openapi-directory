# CreateTaskRequest

Request message for CreateTask.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**response_view** | **str** | The response_view specifies which subset of the Task will be returned. By default response_view is BASIC; not all information is retrieved by default because some data, such as payloads, might be desirable to return only when needed because of its large size or because of the sensitivity of data that it contains. Authorization for FULL requires &#x60;cloudtasks.tasks.fullView&#x60; [Google IAM](https://cloud.google.com/iam/) permission on the Task resource. | [optional] 
**task** | [**Task**](Task.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_task_request import CreateTaskRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateTaskRequest from a JSON string
create_task_request_instance = CreateTaskRequest.from_json(json)
# print the JSON string representation of the object
print(CreateTaskRequest.to_json())

# convert the object into a dict
create_task_request_dict = create_task_request_instance.to_dict()
# create an instance of CreateTaskRequest from a dict
create_task_request_from_dict = CreateTaskRequest.from_dict(create_task_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



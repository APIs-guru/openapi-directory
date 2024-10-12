# TaskUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cron** | **str** | Override the &#39;cron&#39; option in the flux script. | [optional] 
**description** | **str** | An optional description of the task. | [optional] 
**every** | **str** | Override the &#39;every&#39; option in the flux script. | [optional] 
**flux** | **str** | The Flux script to run for this task. | [optional] 
**name** | **str** | Override the &#39;name&#39; option in the flux script. | [optional] 
**offset** | **str** | Override the &#39;offset&#39; option in the flux script. | [optional] 
**status** | [**TaskStatusType**](TaskStatusType.md) |  | [optional] 

## Example

```python
from openapi_client.models.task_update_request import TaskUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TaskUpdateRequest from a JSON string
task_update_request_instance = TaskUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(TaskUpdateRequest.to_json())

# convert the object into a dict
task_update_request_dict = task_update_request_instance.to_dict()
# create an instance of TaskUpdateRequest from a dict
task_update_request_from_dict = TaskUpdateRequest.from_dict(task_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



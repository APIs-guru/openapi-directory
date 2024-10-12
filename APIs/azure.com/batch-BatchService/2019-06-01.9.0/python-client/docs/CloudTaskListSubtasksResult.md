# CloudTaskListSubtasksResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[SubtaskInformation]**](SubtaskInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.cloud_task_list_subtasks_result import CloudTaskListSubtasksResult

# TODO update the JSON string below
json = "{}"
# create an instance of CloudTaskListSubtasksResult from a JSON string
cloud_task_list_subtasks_result_instance = CloudTaskListSubtasksResult.from_json(json)
# print the JSON string representation of the object
print(CloudTaskListSubtasksResult.to_json())

# convert the object into a dict
cloud_task_list_subtasks_result_dict = cloud_task_list_subtasks_result_instance.to_dict()
# create an instance of CloudTaskListSubtasksResult from a dict
cloud_task_list_subtasks_result_from_dict = CloudTaskListSubtasksResult.from_dict(cloud_task_list_subtasks_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



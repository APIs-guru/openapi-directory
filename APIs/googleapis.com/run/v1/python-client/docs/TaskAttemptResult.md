# TaskAttemptResult

Result of a task attempt.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exit_code** | **int** | Optional. The exit code of this attempt. This may be unset if the container was unable to exit cleanly with a code due to some other failure. See status field for possible failure details. | [optional] 
**status** | [**GoogleRpcStatus**](GoogleRpcStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.task_attempt_result import TaskAttemptResult

# TODO update the JSON string below
json = "{}"
# create an instance of TaskAttemptResult from a JSON string
task_attempt_result_instance = TaskAttemptResult.from_json(json)
# print the JSON string representation of the object
print(TaskAttemptResult.to_json())

# convert the object into a dict
task_attempt_result_dict = task_attempt_result_instance.to_dict()
# create an instance of TaskAttemptResult from a dict
task_attempt_result_from_dict = TaskAttemptResult.from_dict(task_attempt_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



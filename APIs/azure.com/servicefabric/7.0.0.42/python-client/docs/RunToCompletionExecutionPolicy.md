# RunToCompletionExecutionPolicy

The run to completion execution policy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**restart** | [**RestartPolicy**](RestartPolicy.md) |  | 

## Example

```python
from openapi_client.models.run_to_completion_execution_policy import RunToCompletionExecutionPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of RunToCompletionExecutionPolicy from a JSON string
run_to_completion_execution_policy_instance = RunToCompletionExecutionPolicy.from_json(json)
# print the JSON string representation of the object
print(RunToCompletionExecutionPolicy.to_json())

# convert the object into a dict
run_to_completion_execution_policy_dict = run_to_completion_execution_policy_instance.to_dict()
# create an instance of RunToCompletionExecutionPolicy from a dict
run_to_completion_execution_policy_from_dict = RunToCompletionExecutionPolicy.from_dict(run_to_completion_execution_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



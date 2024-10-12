# Runnable

Runnable describes instructions for executing a specific script or container as part of a Task.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**always_run** | **bool** | By default, after a Runnable fails, no further Runnable are executed. This flag indicates that this Runnable must be run even if the Task has already failed. This is useful for Runnables that copy output files off of the VM or for debugging. The always_run flag does not override the Task&#39;s overall max_run_duration. If the max_run_duration has expired then no further Runnables will execute, not even always_run Runnables. | [optional] 
**background** | **bool** | This flag allows a Runnable to continue running in the background while the Task executes subsequent Runnables. This is useful to provide services to other Runnables (or to provide debugging support tools like SSH servers). | [optional] 
**barrier** | [**Barrier**](Barrier.md) |  | [optional] 
**container** | [**Container**](Container.md) |  | [optional] 
**display_name** | **str** | Optional. DisplayName is an optional field that can be provided by the caller. If provided, it will be used in logs and other outputs to identify the script, making it easier for users to understand the logs. If not provided the index of the runnable will be used for outputs. | [optional] 
**environment** | [**Environment**](Environment.md) |  | [optional] 
**ignore_exit_status** | **bool** | Normally, a non-zero exit status causes the Task to fail. This flag allows execution of other Runnables to continue instead. | [optional] 
**labels** | **Dict[str, str]** | Labels for this Runnable. | [optional] 
**script** | [**Script**](Script.md) |  | [optional] 
**timeout** | **str** | Timeout for this Runnable. | [optional] 

## Example

```python
from openapi_client.models.runnable import Runnable

# TODO update the JSON string below
json = "{}"
# create an instance of Runnable from a JSON string
runnable_instance = Runnable.from_json(json)
# print the JSON string representation of the object
print(Runnable.to_json())

# convert the object into a dict
runnable_dict = runnable_instance.to_dict()
# create an instance of Runnable from a dict
runnable_from_dict = Runnable.from_dict(runnable_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



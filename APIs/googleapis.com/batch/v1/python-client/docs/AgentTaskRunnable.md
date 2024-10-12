# AgentTaskRunnable

AgentTaskRunnable is the Runnable representation between Agent and CLH communication.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**always_run** | **bool** | By default, after a Runnable fails, no further Runnable are executed. This flag indicates that this Runnable must be run even if the Task has already failed. This is useful for Runnables that copy output files off of the VM or for debugging. The always_run flag does not override the Task&#39;s overall max_run_duration. If the max_run_duration has expired then no further Runnables will execute, not even always_run Runnables. | [optional] 
**background** | **bool** | This flag allows a Runnable to continue running in the background while the Task executes subsequent Runnables. This is useful to provide services to other Runnables (or to provide debugging support tools like SSH servers). | [optional] 
**container** | [**AgentContainer**](AgentContainer.md) |  | [optional] 
**environment** | [**AgentEnvironment**](AgentEnvironment.md) |  | [optional] 
**ignore_exit_status** | **bool** | Normally, a non-zero exit status causes the Task to fail. This flag allows execution of other Runnables to continue instead. | [optional] 
**script** | [**AgentScript**](AgentScript.md) |  | [optional] 
**timeout** | **str** | Timeout for this Runnable. | [optional] 

## Example

```python
from openapi_client.models.agent_task_runnable import AgentTaskRunnable

# TODO update the JSON string below
json = "{}"
# create an instance of AgentTaskRunnable from a JSON string
agent_task_runnable_instance = AgentTaskRunnable.from_json(json)
# print the JSON string representation of the object
print(AgentTaskRunnable.to_json())

# convert the object into a dict
agent_task_runnable_dict = agent_task_runnable_instance.to_dict()
# create an instance of AgentTaskRunnable from a dict
agent_task_runnable_from_dict = AgentTaskRunnable.from_dict(agent_task_runnable_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



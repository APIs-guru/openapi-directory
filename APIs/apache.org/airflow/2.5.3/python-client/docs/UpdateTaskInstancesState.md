# UpdateTaskInstancesState


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dag_run_id** | **str** | The task instance&#39;s DAG run ID. Either set this or execution_date but not both.  *New in version 2.3.0*  | [optional] 
**dry_run** | **bool** | If set, don&#39;t actually run this operation. The response will contain a list of task instances planned to be affected, but won&#39;t be modified in any way.  | [optional] [default to True]
**execution_date** | **str** | The execution date. Either set this or dag_run_id but not both. | [optional] 
**include_downstream** | **bool** | If set to true, downstream tasks are also affected. | [optional] 
**include_future** | **bool** | If set to True, also tasks from future DAG Runs are affected. | [optional] 
**include_past** | **bool** | If set to True, also tasks from past DAG Runs are affected. | [optional] 
**include_upstream** | **bool** | If set to true, upstream tasks are also affected. | [optional] 
**new_state** | **str** | Expected new state. | [optional] 
**task_id** | **str** | The task ID. | [optional] 

## Example

```python
from openapi_client.models.update_task_instances_state import UpdateTaskInstancesState

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateTaskInstancesState from a JSON string
update_task_instances_state_instance = UpdateTaskInstancesState.from_json(json)
# print the JSON string representation of the object
print(UpdateTaskInstancesState.to_json())

# convert the object into a dict
update_task_instances_state_dict = update_task_instances_state_instance.to_dict()
# create an instance of UpdateTaskInstancesState from a dict
update_task_instances_state_from_dict = UpdateTaskInstancesState.from_dict(update_task_instances_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# TaskInstance


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dag_id** | **str** |  | [optional] 
**dag_run_id** | **str** | The DagRun ID for this task instance  *New in version 2.3.0*  | [optional] 
**duration** | **float** |  | [optional] 
**end_date** | **str** |  | [optional] 
**execution_date** | **str** |  | [optional] 
**executor_config** | **str** |  | [optional] 
**hostname** | **str** |  | [optional] 
**map_index** | **int** |  | [optional] 
**max_tries** | **int** |  | [optional] 
**note** | **str** | Contains manually entered notes by the user about the TaskInstance.  *New in version 2.5.0*  | [optional] 
**operator** | **str** | *Changed in version 2.1.1*&amp;#58; Field becomes nullable.  | [optional] 
**pid** | **int** |  | [optional] 
**pool** | **str** |  | [optional] 
**pool_slots** | **int** |  | [optional] 
**priority_weight** | **int** |  | [optional] 
**queue** | **str** |  | [optional] 
**queued_when** | **str** |  | [optional] 
**rendered_fields** | **object** | JSON object describing rendered fields.  *New in version 2.3.0*  | [optional] 
**sla_miss** | [**SLAMiss**](SLAMiss.md) |  | [optional] 
**start_date** | **str** |  | [optional] 
**state** | [**TaskState**](TaskState.md) |  | [optional] 
**task_id** | **str** |  | [optional] 
**trigger** | [**Trigger**](Trigger.md) |  | [optional] 
**triggerer_job** | [**Job**](Job.md) |  | [optional] 
**try_number** | **int** |  | [optional] 
**unixname** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.task_instance import TaskInstance

# TODO update the JSON string below
json = "{}"
# create an instance of TaskInstance from a JSON string
task_instance_instance = TaskInstance.from_json(json)
# print the JSON string representation of the object
print(TaskInstance.to_json())

# convert the object into a dict
task_instance_dict = task_instance_instance.to_dict()
# create an instance of TaskInstance from a dict
task_instance_from_dict = TaskInstance.from_dict(task_instance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



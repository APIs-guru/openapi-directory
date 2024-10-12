# Task

For details see: [airflow.models.BaseOperator](https://airflow.apache.org/docs/apache-airflow/stable/_api/airflow/models/index.html#airflow.models.BaseOperator) 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**class_ref** | [**ClassReference**](ClassReference.md) |  | [optional] 
**depends_on_past** | **bool** |  | [optional] [readonly] 
**downstream_task_ids** | **List[str]** |  | [optional] [readonly] 
**end_date** | **datetime** |  | [optional] [readonly] 
**execution_timeout** | [**TimeDelta**](TimeDelta.md) |  | [optional] 
**extra_links** | [**List[TaskExtraLinksInner]**](TaskExtraLinksInner.md) |  | [optional] [readonly] 
**is_mapped** | **bool** |  | [optional] [readonly] 
**owner** | **str** |  | [optional] [readonly] 
**pool** | **str** |  | [optional] [readonly] 
**pool_slots** | **float** |  | [optional] [readonly] 
**priority_weight** | **float** |  | [optional] [readonly] 
**queue** | **str** |  | [optional] [readonly] 
**retries** | **float** |  | [optional] [readonly] 
**retry_delay** | [**TimeDelta**](TimeDelta.md) |  | [optional] 
**retry_exponential_backoff** | **bool** |  | [optional] [readonly] 
**start_date** | **datetime** |  | [optional] [readonly] 
**sub_dag** | [**DAG**](DAG.md) |  | [optional] 
**task_id** | **str** |  | [optional] [readonly] 
**template_fields** | **List[str]** |  | [optional] [readonly] 
**trigger_rule** | [**TriggerRule**](TriggerRule.md) |  | [optional] 
**ui_color** | **str** | Color in hexadecimal notation. | [optional] 
**ui_fgcolor** | **str** | Color in hexadecimal notation. | [optional] 
**wait_for_downstream** | **bool** |  | [optional] [readonly] 
**weight_rule** | [**WeightRule**](WeightRule.md) |  | [optional] 

## Example

```python
from openapi_client.models.task import Task

# TODO update the JSON string below
json = "{}"
# create an instance of Task from a JSON string
task_instance = Task.from_json(json)
# print the JSON string representation of the object
print(Task.to_json())

# convert the object into a dict
task_dict = task_instance.to_dict()
# create an instance of Task from a dict
task_from_dict = Task.from_dict(task_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



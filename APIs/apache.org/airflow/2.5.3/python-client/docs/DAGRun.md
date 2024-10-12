# DAGRun


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conf** | **object** | JSON object describing additional configuration parameters.  The value of this field can be set only when creating the object. If you try to modify the field of an existing object, the request fails with an BAD_REQUEST error.  | [optional] 
**dag_id** | **str** |  | [optional] [readonly] 
**dag_run_id** | **str** | Run ID.  The value of this field can be set only when creating the object. If you try to modify the field of an existing object, the request fails with an BAD_REQUEST error.  If not provided, a value will be generated based on execution_date.  If the specified dag_run_id is in use, the creation request fails with an ALREADY_EXISTS error.  This together with DAG_ID are a unique key.  | [optional] 
**data_interval_end** | **datetime** |  | [optional] [readonly] 
**data_interval_start** | **datetime** |  | [optional] [readonly] 
**end_date** | **datetime** |  | [optional] [readonly] 
**execution_date** | **datetime** | The execution date. This is the same as logical_date, kept for backwards compatibility. If both this field and logical_date are provided but with different values, the request will fail with an BAD_REQUEST error.  *Changed in version 2.2.0*&amp;#58; Field becomes nullable.  *Deprecated since version 2.2.0*&amp;#58; Use &#39;logical_date&#39; instead.  | [optional] 
**external_trigger** | **bool** |  | [optional] [readonly] [default to True]
**last_scheduling_decision** | **datetime** |  | [optional] [readonly] 
**logical_date** | **datetime** | The logical date (previously called execution date). This is the time or interval covered by this DAG run, according to the DAG definition.  The value of this field can be set only when creating the object. If you try to modify the field of an existing object, the request fails with an BAD_REQUEST error.  This together with DAG_ID are a unique key.  *New in version 2.2.0*  | [optional] 
**note** | **str** | Contains manually entered notes by the user about the DagRun.  *New in version 2.5.0*  | [optional] 
**run_type** | **str** |  | [optional] [readonly] 
**start_date** | **datetime** | The start time. The time when DAG run was actually created.  *Changed in version 2.1.3*&amp;#58; Field becomes nullable.  | [optional] [readonly] 
**state** | [**DagState**](DagState.md) |  | [optional] 

## Example

```python
from openapi_client.models.dag_run import DAGRun

# TODO update the JSON string below
json = "{}"
# create an instance of DAGRun from a JSON string
dag_run_instance = DAGRun.from_json(json)
# print the JSON string representation of the object
print(DAGRun.to_json())

# convert the object into a dict
dag_run_dict = dag_run_instance.to_dict()
# create an instance of DAGRun from a dict
dag_run_from_dict = DAGRun.from_dict(dag_run_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



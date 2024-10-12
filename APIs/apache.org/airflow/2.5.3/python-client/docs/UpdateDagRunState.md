# UpdateDagRunState

Modify the state of a DAG run.  *New in version 2.2.0* 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** | **str** | The state to set this DagRun | [optional] 

## Example

```python
from openapi_client.models.update_dag_run_state import UpdateDagRunState

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDagRunState from a JSON string
update_dag_run_state_instance = UpdateDagRunState.from_json(json)
# print the JSON string representation of the object
print(UpdateDagRunState.to_json())

# convert the object into a dict
update_dag_run_state_dict = update_dag_run_state_instance.to_dict()
# create an instance of UpdateDagRunState from a dict
update_dag_run_state_from_dict = UpdateDagRunState.from_dict(update_dag_run_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



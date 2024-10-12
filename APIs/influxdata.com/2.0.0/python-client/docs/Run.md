# Run


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**finished_at** | **datetime** | Time run finished executing, RFC3339Nano. | [optional] [readonly] 
**id** | **str** |  | [optional] [readonly] 
**links** | [**RunLinks**](RunLinks.md) |  | [optional] 
**log** | [**List[LogEvent]**](LogEvent.md) | An array of logs associated with the run. | [optional] [readonly] 
**requested_at** | **datetime** | Time run was manually requested, RFC3339Nano. | [optional] [readonly] 
**scheduled_for** | **datetime** | Time used for run&#39;s \&quot;now\&quot; option, RFC3339. | [optional] 
**started_at** | **datetime** | Time run started executing, RFC3339Nano. | [optional] [readonly] 
**status** | **str** |  | [optional] [readonly] 
**task_id** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.run import Run

# TODO update the JSON string below
json = "{}"
# create an instance of Run from a JSON string
run_instance = Run.from_json(json)
# print the JSON string representation of the object
print(Run.to_json())

# convert the object into a dict
run_dict = run_instance.to_dict()
# create an instance of Run from a dict
run_from_dict = Run.from_dict(run_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



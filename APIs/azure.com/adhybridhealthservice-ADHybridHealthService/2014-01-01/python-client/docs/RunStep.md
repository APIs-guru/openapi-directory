# RunStep

The run step for a run profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_size** | **int** | The batch size used by the run step. | [optional] 
**object_delete_limit** | **int** | The object deletion limit. | [optional] 
**object_process_limit** | **int** | The object processing limit. | [optional] 
**operation_type** | **int** | The run step operation types. | [optional] 
**page_size** | **int** | The page size of the run step. | [optional] 
**partition_id** | **str** | The Id of the partition that a current run step operation is executing. | [optional] 
**timeout** | **int** | The operation timeout. | [optional] 

## Example

```python
from openapi_client.models.run_step import RunStep

# TODO update the JSON string below
json = "{}"
# create an instance of RunStep from a JSON string
run_step_instance = RunStep.from_json(json)
# print the JSON string representation of the object
print(RunStep.to_json())

# convert the object into a dict
run_step_dict = run_step_instance.to_dict()
# create an instance of RunStep from a dict
run_step_from_dict = RunStep.from_dict(run_step_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



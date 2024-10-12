# Execution

Message describing Execution object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | Output only. [Output only] End time stamp | [optional] [readonly] 
**evaluation_id** | **str** | Output only. [Output only] Evaluation ID | [optional] [readonly] 
**inventory_time** | **str** | Output only. [Output only] Inventory time stamp | [optional] [readonly] 
**labels** | **Dict[str, str]** | Labels as key value pairs | [optional] 
**name** | **str** | The name of execution resource. The format is projects/{project}/locations/{location}/evaluations/{evaluation}/executions/{execution} | [optional] 
**run_type** | **str** | type represent whether the execution executed directly by user or scheduled according evaluation.schedule field. | [optional] 
**start_time** | **str** | Output only. [Output only] Start time stamp | [optional] [readonly] 
**state** | **str** | Output only. [Output only] State | [optional] [readonly] 

## Example

```python
from openapi_client.models.execution import Execution

# TODO update the JSON string below
json = "{}"
# create an instance of Execution from a JSON string
execution_instance = Execution.from_json(json)
# print the JSON string representation of the object
print(Execution.to_json())

# convert the object into a dict
execution_dict = execution_instance.to_dict()
# create an instance of Execution from a dict
execution_from_dict = Execution.from_dict(execution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# WorkflowRunProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Gets the code. | [optional] [readonly] 
**correlation_id** | **str** | Gets the correlation id. | [optional] [readonly] 
**end_time** | **datetime** | Gets the end time. | [optional] [readonly] 
**error** | **object** |  | [optional] 
**outputs** | [**Dict[str, WorkflowOutputParameter]**](WorkflowOutputParameter.md) | Gets the outputs. | [optional] [readonly] 
**start_time** | **datetime** | Gets the start time. | [optional] [readonly] 
**status** | [**WorkflowStatus**](WorkflowStatus.md) |  | [optional] 
**trigger** | [**WorkflowRunTrigger**](WorkflowRunTrigger.md) |  | [optional] 
**workflow** | [**ResourceReference**](ResourceReference.md) |  | [optional] 

## Example

```python
from openapi_client.models.workflow_run_properties import WorkflowRunProperties

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowRunProperties from a JSON string
workflow_run_properties_instance = WorkflowRunProperties.from_json(json)
# print the JSON string representation of the object
print(WorkflowRunProperties.to_json())

# convert the object into a dict
workflow_run_properties_dict = workflow_run_properties_instance.to_dict()
# create an instance of WorkflowRunProperties from a dict
workflow_run_properties_from_dict = WorkflowRunProperties.from_dict(workflow_run_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# WorkflowRunTrigger


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Gets the code. | [optional] [readonly] 
**end_time** | **datetime** | Gets the end time. | [optional] [readonly] 
**error** | **object** |  | [optional] 
**inputs** | **object** |  | [optional] 
**inputs_link** | [**ContentLink**](ContentLink.md) |  | [optional] 
**name** | **str** | Gets the name. | [optional] [readonly] 
**outputs** | **object** |  | [optional] 
**outputs_link** | [**ContentLink**](ContentLink.md) |  | [optional] 
**start_time** | **datetime** | Gets the start time. | [optional] [readonly] 
**status** | [**WorkflowStatus**](WorkflowStatus.md) |  | [optional] 
**tracking_id** | **str** | Gets the trackingId. | [optional] [readonly] 

## Example

```python
from openapi_client.models.workflow_run_trigger import WorkflowRunTrigger

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowRunTrigger from a JSON string
workflow_run_trigger_instance = WorkflowRunTrigger.from_json(json)
# print the JSON string representation of the object
print(WorkflowRunTrigger.to_json())

# convert the object into a dict
workflow_run_trigger_dict = workflow_run_trigger_instance.to_dict()
# create an instance of WorkflowRunTrigger from a dict
workflow_run_trigger_from_dict = WorkflowRunTrigger.from_dict(workflow_run_trigger_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



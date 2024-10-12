# WorkflowRunActionProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Gets the code. | [optional] [readonly] 
**end_time** | **datetime** | Gets the end time. | [optional] [readonly] 
**error** | **object** |  | [optional] 
**inputs_link** | [**ContentLink**](ContentLink.md) |  | [optional] 
**outputs_link** | [**ContentLink**](ContentLink.md) |  | [optional] 
**start_time** | **datetime** | Gets the start time. | [optional] [readonly] 
**status** | [**WorkflowStatus**](WorkflowStatus.md) |  | [optional] 
**tracking_id** | **str** | Gets the trackingId. | [optional] [readonly] 

## Example

```python
from openapi_client.models.workflow_run_action_properties import WorkflowRunActionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowRunActionProperties from a JSON string
workflow_run_action_properties_instance = WorkflowRunActionProperties.from_json(json)
# print the JSON string representation of the object
print(WorkflowRunActionProperties.to_json())

# convert the object into a dict
workflow_run_action_properties_dict = workflow_run_action_properties_instance.to_dict()
# create an instance of WorkflowRunActionProperties from a dict
workflow_run_action_properties_from_dict = WorkflowRunActionProperties.from_dict(workflow_run_action_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



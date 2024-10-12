# SetWorkflowInAttemptRequestBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attempt_number** | **int** |  | 
**job_id** | **int** |  | 
**processing_task_queue** | **str** |  | [optional] [default to '']
**workflow_id** | **str** |  | 

## Example

```python
from openapi_client.models.set_workflow_in_attempt_request_body import SetWorkflowInAttemptRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of SetWorkflowInAttemptRequestBody from a JSON string
set_workflow_in_attempt_request_body_instance = SetWorkflowInAttemptRequestBody.from_json(json)
# print the JSON string representation of the object
print(SetWorkflowInAttemptRequestBody.to_json())

# convert the object into a dict
set_workflow_in_attempt_request_body_dict = set_workflow_in_attempt_request_body_instance.to_dict()
# create an instance of SetWorkflowInAttemptRequestBody from a dict
set_workflow_in_attempt_request_body_from_dict = SetWorkflowInAttemptRequestBody.from_dict(set_workflow_in_attempt_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



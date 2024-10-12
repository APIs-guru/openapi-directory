# InlineWorkflowTaskDetails

This class represents the inline workflow task details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workflow_ids** | **List[str]** | The list of child workflow ids. | [optional] 

## Example

```python
from openapi_client.models.inline_workflow_task_details import InlineWorkflowTaskDetails

# TODO update the JSON string below
json = "{}"
# create an instance of InlineWorkflowTaskDetails from a JSON string
inline_workflow_task_details_instance = InlineWorkflowTaskDetails.from_json(json)
# print the JSON string representation of the object
print(InlineWorkflowTaskDetails.to_json())

# convert the object into a dict
inline_workflow_task_details_dict = inline_workflow_task_details_instance.to_dict()
# create an instance of InlineWorkflowTaskDetails from a dict
inline_workflow_task_details_from_dict = InlineWorkflowTaskDetails.from_dict(inline_workflow_task_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



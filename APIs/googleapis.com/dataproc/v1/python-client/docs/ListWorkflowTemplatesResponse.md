# ListWorkflowTemplatesResponse

A response to a request to list workflow templates in a project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Output only. This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent ListWorkflowTemplatesRequest. | [optional] [readonly] 
**templates** | [**List[WorkflowTemplate]**](WorkflowTemplate.md) | Output only. WorkflowTemplates list. | [optional] [readonly] 
**unreachable** | **List[str]** | Output only. List of workflow templates that could not be included in the response. Attempting to get one of these resources may indicate why it was not included in the list response. | [optional] [readonly] 

## Example

```python
from openapi_client.models.list_workflow_templates_response import ListWorkflowTemplatesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListWorkflowTemplatesResponse from a JSON string
list_workflow_templates_response_instance = ListWorkflowTemplatesResponse.from_json(json)
# print the JSON string representation of the object
print(ListWorkflowTemplatesResponse.to_json())

# convert the object into a dict
list_workflow_templates_response_dict = list_workflow_templates_response_instance.to_dict()
# create an instance of ListWorkflowTemplatesResponse from a dict
list_workflow_templates_response_from_dict = ListWorkflowTemplatesResponse.from_dict(list_workflow_templates_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



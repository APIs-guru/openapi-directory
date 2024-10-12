# ListWorkflowRevisionsResponse

Response for the ListWorkflowRevisions method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**workflows** | [**List[Workflow]**](Workflow.md) | The revisions of the workflow, ordered in reverse chronological order. | [optional] 

## Example

```python
from openapi_client.models.list_workflow_revisions_response import ListWorkflowRevisionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListWorkflowRevisionsResponse from a JSON string
list_workflow_revisions_response_instance = ListWorkflowRevisionsResponse.from_json(json)
# print the JSON string representation of the object
print(ListWorkflowRevisionsResponse.to_json())

# convert the object into a dict
list_workflow_revisions_response_dict = list_workflow_revisions_response_instance.to_dict()
# create an instance of ListWorkflowRevisionsResponse from a dict
list_workflow_revisions_response_from_dict = ListWorkflowRevisionsResponse.from_dict(list_workflow_revisions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



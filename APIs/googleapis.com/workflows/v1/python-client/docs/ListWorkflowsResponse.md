# ListWorkflowsResponse

Response for the ListWorkflows method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**unreachable** | **List[str]** | Unreachable resources. | [optional] 
**workflows** | [**List[Workflow]**](Workflow.md) | The workflows that match the request. | [optional] 

## Example

```python
from openapi_client.models.list_workflows_response import ListWorkflowsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListWorkflowsResponse from a JSON string
list_workflows_response_instance = ListWorkflowsResponse.from_json(json)
# print the JSON string representation of the object
print(ListWorkflowsResponse.to_json())

# convert the object into a dict
list_workflows_response_dict = list_workflows_response_instance.to_dict()
# create an instance of ListWorkflowsResponse from a dict
list_workflows_response_from_dict = ListWorkflowsResponse.from_dict(list_workflows_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



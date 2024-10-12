# ListWorkflowInvocationsResponse

`ListWorkflowInvocations` response message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**unreachable** | **List[str]** | Locations which could not be reached. | [optional] 
**workflow_invocations** | [**List[WorkflowInvocation]**](WorkflowInvocation.md) | List of workflow invocations. | [optional] 

## Example

```python
from openapi_client.models.list_workflow_invocations_response import ListWorkflowInvocationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListWorkflowInvocationsResponse from a JSON string
list_workflow_invocations_response_instance = ListWorkflowInvocationsResponse.from_json(json)
# print the JSON string representation of the object
print(ListWorkflowInvocationsResponse.to_json())

# convert the object into a dict
list_workflow_invocations_response_dict = list_workflow_invocations_response_instance.to_dict()
# create an instance of ListWorkflowInvocationsResponse from a dict
list_workflow_invocations_response_from_dict = ListWorkflowInvocationsResponse.from_dict(list_workflow_invocations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



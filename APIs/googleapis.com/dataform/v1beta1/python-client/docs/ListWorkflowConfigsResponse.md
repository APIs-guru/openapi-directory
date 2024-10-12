# ListWorkflowConfigsResponse

`ListWorkflowConfigs` response message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**unreachable** | **List[str]** | Locations which could not be reached. | [optional] 
**workflow_configs** | [**List[WorkflowConfig]**](WorkflowConfig.md) | List of workflow configs. | [optional] 

## Example

```python
from openapi_client.models.list_workflow_configs_response import ListWorkflowConfigsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListWorkflowConfigsResponse from a JSON string
list_workflow_configs_response_instance = ListWorkflowConfigsResponse.from_json(json)
# print the JSON string representation of the object
print(ListWorkflowConfigsResponse.to_json())

# convert the object into a dict
list_workflow_configs_response_dict = list_workflow_configs_response_instance.to_dict()
# create an instance of ListWorkflowConfigsResponse from a dict
list_workflow_configs_response_from_dict = ListWorkflowConfigsResponse.from_dict(list_workflow_configs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



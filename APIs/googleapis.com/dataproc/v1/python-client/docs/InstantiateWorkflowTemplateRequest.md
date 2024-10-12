# InstantiateWorkflowTemplateRequest

A request to instantiate a workflow template.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameters** | **Dict[str, str]** | Optional. Map from parameter names to values that should be used for those parameters. Values may not exceed 1000 characters. | [optional] 
**request_id** | **str** | Optional. A tag that prevents multiple concurrent workflow instances with the same tag from running. This mitigates risk of concurrent instances started due to retries.It is recommended to always set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The tag must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. | [optional] 
**version** | **int** | Optional. The version of workflow template to instantiate. If specified, the workflow will be instantiated only if the current version of the workflow template has the supplied version.This option cannot be used to instantiate a previous version of workflow template. | [optional] 

## Example

```python
from openapi_client.models.instantiate_workflow_template_request import InstantiateWorkflowTemplateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of InstantiateWorkflowTemplateRequest from a JSON string
instantiate_workflow_template_request_instance = InstantiateWorkflowTemplateRequest.from_json(json)
# print the JSON string representation of the object
print(InstantiateWorkflowTemplateRequest.to_json())

# convert the object into a dict
instantiate_workflow_template_request_dict = instantiate_workflow_template_request_instance.to_dict()
# create an instance of InstantiateWorkflowTemplateRequest from a dict
instantiate_workflow_template_request_from_dict = InstantiateWorkflowTemplateRequest.from_dict(instantiate_workflow_template_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



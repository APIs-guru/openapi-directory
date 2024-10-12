# Workflow


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**WorkflowProperties**](WorkflowProperties.md) |  | [optional] 
**id** | **str** | Gets or sets the resource id. | [optional] 
**location** | **str** | Gets or sets the resource location. | [optional] 
**name** | **str** | Gets the resource name. | [optional] 
**tags** | **Dict[str, str]** | Gets or sets the resource tags. | [optional] 
**type** | **str** | Gets the resource type. | [optional] 

## Example

```python
from openapi_client.models.workflow import Workflow

# TODO update the JSON string below
json = "{}"
# create an instance of Workflow from a JSON string
workflow_instance = Workflow.from_json(json)
# print the JSON string representation of the object
print(Workflow.to_json())

# convert the object into a dict
workflow_dict = workflow_instance.to_dict()
# create an instance of Workflow from a dict
workflow_from_dict = Workflow.from_dict(workflow_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



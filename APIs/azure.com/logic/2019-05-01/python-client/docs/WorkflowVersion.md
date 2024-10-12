# WorkflowVersion

The workflow version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**WorkflowVersionProperties**](WorkflowVersionProperties.md) |  | [optional] 
**id** | **str** | The resource id. | [optional] [readonly] 
**location** | **str** | The resource location. | [optional] 
**name** | **str** | Gets the resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | The resource tags. | [optional] 
**type** | **str** | Gets the resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.workflow_version import WorkflowVersion

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowVersion from a JSON string
workflow_version_instance = WorkflowVersion.from_json(json)
# print the JSON string representation of the object
print(WorkflowVersion.to_json())

# convert the object into a dict
workflow_version_dict = workflow_version_instance.to_dict()
# create an instance of WorkflowVersion from a dict
workflow_version_from_dict = WorkflowVersion.from_dict(workflow_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



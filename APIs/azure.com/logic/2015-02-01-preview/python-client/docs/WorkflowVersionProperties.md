# WorkflowVersionProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_endpoint** | **str** | Gets the access endpoint. | [optional] [readonly] 
**changed_time** | **datetime** | Gets the changed time. | [optional] [readonly] 
**created_time** | **datetime** | Gets the created time. | [optional] [readonly] 
**definition** | **object** |  | [optional] 
**definition_link** | [**ContentLink**](ContentLink.md) |  | [optional] 
**parameters** | [**Dict[str, WorkflowParameter]**](WorkflowParameter.md) | Gets or sets the parameters. | [optional] 
**parameters_link** | [**ContentLink**](ContentLink.md) |  | [optional] 
**sku** | [**Sku**](Sku.md) |  | [optional] 
**state** | [**WorkflowState**](WorkflowState.md) |  | [optional] 
**version** | **str** | Gets the version. | [optional] [readonly] 

## Example

```python
from openapi_client.models.workflow_version_properties import WorkflowVersionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowVersionProperties from a JSON string
workflow_version_properties_instance = WorkflowVersionProperties.from_json(json)
# print the JSON string representation of the object
print(WorkflowVersionProperties.to_json())

# convert the object into a dict
workflow_version_properties_dict = workflow_version_properties_instance.to_dict()
# create an instance of WorkflowVersionProperties from a dict
workflow_version_properties_from_dict = WorkflowVersionProperties.from_dict(workflow_version_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



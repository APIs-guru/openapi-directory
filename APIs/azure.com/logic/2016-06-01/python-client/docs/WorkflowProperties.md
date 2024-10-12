# WorkflowProperties

The workflow properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_endpoint** | **str** | Gets the access endpoint. | [optional] [readonly] 
**changed_time** | **datetime** | Gets the changed time. | [optional] [readonly] 
**created_time** | **datetime** | Gets the created time. | [optional] [readonly] 
**definition** | **object** |  | [optional] 
**integration_account** | [**ResourceReference**](ResourceReference.md) |  | [optional] 
**parameters** | [**Dict[str, WorkflowParameter]**](WorkflowParameter.md) | The parameters. | [optional] 
**provisioning_state** | [**WorkflowProvisioningState**](WorkflowProvisioningState.md) |  | [optional] 
**sku** | [**Sku**](Sku.md) |  | [optional] 
**state** | [**WorkflowState**](WorkflowState.md) |  | [optional] 
**version** | **str** | Gets the version. | [optional] [readonly] 

## Example

```python
from openapi_client.models.workflow_properties import WorkflowProperties

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowProperties from a JSON string
workflow_properties_instance = WorkflowProperties.from_json(json)
# print the JSON string representation of the object
print(WorkflowProperties.to_json())

# convert the object into a dict
workflow_properties_dict = workflow_properties_instance.to_dict()
# create an instance of WorkflowProperties from a dict
workflow_properties_from_dict = WorkflowProperties.from_dict(workflow_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



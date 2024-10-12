# WorkflowProperties

Workflow Properties object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_operation_id** | **str** | workflow last operation identifier. | [optional] 
**last_step_name** | **str** | last step name | [optional] 
**operation** | [**OperationDirection**](OperationDirection.md) |  | [optional] 
**status** | [**WorkflowStatus**](WorkflowStatus.md) |  | [optional] 
**steps** | **str** | workflow steps | [optional] 

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



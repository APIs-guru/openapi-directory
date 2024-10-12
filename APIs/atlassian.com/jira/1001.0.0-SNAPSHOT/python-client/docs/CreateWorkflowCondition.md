# CreateWorkflowCondition

A workflow transition condition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conditions** | [**List[CreateWorkflowCondition]**](CreateWorkflowCondition.md) | The list of workflow conditions. | [optional] 
**configuration** | **Dict[str, object]** | EXPERIMENTAL. The configuration of the transition rule. | [optional] 
**operator** | **str** | The compound condition operator. | [optional] 
**type** | **str** | The type of the transition rule. | [optional] 

## Example

```python
from openapi_client.models.create_workflow_condition import CreateWorkflowCondition

# TODO update the JSON string below
json = "{}"
# create an instance of CreateWorkflowCondition from a JSON string
create_workflow_condition_instance = CreateWorkflowCondition.from_json(json)
# print the JSON string representation of the object
print(CreateWorkflowCondition.to_json())

# convert the object into a dict
create_workflow_condition_dict = create_workflow_condition_instance.to_dict()
# create an instance of CreateWorkflowCondition from a dict
create_workflow_condition_from_dict = CreateWorkflowCondition.from_dict(create_workflow_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



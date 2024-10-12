# WorkflowTransitionProperty

Details about the server Jira is running on.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the transition property. | [optional] [readonly] 
**key** | **str** | The key of the transition property. Also known as the name of the transition property. | [optional] [readonly] 
**value** | **str** | The value of the transition property. | 

## Example

```python
from openapi_client.models.workflow_transition_property import WorkflowTransitionProperty

# TODO update the JSON string below
json = "{}"
# create an instance of WorkflowTransitionProperty from a JSON string
workflow_transition_property_instance = WorkflowTransitionProperty.from_json(json)
# print the JSON string representation of the object
print(WorkflowTransitionProperty.to_json())

# convert the object into a dict
workflow_transition_property_dict = workflow_transition_property_instance.to_dict()
# create an instance of WorkflowTransitionProperty from a dict
workflow_transition_property_from_dict = WorkflowTransitionProperty.from_dict(workflow_transition_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



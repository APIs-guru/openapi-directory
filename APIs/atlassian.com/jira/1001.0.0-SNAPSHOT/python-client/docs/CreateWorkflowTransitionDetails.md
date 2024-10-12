# CreateWorkflowTransitionDetails

The details of a workflow transition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the transition. The maximum length is 1000 characters. | [optional] 
**var_from** | **List[str]** | The statuses the transition can start from. | [optional] 
**name** | **str** | The name of the transition. The maximum length is 60 characters. | 
**properties** | **Dict[str, str]** | The properties of the transition. | [optional] 
**rules** | [**CreateWorkflowTransitionRulesDetails**](CreateWorkflowTransitionRulesDetails.md) | The rules of the transition. | [optional] 
**screen** | [**CreateWorkflowTransitionScreenDetails**](CreateWorkflowTransitionScreenDetails.md) | The screen of the transition. | [optional] 
**to** | **str** | The status the transition goes to. | 
**type** | **str** | The type of the transition. | 

## Example

```python
from openapi_client.models.create_workflow_transition_details import CreateWorkflowTransitionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of CreateWorkflowTransitionDetails from a JSON string
create_workflow_transition_details_instance = CreateWorkflowTransitionDetails.from_json(json)
# print the JSON string representation of the object
print(CreateWorkflowTransitionDetails.to_json())

# convert the object into a dict
create_workflow_transition_details_dict = create_workflow_transition_details_instance.to_dict()
# create an instance of CreateWorkflowTransitionDetails from a dict
create_workflow_transition_details_from_dict = CreateWorkflowTransitionDetails.from_dict(create_workflow_transition_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



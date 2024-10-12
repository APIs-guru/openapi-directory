# Transition

Details of a workflow transition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the transition. | 
**var_from** | **List[str]** | The statuses the transition can start from. | 
**id** | **str** | The ID of the transition. | 
**name** | **str** | The name of the transition. | 
**properties** | **Dict[str, object]** | The properties of the transition. | [optional] 
**rules** | [**WorkflowRules**](WorkflowRules.md) |  | [optional] 
**screen** | [**TransitionScreenDetails**](TransitionScreenDetails.md) |  | [optional] 
**to** | **str** | The status the transition goes to. | 
**type** | **str** | The type of the transition. | 

## Example

```python
from openapi_client.models.transition import Transition

# TODO update the JSON string below
json = "{}"
# create an instance of Transition from a JSON string
transition_instance = Transition.from_json(json)
# print the JSON string representation of the object
print(Transition.to_json())

# convert the object into a dict
transition_dict = transition_instance.to_dict()
# create an instance of Transition from a dict
transition_from_dict = Transition.from_dict(transition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



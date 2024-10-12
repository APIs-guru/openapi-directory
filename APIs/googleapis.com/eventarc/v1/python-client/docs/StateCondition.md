# StateCondition

A condition that is part of the trigger state computation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The canonical code of the condition. | [optional] 
**message** | **str** | Human-readable message. | [optional] 

## Example

```python
from openapi_client.models.state_condition import StateCondition

# TODO update the JSON string below
json = "{}"
# create an instance of StateCondition from a JSON string
state_condition_instance = StateCondition.from_json(json)
# print the JSON string representation of the object
print(StateCondition.to_json())

# convert the object into a dict
state_condition_dict = state_condition_instance.to_dict()
# create an instance of StateCondition from a dict
state_condition_from_dict = StateCondition.from_dict(state_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



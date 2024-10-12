# ActionCondition

Conditions for actions to deal with task failures.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exit_codes** | **List[int]** | Exit codes of a task execution. If there are more than 1 exit codes, when task executes with any of the exit code in the list, the condition is met and the action will be executed. | [optional] 

## Example

```python
from openapi_client.models.action_condition import ActionCondition

# TODO update the JSON string below
json = "{}"
# create an instance of ActionCondition from a JSON string
action_condition_instance = ActionCondition.from_json(json)
# print the JSON string representation of the object
print(ActionCondition.to_json())

# convert the object into a dict
action_condition_dict = action_condition_instance.to_dict()
# create an instance of ActionCondition from a dict
action_condition_from_dict = ActionCondition.from_dict(action_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



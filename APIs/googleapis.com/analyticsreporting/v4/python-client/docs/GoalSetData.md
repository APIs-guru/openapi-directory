# GoalSetData

Represents a set of goals that were reached in an activity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**goals** | [**List[GoalData]**](GoalData.md) | All the goals that were reached in the current activity. | [optional] 

## Example

```python
from openapi_client.models.goal_set_data import GoalSetData

# TODO update the JSON string below
json = "{}"
# create an instance of GoalSetData from a JSON string
goal_set_data_instance = GoalSetData.from_json(json)
# print the JSON string representation of the object
print(GoalSetData.to_json())

# convert the object into a dict
goal_set_data_dict = goal_set_data_instance.to_dict()
# create an instance of GoalSetData from a dict
goal_set_data_from_dict = GoalSetData.from_dict(goal_set_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



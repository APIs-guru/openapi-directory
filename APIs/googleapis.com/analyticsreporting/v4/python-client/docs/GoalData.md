# GoalData

Represents all the details pertaining to a goal.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**goal_completion_location** | **str** | URL of the page where this goal was completed. | [optional] 
**goal_completions** | **str** | Total number of goal completions in this activity. | [optional] 
**goal_index** | **int** | This identifies the goal as configured for the profile. | [optional] 
**goal_name** | **str** | Name of the goal. | [optional] 
**goal_previous_step1** | **str** | URL of the page one step prior to the goal completion. | [optional] 
**goal_previous_step2** | **str** | URL of the page two steps prior to the goal completion. | [optional] 
**goal_previous_step3** | **str** | URL of the page three steps prior to the goal completion. | [optional] 
**goal_value** | **float** | Value in this goal. | [optional] 

## Example

```python
from openapi_client.models.goal_data import GoalData

# TODO update the JSON string below
json = "{}"
# create an instance of GoalData from a JSON string
goal_data_instance = GoalData.from_json(json)
# print the JSON string representation of the object
print(GoalData.to_json())

# convert the object into a dict
goal_data_dict = goal_data_instance.to_dict()
# create an instance of GoalData from a dict
goal_data_from_dict = GoalData.from_dict(goal_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



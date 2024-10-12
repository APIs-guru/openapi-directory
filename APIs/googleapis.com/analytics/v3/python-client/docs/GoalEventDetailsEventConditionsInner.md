# GoalEventDetailsEventConditionsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comparison_type** | **str** | Type of comparison. Possible values are LESS_THAN, GREATER_THAN or EQUAL. | [optional] 
**comparison_value** | **str** | Value used for this comparison. | [optional] 
**expression** | **str** | Expression used for this match. | [optional] 
**match_type** | **str** | Type of the match to be performed. Possible values are REGEXP, BEGINS_WITH, or EXACT. | [optional] 
**type** | **str** | Type of this event condition. Possible values are CATEGORY, ACTION, LABEL, or VALUE. | [optional] 

## Example

```python
from openapi_client.models.goal_event_details_event_conditions_inner import GoalEventDetailsEventConditionsInner

# TODO update the JSON string below
json = "{}"
# create an instance of GoalEventDetailsEventConditionsInner from a JSON string
goal_event_details_event_conditions_inner_instance = GoalEventDetailsEventConditionsInner.from_json(json)
# print the JSON string representation of the object
print(GoalEventDetailsEventConditionsInner.to_json())

# convert the object into a dict
goal_event_details_event_conditions_inner_dict = goal_event_details_event_conditions_inner_instance.to_dict()
# create an instance of GoalEventDetailsEventConditionsInner from a dict
goal_event_details_event_conditions_inner_from_dict = GoalEventDetailsEventConditionsInner.from_dict(goal_event_details_event_conditions_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



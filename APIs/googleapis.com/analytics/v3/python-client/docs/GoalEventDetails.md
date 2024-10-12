# GoalEventDetails

Details for the goal of the type EVENT.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_conditions** | [**List[GoalEventDetailsEventConditionsInner]**](GoalEventDetailsEventConditionsInner.md) | List of event conditions. | [optional] 
**use_event_value** | **bool** | Determines if the event value should be used as the value for this goal. | [optional] 

## Example

```python
from openapi_client.models.goal_event_details import GoalEventDetails

# TODO update the JSON string below
json = "{}"
# create an instance of GoalEventDetails from a JSON string
goal_event_details_instance = GoalEventDetails.from_json(json)
# print the JSON string representation of the object
print(GoalEventDetails.to_json())

# convert the object into a dict
goal_event_details_dict = goal_event_details_instance.to_dict()
# create an instance of GoalEventDetails from a dict
goal_event_details_from_dict = GoalEventDetails.from_dict(goal_event_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



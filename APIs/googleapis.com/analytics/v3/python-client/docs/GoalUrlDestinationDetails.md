# GoalUrlDestinationDetails

Details for the goal of the type URL_DESTINATION.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**case_sensitive** | **bool** | Determines if the goal URL must exactly match the capitalization of visited URLs. | [optional] 
**first_step_required** | **bool** | Determines if the first step in this goal is required. | [optional] 
**match_type** | **str** | Match type for the goal URL. Possible values are HEAD, EXACT, or REGEX. | [optional] 
**steps** | [**List[GoalUrlDestinationDetailsStepsInner]**](GoalUrlDestinationDetailsStepsInner.md) | List of steps configured for this goal funnel. | [optional] 
**url** | **str** | URL for this goal. | [optional] 

## Example

```python
from openapi_client.models.goal_url_destination_details import GoalUrlDestinationDetails

# TODO update the JSON string below
json = "{}"
# create an instance of GoalUrlDestinationDetails from a JSON string
goal_url_destination_details_instance = GoalUrlDestinationDetails.from_json(json)
# print the JSON string representation of the object
print(GoalUrlDestinationDetails.to_json())

# convert the object into a dict
goal_url_destination_details_dict = goal_url_destination_details_instance.to_dict()
# create an instance of GoalUrlDestinationDetails from a dict
goal_url_destination_details_from_dict = GoalUrlDestinationDetails.from_dict(goal_url_destination_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



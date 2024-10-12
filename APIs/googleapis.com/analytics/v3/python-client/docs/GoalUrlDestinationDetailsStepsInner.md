# GoalUrlDestinationDetailsStepsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Step name. | [optional] 
**number** | **int** | Step number. | [optional] 
**url** | **str** | URL for this step. | [optional] 

## Example

```python
from openapi_client.models.goal_url_destination_details_steps_inner import GoalUrlDestinationDetailsStepsInner

# TODO update the JSON string below
json = "{}"
# create an instance of GoalUrlDestinationDetailsStepsInner from a JSON string
goal_url_destination_details_steps_inner_instance = GoalUrlDestinationDetailsStepsInner.from_json(json)
# print the JSON string representation of the object
print(GoalUrlDestinationDetailsStepsInner.to_json())

# convert the object into a dict
goal_url_destination_details_steps_inner_dict = goal_url_destination_details_steps_inner_instance.to_dict()
# create an instance of GoalUrlDestinationDetailsStepsInner from a dict
goal_url_destination_details_steps_inner_from_dict = GoalUrlDestinationDetailsStepsInner.from_dict(goal_url_destination_details_steps_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



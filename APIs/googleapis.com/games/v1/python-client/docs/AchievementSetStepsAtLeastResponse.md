# AchievementSetStepsAtLeastResponse

An achievement set steps at least response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_steps** | **int** | The current steps recorded for this incremental achievement. | [optional] 
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;games#achievementSetStepsAtLeastResponse&#x60;. | [optional] 
**newly_unlocked** | **bool** | Whether the current steps for the achievement has reached the number of steps required to unlock. | [optional] 

## Example

```python
from openapi_client.models.achievement_set_steps_at_least_response import AchievementSetStepsAtLeastResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AchievementSetStepsAtLeastResponse from a JSON string
achievement_set_steps_at_least_response_instance = AchievementSetStepsAtLeastResponse.from_json(json)
# print the JSON string representation of the object
print(AchievementSetStepsAtLeastResponse.to_json())

# convert the object into a dict
achievement_set_steps_at_least_response_dict = achievement_set_steps_at_least_response_instance.to_dict()
# create an instance of AchievementSetStepsAtLeastResponse from a dict
achievement_set_steps_at_least_response_from_dict = AchievementSetStepsAtLeastResponse.from_dict(achievement_set_steps_at_least_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



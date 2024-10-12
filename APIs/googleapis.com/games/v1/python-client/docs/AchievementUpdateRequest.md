# AchievementUpdateRequest

A request to update an achievement.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**achievement_id** | **str** | The achievement this update is being applied to. | [optional] 
**increment_payload** | [**GamesAchievementIncrement**](GamesAchievementIncrement.md) |  | [optional] 
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;games#achievementUpdateRequest&#x60;. | [optional] 
**set_steps_at_least_payload** | [**GamesAchievementSetStepsAtLeast**](GamesAchievementSetStepsAtLeast.md) |  | [optional] 
**update_type** | **str** | The type of update being applied. | [optional] 

## Example

```python
from openapi_client.models.achievement_update_request import AchievementUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AchievementUpdateRequest from a JSON string
achievement_update_request_instance = AchievementUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(AchievementUpdateRequest.to_json())

# convert the object into a dict
achievement_update_request_dict = achievement_update_request_instance.to_dict()
# create an instance of AchievementUpdateRequest from a dict
achievement_update_request_from_dict = AchievementUpdateRequest.from_dict(achievement_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



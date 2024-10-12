# AchievementUpdateResponse

An updated achievement.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**achievement_id** | **str** | The achievement this update is was applied to. | [optional] 
**current_state** | **str** | The current state of the achievement. | [optional] 
**current_steps** | **int** | The current steps recorded for this achievement if it is incremental. | [optional] 
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;games#achievementUpdateResponse&#x60;. | [optional] 
**newly_unlocked** | **bool** | Whether this achievement was newly unlocked (that is, whether the unlock request for the achievement was the first for the player). | [optional] 
**update_occurred** | **bool** | Whether the requested updates actually affected the achievement. | [optional] 

## Example

```python
from openapi_client.models.achievement_update_response import AchievementUpdateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AchievementUpdateResponse from a JSON string
achievement_update_response_instance = AchievementUpdateResponse.from_json(json)
# print the JSON string representation of the object
print(AchievementUpdateResponse.to_json())

# convert the object into a dict
achievement_update_response_dict = achievement_update_response_instance.to_dict()
# create an instance of AchievementUpdateResponse from a dict
achievement_update_response_from_dict = AchievementUpdateResponse.from_dict(achievement_update_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



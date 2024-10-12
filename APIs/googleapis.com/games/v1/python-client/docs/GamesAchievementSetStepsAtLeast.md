# GamesAchievementSetStepsAtLeast

The payload to request to increment an achievement.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;games#GamesAchievementSetStepsAtLeast&#x60;. | [optional] 
**steps** | **int** | The minimum number of steps for the achievement to be set to. | [optional] 

## Example

```python
from openapi_client.models.games_achievement_set_steps_at_least import GamesAchievementSetStepsAtLeast

# TODO update the JSON string below
json = "{}"
# create an instance of GamesAchievementSetStepsAtLeast from a JSON string
games_achievement_set_steps_at_least_instance = GamesAchievementSetStepsAtLeast.from_json(json)
# print the JSON string representation of the object
print(GamesAchievementSetStepsAtLeast.to_json())

# convert the object into a dict
games_achievement_set_steps_at_least_dict = games_achievement_set_steps_at_least_instance.to_dict()
# create an instance of GamesAchievementSetStepsAtLeast from a dict
games_achievement_set_steps_at_least_from_dict = GamesAchievementSetStepsAtLeast.from_dict(games_achievement_set_steps_at_least_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



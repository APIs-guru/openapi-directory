# GamesAchievementIncrement

The payload to request to increment an achievement.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;games#GamesAchievementIncrement&#x60;. | [optional] 
**request_id** | **str** | The requestId associated with an increment to an achievement. | [optional] 
**steps** | **int** | The number of steps to be incremented. | [optional] 

## Example

```python
from openapi_client.models.games_achievement_increment import GamesAchievementIncrement

# TODO update the JSON string below
json = "{}"
# create an instance of GamesAchievementIncrement from a JSON string
games_achievement_increment_instance = GamesAchievementIncrement.from_json(json)
# print the JSON string representation of the object
print(GamesAchievementIncrement.to_json())

# convert the object into a dict
games_achievement_increment_dict = games_achievement_increment_instance.to_dict()
# create an instance of GamesAchievementIncrement from a dict
games_achievement_increment_from_dict = GamesAchievementIncrement.from_dict(games_achievement_increment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



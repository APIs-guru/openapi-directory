# GamesPlayerExperienceInfoResource

1P/3P metadata about the player's experience.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_experience_points** | **str** | The current number of experience points for the player. | [optional] 
**current_level** | [**GamesPlayerLevelResource**](GamesPlayerLevelResource.md) |  | [optional] 
**last_level_up_timestamp_millis** | **str** | The timestamp when the player was leveled up, in millis since Unix epoch UTC. | [optional] 
**next_level** | [**GamesPlayerLevelResource**](GamesPlayerLevelResource.md) |  | [optional] 

## Example

```python
from openapi_client.models.games_player_experience_info_resource import GamesPlayerExperienceInfoResource

# TODO update the JSON string below
json = "{}"
# create an instance of GamesPlayerExperienceInfoResource from a JSON string
games_player_experience_info_resource_instance = GamesPlayerExperienceInfoResource.from_json(json)
# print the JSON string representation of the object
print(GamesPlayerExperienceInfoResource.to_json())

# convert the object into a dict
games_player_experience_info_resource_dict = games_player_experience_info_resource_instance.to_dict()
# create an instance of GamesPlayerExperienceInfoResource from a dict
games_player_experience_info_resource_from_dict = GamesPlayerExperienceInfoResource.from_dict(games_player_experience_info_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



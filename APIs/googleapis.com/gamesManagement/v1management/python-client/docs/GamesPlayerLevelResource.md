# GamesPlayerLevelResource

1P/3P metadata about a user's level.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**level** | **int** | The level for the user. | [optional] 
**max_experience_points** | **str** | The maximum experience points for this level. | [optional] 
**min_experience_points** | **str** | The minimum experience points for this level. | [optional] 

## Example

```python
from openapi_client.models.games_player_level_resource import GamesPlayerLevelResource

# TODO update the JSON string below
json = "{}"
# create an instance of GamesPlayerLevelResource from a JSON string
games_player_level_resource_instance = GamesPlayerLevelResource.from_json(json)
# print the JSON string representation of the object
print(GamesPlayerLevelResource.to_json())

# convert the object into a dict
games_player_level_resource_dict = games_player_level_resource_instance.to_dict()
# create an instance of GamesPlayerLevelResource from a dict
games_player_level_resource_from_dict = GamesPlayerLevelResource.from_dict(games_player_level_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



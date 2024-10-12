# Player

A Player resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avatar_image_url** | **str** | The base URL for the image that represents the player. | [optional] 
**banner_url_landscape** | **str** | The url to the landscape mode player banner image. | [optional] 
**banner_url_portrait** | **str** | The url to the portrait mode player banner image. | [optional] 
**display_name** | **str** | The name to display for the player. | [optional] 
**experience_info** | [**GamesPlayerExperienceInfoResource**](GamesPlayerExperienceInfoResource.md) |  | [optional] 
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;gamesManagement#player&#x60;. | [optional] 
**name** | [**PlayerName**](PlayerName.md) |  | [optional] 
**original_player_id** | **str** | The player ID that was used for this player the first time they signed into the game in question. This is only populated for calls to player.get for the requesting player, only if the player ID has subsequently changed, and only to clients that support remapping player IDs. | [optional] 
**player_id** | **str** | The ID of the player. | [optional] 
**profile_settings** | [**ProfileSettings**](ProfileSettings.md) |  | [optional] 
**title** | **str** | The player&#39;s title rewarded for their game activities. | [optional] 

## Example

```python
from openapi_client.models.player import Player

# TODO update the JSON string below
json = "{}"
# create an instance of Player from a JSON string
player_instance = Player.from_json(json)
# print the JSON string representation of the object
print(Player.to_json())

# convert the object into a dict
player_dict = player_instance.to_dict()
# create an instance of Player from a dict
player_from_dict = Player.from_dict(player_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



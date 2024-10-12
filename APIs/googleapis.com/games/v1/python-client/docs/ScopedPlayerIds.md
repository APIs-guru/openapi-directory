# ScopedPlayerIds

Scoped player identifiers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**developer_player_key** | **str** | Identifier of the player across all games of the given developer. Every player has the same developer_player_key in all games of one developer. Developer player key changes for the game if the game is transferred to another developer. Note that game_player_id will stay unchanged. | [optional] 
**game_player_id** | **str** | Game-scoped player identifier. This is the same id that is returned in GetPlayer game_player_id field. | [optional] 

## Example

```python
from openapi_client.models.scoped_player_ids import ScopedPlayerIds

# TODO update the JSON string below
json = "{}"
# create an instance of ScopedPlayerIds from a JSON string
scoped_player_ids_instance = ScopedPlayerIds.from_json(json)
# print the JSON string representation of the object
print(ScopedPlayerIds.to_json())

# convert the object into a dict
scoped_player_ids_dict = scoped_player_ids_instance.to_dict()
# create an instance of ScopedPlayerIds from a dict
scoped_player_ids_from_dict = ScopedPlayerIds.from_dict(scoped_player_ids_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



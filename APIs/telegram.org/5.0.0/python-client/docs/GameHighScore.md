# GameHighScore

This object represents one row of the high scores table for a game.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**position** | **int** | Position in high score table for the game | 
**score** | **int** | Score | 
**user** | [**User**](User.md) |  | 

## Example

```python
from openapi_client.models.game_high_score import GameHighScore

# TODO update the JSON string below
json = "{}"
# create an instance of GameHighScore from a JSON string
game_high_score_instance = GameHighScore.from_json(json)
# print the JSON string representation of the object
print(GameHighScore.to_json())

# convert the object into a dict
game_high_score_dict = game_high_score_instance.to_dict()
# create an instance of GameHighScore from a dict
game_high_score_from_dict = GameHighScore.from_dict(game_high_score_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# Game

This object represents a game. Use BotFather to create and edit games, their short names will act as unique identifiers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**animation** | [**Animation**](Animation.md) |  | [optional] 
**description** | **str** | Description of the game | 
**photo** | [**List[PhotoSize]**](PhotoSize.md) | Photo that will be displayed in the game message in chats. | 
**text** | **str** | *Optional*. Brief description of the game or high scores included in the game message. Can be automatically edited to include current high scores for the game when the bot calls [setGameScore](https://core.telegram.org/bots/api/#setgamescore), or manually edited using [editMessageText](https://core.telegram.org/bots/api/#editmessagetext). 0-4096 characters. | [optional] 
**text_entities** | [**List[MessageEntity]**](MessageEntity.md) | *Optional*. Special entities that appear in *text*, such as usernames, URLs, bot commands, etc. | [optional] 
**title** | **str** | Title of the game | 

## Example

```python
from openapi_client.models.game import Game

# TODO update the JSON string below
json = "{}"
# create an instance of Game from a JSON string
game_instance = Game.from_json(json)
# print the JSON string representation of the object
print(Game.to_json())

# convert the object into a dict
game_dict = game_instance.to_dict()
# create an instance of Game from a dict
game_from_dict = Game.from_dict(game_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



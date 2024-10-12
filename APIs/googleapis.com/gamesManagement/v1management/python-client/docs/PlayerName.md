# PlayerName

An object representation of the individual components of the player's name. For some players, these fields may not be present.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**family_name** | **str** | The family name of this player. In some places, this is known as the last name. | [optional] 
**given_name** | **str** | The given name of this player. In some places, this is known as the first name. | [optional] 

## Example

```python
from openapi_client.models.player_name import PlayerName

# TODO update the JSON string below
json = "{}"
# create an instance of PlayerName from a JSON string
player_name_instance = PlayerName.from_json(json)
# print the JSON string representation of the object
print(PlayerName.to_json())

# convert the object into a dict
player_name_dict = player_name_instance.to_dict()
# create an instance of PlayerName from a dict
player_name_from_dict = PlayerName.from_dict(player_name_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



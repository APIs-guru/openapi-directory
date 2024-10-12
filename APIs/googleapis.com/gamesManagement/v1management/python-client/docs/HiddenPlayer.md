# HiddenPlayer

The HiddenPlayer resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hidden_time_millis** | **str** | Output only. The time this player was hidden. | [optional] [readonly] 
**kind** | **str** | Output only. Uniquely identifies the type of this resource. Value is always the fixed string &#x60;gamesManagement#hiddenPlayer&#x60;. | [optional] [readonly] 
**player** | [**Player**](Player.md) |  | [optional] 

## Example

```python
from openapi_client.models.hidden_player import HiddenPlayer

# TODO update the JSON string below
json = "{}"
# create an instance of HiddenPlayer from a JSON string
hidden_player_instance = HiddenPlayer.from_json(json)
# print the JSON string representation of the object
print(HiddenPlayer.to_json())

# convert the object into a dict
hidden_player_dict = hidden_player_instance.to_dict()
# create an instance of HiddenPlayer from a dict
hidden_player_from_dict = HiddenPlayer.from_dict(hidden_player_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



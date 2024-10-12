# PlayerLevel

1P/3P metadata about a user's level.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;games#playerLevel&#x60;. | [optional] 
**level** | **int** | The level for the user. | [optional] 
**max_experience_points** | **str** | The maximum experience points for this level. | [optional] 
**min_experience_points** | **str** | The minimum experience points for this level. | [optional] 

## Example

```python
from openapi_client.models.player_level import PlayerLevel

# TODO update the JSON string below
json = "{}"
# create an instance of PlayerLevel from a JSON string
player_level_instance = PlayerLevel.from_json(json)
# print the JSON string representation of the object
print(PlayerLevel.to_json())

# convert the object into a dict
player_level_dict = player_level_instance.to_dict()
# create an instance of PlayerLevel from a dict
player_level_from_dict = PlayerLevel.from_dict(player_level_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# PlayerExperienceInfo

1P/3P metadata about the player's experience.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_experience_points** | **str** | The current number of experience points for the player. | [optional] 
**current_level** | [**PlayerLevel**](PlayerLevel.md) |  | [optional] 
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;games#playerExperienceInfo&#x60;. | [optional] 
**last_level_up_timestamp_millis** | **str** | The timestamp when the player was leveled up, in millis since Unix epoch UTC. | [optional] 
**next_level** | [**PlayerLevel**](PlayerLevel.md) |  | [optional] 

## Example

```python
from openapi_client.models.player_experience_info import PlayerExperienceInfo

# TODO update the JSON string below
json = "{}"
# create an instance of PlayerExperienceInfo from a JSON string
player_experience_info_instance = PlayerExperienceInfo.from_json(json)
# print the JSON string representation of the object
print(PlayerExperienceInfo.to_json())

# convert the object into a dict
player_experience_info_dict = player_experience_info_instance.to_dict()
# create an instance of PlayerExperienceInfo from a dict
player_experience_info_from_dict = PlayerExperienceInfo.from_dict(player_experience_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



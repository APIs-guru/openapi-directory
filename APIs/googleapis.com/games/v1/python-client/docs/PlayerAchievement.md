# PlayerAchievement

An achievement object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**achievement_state** | **str** | The state of the achievement. | [optional] 
**current_steps** | **int** | The current steps for an incremental achievement. | [optional] 
**experience_points** | **str** | Experience points earned for the achievement. This field is absent for achievements that have not yet been unlocked and 0 for achievements that have been unlocked by testers but that are unpublished. | [optional] 
**formatted_current_steps_string** | **str** | The current steps for an incremental achievement as a string. | [optional] 
**id** | **str** | The ID of the achievement. | [optional] 
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;games#playerAchievement&#x60;. | [optional] 
**last_updated_timestamp** | **str** | The timestamp of the last modification to this achievement&#39;s state. | [optional] 

## Example

```python
from openapi_client.models.player_achievement import PlayerAchievement

# TODO update the JSON string below
json = "{}"
# create an instance of PlayerAchievement from a JSON string
player_achievement_instance = PlayerAchievement.from_json(json)
# print the JSON string representation of the object
print(PlayerAchievement.to_json())

# convert the object into a dict
player_achievement_dict = player_achievement_instance.to_dict()
# create an instance of PlayerAchievement from a dict
player_achievement_from_dict = PlayerAchievement.from_dict(player_achievement_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# AchievementDefinition

An achievement definition object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**achievement_type** | **str** | The type of the achievement. | [optional] 
**description** | **str** | The description of the achievement. | [optional] 
**experience_points** | **str** | Experience points which will be earned when unlocking this achievement. | [optional] 
**formatted_total_steps** | **str** | The total steps for an incremental achievement as a string. | [optional] 
**id** | **str** | The ID of the achievement. | [optional] 
**initial_state** | **str** | The initial state of the achievement. | [optional] 
**is_revealed_icon_url_default** | **bool** | Indicates whether the revealed icon image being returned is a default image, or is provided by the game. | [optional] 
**is_unlocked_icon_url_default** | **bool** | Indicates whether the unlocked icon image being returned is a default image, or is game-provided. | [optional] 
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;games#achievementDefinition&#x60;. | [optional] 
**name** | **str** | The name of the achievement. | [optional] 
**revealed_icon_url** | **str** | The image URL for the revealed achievement icon. | [optional] 
**total_steps** | **int** | The total steps for an incremental achievement. | [optional] 
**unlocked_icon_url** | **str** | The image URL for the unlocked achievement icon. | [optional] 

## Example

```python
from openapi_client.models.achievement_definition import AchievementDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of AchievementDefinition from a JSON string
achievement_definition_instance = AchievementDefinition.from_json(json)
# print the JSON string representation of the object
print(AchievementDefinition.to_json())

# convert the object into a dict
achievement_definition_dict = achievement_definition_instance.to_dict()
# create an instance of AchievementDefinition from a dict
achievement_definition_from_dict = AchievementDefinition.from_dict(achievement_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



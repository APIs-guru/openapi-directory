# AchievementConfiguration

An achievement configuration resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**achievement_type** | **str** | The type of the achievement. | [optional] 
**draft** | [**AchievementConfigurationDetail**](AchievementConfigurationDetail.md) |  | [optional] 
**id** | **str** | The ID of the achievement. | [optional] 
**initial_state** | **str** | The initial state of the achievement. | [optional] 
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;gamesConfiguration#achievementConfiguration&#x60;. | [optional] 
**published** | [**AchievementConfigurationDetail**](AchievementConfigurationDetail.md) |  | [optional] 
**steps_to_unlock** | **int** | Steps to unlock. Only applicable to incremental achievements. | [optional] 
**token** | **str** | The token for this resource. | [optional] 

## Example

```python
from openapi_client.models.achievement_configuration import AchievementConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of AchievementConfiguration from a JSON string
achievement_configuration_instance = AchievementConfiguration.from_json(json)
# print the JSON string representation of the object
print(AchievementConfiguration.to_json())

# convert the object into a dict
achievement_configuration_dict = achievement_configuration_instance.to_dict()
# create an instance of AchievementConfiguration from a dict
achievement_configuration_from_dict = AchievementConfiguration.from_dict(achievement_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



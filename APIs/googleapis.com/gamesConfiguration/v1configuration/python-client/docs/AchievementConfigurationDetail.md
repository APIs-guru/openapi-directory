# AchievementConfigurationDetail

An achievement configuration detail.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | [**LocalizedStringBundle**](LocalizedStringBundle.md) |  | [optional] 
**icon_url** | **str** | The icon url of this achievement. Writes to this field are ignored. | [optional] 
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;gamesConfiguration#achievementConfigurationDetail&#x60;. | [optional] 
**name** | [**LocalizedStringBundle**](LocalizedStringBundle.md) |  | [optional] 
**point_value** | **int** | Point value for the achievement. | [optional] 
**sort_rank** | **int** | The sort rank of this achievement. Writes to this field are ignored. | [optional] 

## Example

```python
from openapi_client.models.achievement_configuration_detail import AchievementConfigurationDetail

# TODO update the JSON string below
json = "{}"
# create an instance of AchievementConfigurationDetail from a JSON string
achievement_configuration_detail_instance = AchievementConfigurationDetail.from_json(json)
# print the JSON string representation of the object
print(AchievementConfigurationDetail.to_json())

# convert the object into a dict
achievement_configuration_detail_dict = achievement_configuration_detail_instance.to_dict()
# create an instance of AchievementConfigurationDetail from a dict
achievement_configuration_detail_from_dict = AchievementConfigurationDetail.from_dict(achievement_configuration_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



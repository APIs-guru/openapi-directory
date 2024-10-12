# AchievementConfigurationListResponse

A ListConfigurations response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[AchievementConfiguration]**](AchievementConfiguration.md) | The achievement configurations. | [optional] 
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;gamesConfiguration#achievementConfigurationListResponse&#x60;. | [optional] 
**next_page_token** | **str** | The pagination token for the next page of results. | [optional] 

## Example

```python
from openapi_client.models.achievement_configuration_list_response import AchievementConfigurationListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AchievementConfigurationListResponse from a JSON string
achievement_configuration_list_response_instance = AchievementConfigurationListResponse.from_json(json)
# print the JSON string representation of the object
print(AchievementConfigurationListResponse.to_json())

# convert the object into a dict
achievement_configuration_list_response_dict = achievement_configuration_list_response_instance.to_dict()
# create an instance of AchievementConfigurationListResponse from a dict
achievement_configuration_list_response_from_dict = AchievementConfigurationListResponse.from_dict(achievement_configuration_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# PlayerAchievementListResponse

A list of achievement objects.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[PlayerAchievement]**](PlayerAchievement.md) | The achievements. | [optional] 
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;games#playerAchievementListResponse&#x60;. | [optional] 
**next_page_token** | **str** | Token corresponding to the next page of results. | [optional] 

## Example

```python
from openapi_client.models.player_achievement_list_response import PlayerAchievementListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PlayerAchievementListResponse from a JSON string
player_achievement_list_response_instance = PlayerAchievementListResponse.from_json(json)
# print the JSON string representation of the object
print(PlayerAchievementListResponse.to_json())

# convert the object into a dict
player_achievement_list_response_dict = player_achievement_list_response_instance.to_dict()
# create an instance of PlayerAchievementListResponse from a dict
player_achievement_list_response_from_dict = PlayerAchievementListResponse.from_dict(player_achievement_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



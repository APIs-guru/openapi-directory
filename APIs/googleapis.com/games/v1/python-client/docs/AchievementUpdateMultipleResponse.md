# AchievementUpdateMultipleResponse

Response message for UpdateMultipleAchievements rpc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;games#achievementUpdateMultipleResponse&#x60;. | [optional] 
**updated_achievements** | [**List[AchievementUpdateResponse]**](AchievementUpdateResponse.md) | The updated state of the achievements. | [optional] 

## Example

```python
from openapi_client.models.achievement_update_multiple_response import AchievementUpdateMultipleResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AchievementUpdateMultipleResponse from a JSON string
achievement_update_multiple_response_instance = AchievementUpdateMultipleResponse.from_json(json)
# print the JSON string representation of the object
print(AchievementUpdateMultipleResponse.to_json())

# convert the object into a dict
achievement_update_multiple_response_dict = achievement_update_multiple_response_instance.to_dict()
# create an instance of AchievementUpdateMultipleResponse from a dict
achievement_update_multiple_response_from_dict = AchievementUpdateMultipleResponse.from_dict(achievement_update_multiple_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



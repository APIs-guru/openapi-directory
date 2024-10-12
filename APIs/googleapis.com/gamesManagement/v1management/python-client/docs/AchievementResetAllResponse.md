# AchievementResetAllResponse

Achievement reset all response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;gamesManagement#achievementResetAllResponse&#x60;. | [optional] 
**results** | [**List[AchievementResetResponse]**](AchievementResetResponse.md) | The achievement reset results. | [optional] 

## Example

```python
from openapi_client.models.achievement_reset_all_response import AchievementResetAllResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AchievementResetAllResponse from a JSON string
achievement_reset_all_response_instance = AchievementResetAllResponse.from_json(json)
# print the JSON string representation of the object
print(AchievementResetAllResponse.to_json())

# convert the object into a dict
achievement_reset_all_response_dict = achievement_reset_all_response_instance.to_dict()
# create an instance of AchievementResetAllResponse from a dict
achievement_reset_all_response_from_dict = AchievementResetAllResponse.from_dict(achievement_reset_all_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



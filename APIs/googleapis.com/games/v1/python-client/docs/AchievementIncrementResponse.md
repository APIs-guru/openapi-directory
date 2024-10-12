# AchievementIncrementResponse

An achievement increment response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_steps** | **int** | The current steps recorded for this incremental achievement. | [optional] 
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;games#achievementIncrementResponse&#x60;. | [optional] 
**newly_unlocked** | **bool** | Whether the current steps for the achievement has reached the number of steps required to unlock. | [optional] 

## Example

```python
from openapi_client.models.achievement_increment_response import AchievementIncrementResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AchievementIncrementResponse from a JSON string
achievement_increment_response_instance = AchievementIncrementResponse.from_json(json)
# print the JSON string representation of the object
print(AchievementIncrementResponse.to_json())

# convert the object into a dict
achievement_increment_response_dict = achievement_increment_response_instance.to_dict()
# create an instance of AchievementIncrementResponse from a dict
achievement_increment_response_from_dict = AchievementIncrementResponse.from_dict(achievement_increment_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



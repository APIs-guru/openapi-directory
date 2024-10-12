# AchievementUnlockResponse

An achievement unlock response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;games#achievementUnlockResponse&#x60;. | [optional] 
**newly_unlocked** | **bool** | Whether this achievement was newly unlocked (that is, whether the unlock request for the achievement was the first for the player). | [optional] 

## Example

```python
from openapi_client.models.achievement_unlock_response import AchievementUnlockResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AchievementUnlockResponse from a JSON string
achievement_unlock_response_instance = AchievementUnlockResponse.from_json(json)
# print the JSON string representation of the object
print(AchievementUnlockResponse.to_json())

# convert the object into a dict
achievement_unlock_response_dict = achievement_unlock_response_instance.to_dict()
# create an instance of AchievementUnlockResponse from a dict
achievement_unlock_response_from_dict = AchievementUnlockResponse.from_dict(achievement_unlock_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



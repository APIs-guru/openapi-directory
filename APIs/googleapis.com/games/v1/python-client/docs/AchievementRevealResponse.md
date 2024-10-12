# AchievementRevealResponse

An achievement reveal response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_state** | **str** | The current state of the achievement for which a reveal was attempted. This might be &#x60;UNLOCKED&#x60; if the achievement was already unlocked. | [optional] 
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;games#achievementRevealResponse&#x60;. | [optional] 

## Example

```python
from openapi_client.models.achievement_reveal_response import AchievementRevealResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AchievementRevealResponse from a JSON string
achievement_reveal_response_instance = AchievementRevealResponse.from_json(json)
# print the JSON string representation of the object
print(AchievementRevealResponse.to_json())

# convert the object into a dict
achievement_reveal_response_dict = achievement_reveal_response_instance.to_dict()
# create an instance of AchievementRevealResponse from a dict
achievement_reveal_response_from_dict = AchievementRevealResponse.from_dict(achievement_reveal_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



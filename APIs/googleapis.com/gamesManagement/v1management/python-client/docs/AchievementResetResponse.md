# AchievementResetResponse

An achievement reset response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_state** | **str** | The current state of the achievement. This is the same as the initial state of the achievement. Possible values are: - \&quot;&#x60;HIDDEN&#x60;\&quot;- Achievement is hidden. - \&quot;&#x60;REVEALED&#x60;\&quot; - Achievement is revealed. - \&quot;&#x60;UNLOCKED&#x60;\&quot; - Achievement is unlocked.  | [optional] 
**definition_id** | **str** | The ID of an achievement for which player state has been updated. | [optional] 
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;gamesManagement#achievementResetResponse&#x60;. | [optional] 
**update_occurred** | **bool** | Flag to indicate if the requested update actually occurred. | [optional] 

## Example

```python
from openapi_client.models.achievement_reset_response import AchievementResetResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AchievementResetResponse from a JSON string
achievement_reset_response_instance = AchievementResetResponse.from_json(json)
# print the JSON string representation of the object
print(AchievementResetResponse.to_json())

# convert the object into a dict
achievement_reset_response_dict = achievement_reset_response_instance.to_dict()
# create an instance of AchievementResetResponse from a dict
achievement_reset_response_from_dict = AchievementResetResponse.from_dict(achievement_reset_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# AchievementResetMultipleForAllRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**achievement_ids** | **List[str]** | The IDs of achievements to reset. | [optional] 
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;gamesManagement#achievementResetMultipleForAllRequest&#x60;. | [optional] 

## Example

```python
from openapi_client.models.achievement_reset_multiple_for_all_request import AchievementResetMultipleForAllRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AchievementResetMultipleForAllRequest from a JSON string
achievement_reset_multiple_for_all_request_instance = AchievementResetMultipleForAllRequest.from_json(json)
# print the JSON string representation of the object
print(AchievementResetMultipleForAllRequest.to_json())

# convert the object into a dict
achievement_reset_multiple_for_all_request_dict = achievement_reset_multiple_for_all_request_instance.to_dict()
# create an instance of AchievementResetMultipleForAllRequest from a dict
achievement_reset_multiple_for_all_request_from_dict = AchievementResetMultipleForAllRequest.from_dict(achievement_reset_multiple_for_all_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



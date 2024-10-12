# AchievementUpdateMultipleRequest

A list of achievement update requests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;games#achievementUpdateMultipleRequest&#x60;. | [optional] 
**updates** | [**List[AchievementUpdateRequest]**](AchievementUpdateRequest.md) | The individual achievement update requests. | [optional] 

## Example

```python
from openapi_client.models.achievement_update_multiple_request import AchievementUpdateMultipleRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AchievementUpdateMultipleRequest from a JSON string
achievement_update_multiple_request_instance = AchievementUpdateMultipleRequest.from_json(json)
# print the JSON string representation of the object
print(AchievementUpdateMultipleRequest.to_json())

# convert the object into a dict
achievement_update_multiple_request_dict = achievement_update_multiple_request_instance.to_dict()
# create an instance of AchievementUpdateMultipleRequest from a dict
achievement_update_multiple_request_from_dict = AchievementUpdateMultipleRequest.from_dict(achievement_update_multiple_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



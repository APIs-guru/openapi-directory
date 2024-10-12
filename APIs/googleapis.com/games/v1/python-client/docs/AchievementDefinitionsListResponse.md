# AchievementDefinitionsListResponse

A list of achievement definition objects.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[AchievementDefinition]**](AchievementDefinition.md) | The achievement definitions. | [optional] 
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;games#achievementDefinitionsListResponse&#x60;. | [optional] 
**next_page_token** | **str** | Token corresponding to the next page of results. | [optional] 

## Example

```python
from openapi_client.models.achievement_definitions_list_response import AchievementDefinitionsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AchievementDefinitionsListResponse from a JSON string
achievement_definitions_list_response_instance = AchievementDefinitionsListResponse.from_json(json)
# print the JSON string representation of the object
print(AchievementDefinitionsListResponse.to_json())

# convert the object into a dict
achievement_definitions_list_response_dict = achievement_definitions_list_response_instance.to_dict()
# create an instance of AchievementDefinitionsListResponse from a dict
achievement_definitions_list_response_from_dict = AchievementDefinitionsListResponse.from_dict(achievement_definitions_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



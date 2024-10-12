# GetPersonalPreferencesResponse

Represents the PersonalPreferences for the user

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**favorite_lab_resource_ids** | **List[str]** | Array of favorite lab resource ids | [optional] 
**id** | **str** | Id to be used by the cache orchestrator | [optional] 

## Example

```python
from openapi_client.models.get_personal_preferences_response import GetPersonalPreferencesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetPersonalPreferencesResponse from a JSON string
get_personal_preferences_response_instance = GetPersonalPreferencesResponse.from_json(json)
# print the JSON string representation of the object
print(GetPersonalPreferencesResponse.to_json())

# convert the object into a dict
get_personal_preferences_response_dict = get_personal_preferences_response_instance.to_dict()
# create an instance of GetPersonalPreferencesResponse from a dict
get_personal_preferences_response_from_dict = GetPersonalPreferencesResponse.from_dict(get_personal_preferences_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



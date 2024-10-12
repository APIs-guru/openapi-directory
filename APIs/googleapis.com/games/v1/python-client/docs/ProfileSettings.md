# ProfileSettings

Profile settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**friends_list_visibility** | **str** |  | [optional] 
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;games#profileSettings&#x60;. | [optional] 
**profile_visible** | **bool** | Whether the player&#39;s profile is visible to the currently signed in player. | [optional] 

## Example

```python
from openapi_client.models.profile_settings import ProfileSettings

# TODO update the JSON string below
json = "{}"
# create an instance of ProfileSettings from a JSON string
profile_settings_instance = ProfileSettings.from_json(json)
# print the JSON string representation of the object
print(ProfileSettings.to_json())

# convert the object into a dict
profile_settings_dict = profile_settings_instance.to_dict()
# create an instance of ProfileSettings from a dict
profile_settings_from_dict = ProfileSettings.from_dict(profile_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# UserProfileResponseInternalAllOfSettings

The user's settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**marketing_opt_in** | **str** | The marketing opt-in setting | [optional] 

## Example

```python
from openapi_client.models.user_profile_response_internal_all_of_settings import UserProfileResponseInternalAllOfSettings

# TODO update the JSON string below
json = "{}"
# create an instance of UserProfileResponseInternalAllOfSettings from a JSON string
user_profile_response_internal_all_of_settings_instance = UserProfileResponseInternalAllOfSettings.from_json(json)
# print the JSON string representation of the object
print(UserProfileResponseInternalAllOfSettings.to_json())

# convert the object into a dict
user_profile_response_internal_all_of_settings_dict = user_profile_response_internal_all_of_settings_instance.to_dict()
# create an instance of UserProfileResponseInternalAllOfSettings from a dict
user_profile_response_internal_all_of_settings_from_dict = UserProfileResponseInternalAllOfSettings.from_dict(user_profile_response_internal_all_of_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



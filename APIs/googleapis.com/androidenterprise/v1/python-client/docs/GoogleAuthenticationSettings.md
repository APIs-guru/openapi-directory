# GoogleAuthenticationSettings

Contains settings for Google-provided user authentication.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dedicated_devices_allowed** | **str** | Whether dedicated devices are allowed. | [optional] 
**google_authentication_required** | **str** | Whether Google authentication is required. | [optional] 

## Example

```python
from openapi_client.models.google_authentication_settings import GoogleAuthenticationSettings

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAuthenticationSettings from a JSON string
google_authentication_settings_instance = GoogleAuthenticationSettings.from_json(json)
# print the JSON string representation of the object
print(GoogleAuthenticationSettings.to_json())

# convert the object into a dict
google_authentication_settings_dict = google_authentication_settings_instance.to_dict()
# create an instance of GoogleAuthenticationSettings from a dict
google_authentication_settings_from_dict = GoogleAuthenticationSettings.from_dict(google_authentication_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



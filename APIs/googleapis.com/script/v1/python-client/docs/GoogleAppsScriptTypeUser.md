# GoogleAppsScriptTypeUser

A simple user profile resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **str** | The user&#39;s domain. | [optional] 
**email** | **str** | The user&#39;s identifying email address. | [optional] 
**name** | **str** | The user&#39;s display name. | [optional] 
**photo_url** | **str** | The user&#39;s photo. | [optional] 

## Example

```python
from openapi_client.models.google_apps_script_type_user import GoogleAppsScriptTypeUser

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsScriptTypeUser from a JSON string
google_apps_script_type_user_instance = GoogleAppsScriptTypeUser.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsScriptTypeUser.to_json())

# convert the object into a dict
google_apps_script_type_user_dict = google_apps_script_type_user_instance.to_dict()
# create an instance of GoogleAppsScriptTypeUser from a dict
google_apps_script_type_user_from_dict = GoogleAppsScriptTypeUser.from_dict(google_apps_script_type_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



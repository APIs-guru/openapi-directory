# GoogleAppsScriptTypeWebAppEntryPoint

A web application entry point.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entry_point_config** | [**GoogleAppsScriptTypeWebAppConfig**](GoogleAppsScriptTypeWebAppConfig.md) |  | [optional] 
**url** | **str** | The URL for the web application. | [optional] 

## Example

```python
from openapi_client.models.google_apps_script_type_web_app_entry_point import GoogleAppsScriptTypeWebAppEntryPoint

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsScriptTypeWebAppEntryPoint from a JSON string
google_apps_script_type_web_app_entry_point_instance = GoogleAppsScriptTypeWebAppEntryPoint.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsScriptTypeWebAppEntryPoint.to_json())

# convert the object into a dict
google_apps_script_type_web_app_entry_point_dict = google_apps_script_type_web_app_entry_point_instance.to_dict()
# create an instance of GoogleAppsScriptTypeWebAppEntryPoint from a dict
google_apps_script_type_web_app_entry_point_from_dict = GoogleAppsScriptTypeWebAppEntryPoint.from_dict(google_apps_script_type_web_app_entry_point_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



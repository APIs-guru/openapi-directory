# GoogleAppsScriptTypeWebAppConfig

Web app entry point configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | **str** | Who has permission to run the web app. | [optional] 
**execute_as** | **str** | Who to execute the web app as. | [optional] 

## Example

```python
from openapi_client.models.google_apps_script_type_web_app_config import GoogleAppsScriptTypeWebAppConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsScriptTypeWebAppConfig from a JSON string
google_apps_script_type_web_app_config_instance = GoogleAppsScriptTypeWebAppConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsScriptTypeWebAppConfig.to_json())

# convert the object into a dict
google_apps_script_type_web_app_config_dict = google_apps_script_type_web_app_config_instance.to_dict()
# create an instance of GoogleAppsScriptTypeWebAppConfig from a dict
google_apps_script_type_web_app_config_from_dict = GoogleAppsScriptTypeWebAppConfig.from_dict(google_apps_script_type_web_app_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



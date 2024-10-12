# GoogleAppsScriptTypeExecutionApiConfig

API executable entry point configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | **str** | Who has permission to run the API executable. | [optional] 

## Example

```python
from openapi_client.models.google_apps_script_type_execution_api_config import GoogleAppsScriptTypeExecutionApiConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsScriptTypeExecutionApiConfig from a JSON string
google_apps_script_type_execution_api_config_instance = GoogleAppsScriptTypeExecutionApiConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsScriptTypeExecutionApiConfig.to_json())

# convert the object into a dict
google_apps_script_type_execution_api_config_dict = google_apps_script_type_execution_api_config_instance.to_dict()
# create an instance of GoogleAppsScriptTypeExecutionApiConfig from a dict
google_apps_script_type_execution_api_config_from_dict = GoogleAppsScriptTypeExecutionApiConfig.from_dict(google_apps_script_type_execution_api_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



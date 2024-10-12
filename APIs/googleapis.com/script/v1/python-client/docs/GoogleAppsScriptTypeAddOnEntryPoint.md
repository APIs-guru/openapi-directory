# GoogleAppsScriptTypeAddOnEntryPoint

An add-on entry point.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**add_on_type** | **str** | The add-on&#39;s required list of supported container types. | [optional] 
**description** | **str** | The add-on&#39;s optional description. | [optional] 
**help_url** | **str** | The add-on&#39;s optional help URL. | [optional] 
**post_install_tip_url** | **str** | The add-on&#39;s required post install tip URL. | [optional] 
**report_issue_url** | **str** | The add-on&#39;s optional report issue URL. | [optional] 
**title** | **str** | The add-on&#39;s required title. | [optional] 

## Example

```python
from openapi_client.models.google_apps_script_type_add_on_entry_point import GoogleAppsScriptTypeAddOnEntryPoint

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsScriptTypeAddOnEntryPoint from a JSON string
google_apps_script_type_add_on_entry_point_instance = GoogleAppsScriptTypeAddOnEntryPoint.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsScriptTypeAddOnEntryPoint.to_json())

# convert the object into a dict
google_apps_script_type_add_on_entry_point_dict = google_apps_script_type_add_on_entry_point_instance.to_dict()
# create an instance of GoogleAppsScriptTypeAddOnEntryPoint from a dict
google_apps_script_type_add_on_entry_point_from_dict = GoogleAppsScriptTypeAddOnEntryPoint.from_dict(google_apps_script_type_add_on_entry_point_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



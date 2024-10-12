# GoogleAppsScriptTypeProcess

Representation of a single script process execution that was started from the script editor, a trigger, an application, or using the Apps Script API. This is distinct from the `Operation` resource, which only represents executions started via the Apps Script API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** | Duration the execution spent executing. | [optional] 
**function_name** | **str** | Name of the function the started the execution. | [optional] 
**process_status** | **str** | The executions status. | [optional] 
**process_type** | **str** | The executions type. | [optional] 
**project_name** | **str** | Name of the script being executed. | [optional] 
**runtime_version** | **str** | Which version of maestro to use to execute the script. | [optional] 
**start_time** | **str** | Time the execution started. | [optional] 
**user_access_level** | **str** | The executing users access level to the script. | [optional] 

## Example

```python
from openapi_client.models.google_apps_script_type_process import GoogleAppsScriptTypeProcess

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsScriptTypeProcess from a JSON string
google_apps_script_type_process_instance = GoogleAppsScriptTypeProcess.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsScriptTypeProcess.to_json())

# convert the object into a dict
google_apps_script_type_process_dict = google_apps_script_type_process_instance.to_dict()
# create an instance of GoogleAppsScriptTypeProcess from a dict
google_apps_script_type_process_from_dict = GoogleAppsScriptTypeProcess.from_dict(google_apps_script_type_process_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



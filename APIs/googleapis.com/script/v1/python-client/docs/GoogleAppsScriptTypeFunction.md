# GoogleAppsScriptTypeFunction

Represents a function in a script project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The function name in the script project. | [optional] 
**parameters** | **List[str]** | The ordered list of parameter names of the function in the script project. | [optional] 

## Example

```python
from openapi_client.models.google_apps_script_type_function import GoogleAppsScriptTypeFunction

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsScriptTypeFunction from a JSON string
google_apps_script_type_function_instance = GoogleAppsScriptTypeFunction.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsScriptTypeFunction.to_json())

# convert the object into a dict
google_apps_script_type_function_dict = google_apps_script_type_function_instance.to_dict()
# create an instance of GoogleAppsScriptTypeFunction from a dict
google_apps_script_type_function_from_dict = GoogleAppsScriptTypeFunction.from_dict(google_apps_script_type_function_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



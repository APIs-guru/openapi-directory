# GoogleAppsScriptTypeFunctionSet

A set of functions. No duplicates are permitted.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**values** | [**List[GoogleAppsScriptTypeFunction]**](GoogleAppsScriptTypeFunction.md) | A list of functions composing the set. | [optional] 

## Example

```python
from openapi_client.models.google_apps_script_type_function_set import GoogleAppsScriptTypeFunctionSet

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsScriptTypeFunctionSet from a JSON string
google_apps_script_type_function_set_instance = GoogleAppsScriptTypeFunctionSet.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsScriptTypeFunctionSet.to_json())

# convert the object into a dict
google_apps_script_type_function_set_dict = google_apps_script_type_function_set_instance.to_dict()
# create an instance of GoogleAppsScriptTypeFunctionSet from a dict
google_apps_script_type_function_set_from_dict = GoogleAppsScriptTypeFunctionSet.from_dict(google_apps_script_type_function_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



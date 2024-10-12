# JavaScriptSolution


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**package_json_path** | **str** | The path to the detected package.json | 
**react_native_version** | **str** | Version of React Native from package.json files | [optional] 

## Example

```python
from openapi_client.models.java_script_solution import JavaScriptSolution

# TODO update the JSON string below
json = "{}"
# create an instance of JavaScriptSolution from a JSON string
java_script_solution_instance = JavaScriptSolution.from_json(json)
# print the JSON string representation of the object
print(JavaScriptSolution.to_json())

# convert the object into a dict
java_script_solution_dict = java_script_solution_instance.to_dict()
# create an instance of JavaScriptSolution from a dict
java_script_solution_from_dict = JavaScriptSolution.from_dict(java_script_solution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



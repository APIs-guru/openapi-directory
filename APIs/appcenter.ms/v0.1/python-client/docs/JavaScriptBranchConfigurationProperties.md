# JavaScriptBranchConfigurationProperties

Build configuration when React Native, or other JavaScript tech, is part of the build steps

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**package_json_path** | **str** | Path to package.json file for the main project, e.g. \&quot;package.json\&quot; or \&quot;myapp/package.json\&quot; | [optional] 
**react_native_version** | **str** | Version of React Native from package.json files | [optional] 
**run_tests** | **bool** | Whether to run Jest unit tests, via npm test, during the build | [optional] 

## Example

```python
from openapi_client.models.java_script_branch_configuration_properties import JavaScriptBranchConfigurationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of JavaScriptBranchConfigurationProperties from a JSON string
java_script_branch_configuration_properties_instance = JavaScriptBranchConfigurationProperties.from_json(json)
# print the JSON string representation of the object
print(JavaScriptBranchConfigurationProperties.to_json())

# convert the object into a dict
java_script_branch_configuration_properties_dict = java_script_branch_configuration_properties_instance.to_dict()
# create an instance of JavaScriptBranchConfigurationProperties from a dict
java_script_branch_configuration_properties_from_dict = JavaScriptBranchConfigurationProperties.from_dict(java_script_branch_configuration_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



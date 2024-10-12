# BranchConfigurationsGet200ResponseAllOfToolsetsJavascript

Build configuration when React Native, or other JavaScript tech, is part of the build steps

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**package_json_path** | **str** | Path to package.json file for the main project, e.g. \&quot;package.json\&quot; or \&quot;myapp/package.json\&quot; | [optional] 
**react_native_version** | **str** | Version of React Native from package.json files | [optional] 
**run_tests** | **bool** | Whether to run Jest unit tests, via npm test, during the build | [optional] 

## Example

```python
from openapi_client.models.branch_configurations_get200_response_all_of_toolsets_javascript import BranchConfigurationsGet200ResponseAllOfToolsetsJavascript

# TODO update the JSON string below
json = "{}"
# create an instance of BranchConfigurationsGet200ResponseAllOfToolsetsJavascript from a JSON string
branch_configurations_get200_response_all_of_toolsets_javascript_instance = BranchConfigurationsGet200ResponseAllOfToolsetsJavascript.from_json(json)
# print the JSON string representation of the object
print(BranchConfigurationsGet200ResponseAllOfToolsetsJavascript.to_json())

# convert the object into a dict
branch_configurations_get200_response_all_of_toolsets_javascript_dict = branch_configurations_get200_response_all_of_toolsets_javascript_instance.to_dict()
# create an instance of BranchConfigurationsGet200ResponseAllOfToolsetsJavascript from a dict
branch_configurations_get200_response_all_of_toolsets_javascript_from_dict = BranchConfigurationsGet200ResponseAllOfToolsetsJavascript.from_dict(branch_configurations_get200_response_all_of_toolsets_javascript_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



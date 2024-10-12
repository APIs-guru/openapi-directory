# CompilationResult

Represents the result of compiling a Dataform project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code_compilation_config** | [**CodeCompilationConfig**](CodeCompilationConfig.md) |  | [optional] 
**compilation_errors** | [**List[CompilationError]**](CompilationError.md) | Output only. Errors encountered during project compilation. | [optional] [readonly] 
**dataform_core_version** | **str** | Output only. The version of &#x60;@dataform/core&#x60; that was used for compilation. | [optional] [readonly] 
**git_commitish** | **str** | Immutable. Git commit/tag/branch name at which the repository should be compiled. Must exist in the remote repository. Examples: - a commit SHA: &#x60;12ade345&#x60; - a tag: &#x60;tag1&#x60; - a branch name: &#x60;branch1&#x60; | [optional] 
**name** | **str** | Output only. The compilation result&#39;s name. | [optional] [readonly] 
**release_config** | **str** | Immutable. The name of the release config to compile. Must be in the format &#x60;projects/*/locations/*/repositories/*/releaseConfigs/*&#x60;. | [optional] 
**resolved_git_commit_sha** | **str** | Output only. The fully resolved Git commit SHA of the code that was compiled. Not set for compilation results whose source is a workspace. | [optional] [readonly] 
**workspace** | **str** | Immutable. The name of the workspace to compile. Must be in the format &#x60;projects/*/locations/*/repositories/*/workspaces/*&#x60;. | [optional] 

## Example

```python
from openapi_client.models.compilation_result import CompilationResult

# TODO update the JSON string below
json = "{}"
# create an instance of CompilationResult from a JSON string
compilation_result_instance = CompilationResult.from_json(json)
# print the JSON string representation of the object
print(CompilationResult.to_json())

# convert the object into a dict
compilation_result_dict = compilation_result_instance.to_dict()
# create an instance of CompilationResult from a dict
compilation_result_from_dict = CompilationResult.from_dict(compilation_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# BuildBazelRemoteExecutionV2CommandEnvironmentVariable

An `EnvironmentVariable` is one variable to set in the running program's environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The variable name. | [optional] 
**value** | **str** | The variable value. | [optional] 

## Example

```python
from openapi_client.models.build_bazel_remote_execution_v2_command_environment_variable import BuildBazelRemoteExecutionV2CommandEnvironmentVariable

# TODO update the JSON string below
json = "{}"
# create an instance of BuildBazelRemoteExecutionV2CommandEnvironmentVariable from a JSON string
build_bazel_remote_execution_v2_command_environment_variable_instance = BuildBazelRemoteExecutionV2CommandEnvironmentVariable.from_json(json)
# print the JSON string representation of the object
print(BuildBazelRemoteExecutionV2CommandEnvironmentVariable.to_json())

# convert the object into a dict
build_bazel_remote_execution_v2_command_environment_variable_dict = build_bazel_remote_execution_v2_command_environment_variable_instance.to_dict()
# create an instance of BuildBazelRemoteExecutionV2CommandEnvironmentVariable from a dict
build_bazel_remote_execution_v2_command_environment_variable_from_dict = BuildBazelRemoteExecutionV2CommandEnvironmentVariable.from_dict(build_bazel_remote_execution_v2_command_environment_variable_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



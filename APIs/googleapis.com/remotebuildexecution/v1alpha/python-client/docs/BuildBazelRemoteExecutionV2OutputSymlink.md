# BuildBazelRemoteExecutionV2OutputSymlink

An `OutputSymlink` is similar to a Symlink, but it is used as an output in an `ActionResult`. `OutputSymlink` is binary-compatible with `SymlinkNode`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**node_properties** | [**BuildBazelRemoteExecutionV2NodeProperties**](BuildBazelRemoteExecutionV2NodeProperties.md) |  | [optional] 
**path** | **str** | The full path of the symlink relative to the working directory, including the filename. The path separator is a forward slash &#x60;/&#x60;. Since this is a relative path, it MUST NOT begin with a leading forward slash. | [optional] 
**target** | **str** | The target path of the symlink. The path separator is a forward slash &#x60;/&#x60;. The target path can be relative to the parent directory of the symlink or it can be an absolute path starting with &#x60;/&#x60;. Support for absolute paths can be checked using the Capabilities API. &#x60;..&#x60; components are allowed anywhere in the target path. | [optional] 

## Example

```python
from openapi_client.models.build_bazel_remote_execution_v2_output_symlink import BuildBazelRemoteExecutionV2OutputSymlink

# TODO update the JSON string below
json = "{}"
# create an instance of BuildBazelRemoteExecutionV2OutputSymlink from a JSON string
build_bazel_remote_execution_v2_output_symlink_instance = BuildBazelRemoteExecutionV2OutputSymlink.from_json(json)
# print the JSON string representation of the object
print(BuildBazelRemoteExecutionV2OutputSymlink.to_json())

# convert the object into a dict
build_bazel_remote_execution_v2_output_symlink_dict = build_bazel_remote_execution_v2_output_symlink_instance.to_dict()
# create an instance of BuildBazelRemoteExecutionV2OutputSymlink from a dict
build_bazel_remote_execution_v2_output_symlink_from_dict = BuildBazelRemoteExecutionV2OutputSymlink.from_dict(build_bazel_remote_execution_v2_output_symlink_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



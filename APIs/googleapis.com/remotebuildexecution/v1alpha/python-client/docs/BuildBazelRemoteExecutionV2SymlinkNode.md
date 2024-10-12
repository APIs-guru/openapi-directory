# BuildBazelRemoteExecutionV2SymlinkNode

A `SymlinkNode` represents a symbolic link.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the symlink. | [optional] 
**node_properties** | [**BuildBazelRemoteExecutionV2NodeProperties**](BuildBazelRemoteExecutionV2NodeProperties.md) |  | [optional] 
**target** | **str** | The target path of the symlink. The path separator is a forward slash &#x60;/&#x60;. The target path can be relative to the parent directory of the symlink or it can be an absolute path starting with &#x60;/&#x60;. Support for absolute paths can be checked using the Capabilities API. &#x60;..&#x60; components are allowed anywhere in the target path as logical canonicalization may lead to different behavior in the presence of directory symlinks (e.g. &#x60;foo/../bar&#x60; may not be the same as &#x60;bar&#x60;). To reduce potential cache misses, canonicalization is still recommended where this is possible without impacting correctness. | [optional] 

## Example

```python
from openapi_client.models.build_bazel_remote_execution_v2_symlink_node import BuildBazelRemoteExecutionV2SymlinkNode

# TODO update the JSON string below
json = "{}"
# create an instance of BuildBazelRemoteExecutionV2SymlinkNode from a JSON string
build_bazel_remote_execution_v2_symlink_node_instance = BuildBazelRemoteExecutionV2SymlinkNode.from_json(json)
# print the JSON string representation of the object
print(BuildBazelRemoteExecutionV2SymlinkNode.to_json())

# convert the object into a dict
build_bazel_remote_execution_v2_symlink_node_dict = build_bazel_remote_execution_v2_symlink_node_instance.to_dict()
# create an instance of BuildBazelRemoteExecutionV2SymlinkNode from a dict
build_bazel_remote_execution_v2_symlink_node_from_dict = BuildBazelRemoteExecutionV2SymlinkNode.from_dict(build_bazel_remote_execution_v2_symlink_node_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# BuildBazelRemoteExecutionV2FileNode

A `FileNode` represents a single file and associated metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**digest** | [**BuildBazelRemoteExecutionV2Digest**](BuildBazelRemoteExecutionV2Digest.md) |  | [optional] 
**is_executable** | **bool** | True if file is executable, false otherwise. | [optional] 
**name** | **str** | The name of the file. | [optional] 
**node_properties** | [**BuildBazelRemoteExecutionV2NodeProperties**](BuildBazelRemoteExecutionV2NodeProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.build_bazel_remote_execution_v2_file_node import BuildBazelRemoteExecutionV2FileNode

# TODO update the JSON string below
json = "{}"
# create an instance of BuildBazelRemoteExecutionV2FileNode from a JSON string
build_bazel_remote_execution_v2_file_node_instance = BuildBazelRemoteExecutionV2FileNode.from_json(json)
# print the JSON string representation of the object
print(BuildBazelRemoteExecutionV2FileNode.to_json())

# convert the object into a dict
build_bazel_remote_execution_v2_file_node_dict = build_bazel_remote_execution_v2_file_node_instance.to_dict()
# create an instance of BuildBazelRemoteExecutionV2FileNode from a dict
build_bazel_remote_execution_v2_file_node_from_dict = BuildBazelRemoteExecutionV2FileNode.from_dict(build_bazel_remote_execution_v2_file_node_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



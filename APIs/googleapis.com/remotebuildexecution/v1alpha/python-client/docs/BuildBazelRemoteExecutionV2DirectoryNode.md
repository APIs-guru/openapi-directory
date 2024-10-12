# BuildBazelRemoteExecutionV2DirectoryNode

A `DirectoryNode` represents a child of a Directory which is itself a `Directory` and its associated metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**digest** | [**BuildBazelRemoteExecutionV2Digest**](BuildBazelRemoteExecutionV2Digest.md) |  | [optional] 
**name** | **str** | The name of the directory. | [optional] 

## Example

```python
from openapi_client.models.build_bazel_remote_execution_v2_directory_node import BuildBazelRemoteExecutionV2DirectoryNode

# TODO update the JSON string below
json = "{}"
# create an instance of BuildBazelRemoteExecutionV2DirectoryNode from a JSON string
build_bazel_remote_execution_v2_directory_node_instance = BuildBazelRemoteExecutionV2DirectoryNode.from_json(json)
# print the JSON string representation of the object
print(BuildBazelRemoteExecutionV2DirectoryNode.to_json())

# convert the object into a dict
build_bazel_remote_execution_v2_directory_node_dict = build_bazel_remote_execution_v2_directory_node_instance.to_dict()
# create an instance of BuildBazelRemoteExecutionV2DirectoryNode from a dict
build_bazel_remote_execution_v2_directory_node_from_dict = BuildBazelRemoteExecutionV2DirectoryNode.from_dict(build_bazel_remote_execution_v2_directory_node_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



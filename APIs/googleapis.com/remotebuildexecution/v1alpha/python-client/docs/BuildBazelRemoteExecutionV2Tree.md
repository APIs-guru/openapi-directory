# BuildBazelRemoteExecutionV2Tree

A `Tree` contains all the Directory protos in a single directory Merkle tree, compressed into one message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**children** | [**List[BuildBazelRemoteExecutionV2Directory]**](BuildBazelRemoteExecutionV2Directory.md) | All the child directories: the directories referred to by the root and, recursively, all its children. In order to reconstruct the directory tree, the client must take the digests of each of the child directories and then build up a tree starting from the &#x60;root&#x60;. Servers SHOULD ensure that these are ordered consistently such that two actions producing equivalent output directories on the same server implementation also produce Tree messages with matching digests. | [optional] 
**root** | [**BuildBazelRemoteExecutionV2Directory**](BuildBazelRemoteExecutionV2Directory.md) |  | [optional] 

## Example

```python
from openapi_client.models.build_bazel_remote_execution_v2_tree import BuildBazelRemoteExecutionV2Tree

# TODO update the JSON string below
json = "{}"
# create an instance of BuildBazelRemoteExecutionV2Tree from a JSON string
build_bazel_remote_execution_v2_tree_instance = BuildBazelRemoteExecutionV2Tree.from_json(json)
# print the JSON string representation of the object
print(BuildBazelRemoteExecutionV2Tree.to_json())

# convert the object into a dict
build_bazel_remote_execution_v2_tree_dict = build_bazel_remote_execution_v2_tree_instance.to_dict()
# create an instance of BuildBazelRemoteExecutionV2Tree from a dict
build_bazel_remote_execution_v2_tree_from_dict = BuildBazelRemoteExecutionV2Tree.from_dict(build_bazel_remote_execution_v2_tree_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



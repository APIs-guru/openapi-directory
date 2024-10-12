# BuildBazelRemoteExecutionV2Directory

A `Directory` represents a directory node in a file tree, containing zero or more children FileNodes, DirectoryNodes and SymlinkNodes. Each `Node` contains its name in the directory, either the digest of its content (either a file blob or a `Directory` proto) or a symlink target, as well as possibly some metadata about the file or directory. In order to ensure that two equivalent directory trees hash to the same value, the following restrictions MUST be obeyed when constructing a a `Directory`: * Every child in the directory must have a path of exactly one segment. Multiple levels of directory hierarchy may not be collapsed. * Each child in the directory must have a unique path segment (file name). Note that while the API itself is case-sensitive, the environment where the Action is executed may or may not be case-sensitive. That is, it is legal to call the API with a Directory that has both \"Foo\" and \"foo\" as children, but the Action may be rejected by the remote system upon execution. * The files, directories and symlinks in the directory must each be sorted in lexicographical order by path. The path strings must be sorted by code point, equivalently, by UTF-8 bytes. * The NodeProperties of files, directories, and symlinks must be sorted in lexicographical order by property name. A `Directory` that obeys the restrictions is said to be in canonical form. As an example, the following could be used for a file named `bar` and a directory named `foo` with an executable file named `baz` (hashes shortened for readability): ```json // (Directory proto) { files: [ { name: \"bar\", digest: { hash: \"4a73bc9d03...\", size: 65534 }, node_properties: [ { \"name\": \"MTime\", \"value\": \"2017-01-15T01:30:15.01Z\" } ] } ], directories: [ { name: \"foo\", digest: { hash: \"4cf2eda940...\", size: 43 } } ] } // (Directory proto with hash \"4cf2eda940...\" and size 43) { files: [ { name: \"baz\", digest: { hash: \"b2c941073e...\", size: 1294, }, is_executable: true } ] } ```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**directories** | [**List[BuildBazelRemoteExecutionV2DirectoryNode]**](BuildBazelRemoteExecutionV2DirectoryNode.md) | The subdirectories in the directory. | [optional] 
**files** | [**List[BuildBazelRemoteExecutionV2FileNode]**](BuildBazelRemoteExecutionV2FileNode.md) | The files in the directory. | [optional] 
**node_properties** | [**BuildBazelRemoteExecutionV2NodeProperties**](BuildBazelRemoteExecutionV2NodeProperties.md) |  | [optional] 
**symlinks** | [**List[BuildBazelRemoteExecutionV2SymlinkNode]**](BuildBazelRemoteExecutionV2SymlinkNode.md) | The symlinks in the directory. | [optional] 

## Example

```python
from openapi_client.models.build_bazel_remote_execution_v2_directory import BuildBazelRemoteExecutionV2Directory

# TODO update the JSON string below
json = "{}"
# create an instance of BuildBazelRemoteExecutionV2Directory from a JSON string
build_bazel_remote_execution_v2_directory_instance = BuildBazelRemoteExecutionV2Directory.from_json(json)
# print the JSON string representation of the object
print(BuildBazelRemoteExecutionV2Directory.to_json())

# convert the object into a dict
build_bazel_remote_execution_v2_directory_dict = build_bazel_remote_execution_v2_directory_instance.to_dict()
# create an instance of BuildBazelRemoteExecutionV2Directory from a dict
build_bazel_remote_execution_v2_directory_from_dict = BuildBazelRemoteExecutionV2Directory.from_dict(build_bazel_remote_execution_v2_directory_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



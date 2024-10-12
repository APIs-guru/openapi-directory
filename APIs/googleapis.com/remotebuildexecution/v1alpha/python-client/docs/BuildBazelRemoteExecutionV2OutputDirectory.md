# BuildBazelRemoteExecutionV2OutputDirectory

An `OutputDirectory` is the output in an `ActionResult` corresponding to a directory's full contents rather than a single file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_topologically_sorted** | **bool** | If set, consumers MAY make the following assumptions about the directories contained in the the Tree, so that it may be instantiated on a local file system by scanning through it sequentially: - All directories with the same binary representation are stored exactly once. - All directories, apart from the root directory, are referenced by at least one parent directory. - Directories are stored in topological order, with parents being stored before the child. The root directory is thus the first to be stored. Additionally, the Tree MUST be encoded as a stream of records, where each record has the following format: - A tag byte, having one of the following two values: - (1 &lt;&lt; 3) | 2 &#x3D;&#x3D; 0x0a: First record (the root directory). - (2 &lt;&lt; 3) | 2 &#x3D;&#x3D; 0x12: Any subsequent records (child directories). - The size of the directory, encoded as a base 128 varint. - The contents of the directory, encoded as a binary serialized Protobuf message. This encoding is a subset of the Protobuf wire format of the Tree message. As it is only permitted to store data associated with field numbers 1 and 2, the tag MUST be encoded as a single byte. More details on the Protobuf wire format can be found here: https://developers.google.com/protocol-buffers/docs/encoding It is recommended that implementations using this feature construct Tree objects manually using the specification given above, as opposed to using a Protobuf library to marshal a full Tree message. As individual Directory messages already need to be marshaled to compute their digests, constructing the Tree object manually avoids redundant marshaling. | [optional] 
**path** | **str** | The full path of the directory relative to the working directory. The path separator is a forward slash &#x60;/&#x60;. Since this is a relative path, it MUST NOT begin with a leading forward slash. The empty string value is allowed, and it denotes the entire working directory. | [optional] 
**tree_digest** | [**BuildBazelRemoteExecutionV2Digest**](BuildBazelRemoteExecutionV2Digest.md) |  | [optional] 

## Example

```python
from openapi_client.models.build_bazel_remote_execution_v2_output_directory import BuildBazelRemoteExecutionV2OutputDirectory

# TODO update the JSON string below
json = "{}"
# create an instance of BuildBazelRemoteExecutionV2OutputDirectory from a JSON string
build_bazel_remote_execution_v2_output_directory_instance = BuildBazelRemoteExecutionV2OutputDirectory.from_json(json)
# print the JSON string representation of the object
print(BuildBazelRemoteExecutionV2OutputDirectory.to_json())

# convert the object into a dict
build_bazel_remote_execution_v2_output_directory_dict = build_bazel_remote_execution_v2_output_directory_instance.to_dict()
# create an instance of BuildBazelRemoteExecutionV2OutputDirectory from a dict
build_bazel_remote_execution_v2_output_directory_from_dict = BuildBazelRemoteExecutionV2OutputDirectory.from_dict(build_bazel_remote_execution_v2_output_directory_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



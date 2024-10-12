# BuildBazelRemoteExecutionV2OutputFile

An `OutputFile` is similar to a FileNode, but it is used as an output in an `ActionResult`. It allows a full file path rather than only a name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contents** | **bytearray** | The contents of the file if inlining was requested. The server SHOULD NOT inline file contents unless requested by the client in the GetActionResultRequest message. The server MAY omit inlining, even if requested, and MUST do so if inlining would cause the response to exceed message size limits. Clients SHOULD NOT populate this field when uploading to the cache. | [optional] 
**digest** | [**BuildBazelRemoteExecutionV2Digest**](BuildBazelRemoteExecutionV2Digest.md) |  | [optional] 
**is_executable** | **bool** | True if file is executable, false otherwise. | [optional] 
**node_properties** | [**BuildBazelRemoteExecutionV2NodeProperties**](BuildBazelRemoteExecutionV2NodeProperties.md) |  | [optional] 
**path** | **str** | The full path of the file relative to the working directory, including the filename. The path separator is a forward slash &#x60;/&#x60;. Since this is a relative path, it MUST NOT begin with a leading forward slash. | [optional] 

## Example

```python
from openapi_client.models.build_bazel_remote_execution_v2_output_file import BuildBazelRemoteExecutionV2OutputFile

# TODO update the JSON string below
json = "{}"
# create an instance of BuildBazelRemoteExecutionV2OutputFile from a JSON string
build_bazel_remote_execution_v2_output_file_instance = BuildBazelRemoteExecutionV2OutputFile.from_json(json)
# print the JSON string representation of the object
print(BuildBazelRemoteExecutionV2OutputFile.to_json())

# convert the object into a dict
build_bazel_remote_execution_v2_output_file_dict = build_bazel_remote_execution_v2_output_file_instance.to_dict()
# create an instance of BuildBazelRemoteExecutionV2OutputFile from a dict
build_bazel_remote_execution_v2_output_file_from_dict = BuildBazelRemoteExecutionV2OutputFile.from_dict(build_bazel_remote_execution_v2_output_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



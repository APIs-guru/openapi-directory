# BuildBazelRemoteExecutionV2ExecuteOperationMetadata

Metadata about an ongoing execution, which will be contained in the metadata field of the Operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_digest** | [**BuildBazelRemoteExecutionV2Digest**](BuildBazelRemoteExecutionV2Digest.md) |  | [optional] 
**partial_execution_metadata** | [**BuildBazelRemoteExecutionV2ExecutedActionMetadata**](BuildBazelRemoteExecutionV2ExecutedActionMetadata.md) |  | [optional] 
**stage** | **str** | The current stage of execution. | [optional] 
**stderr_stream_name** | **str** | If set, the client can use this resource name with ByteStream.Read to stream the standard error from the endpoint hosting streamed responses. | [optional] 
**stdout_stream_name** | **str** | If set, the client can use this resource name with ByteStream.Read to stream the standard output from the endpoint hosting streamed responses. | [optional] 

## Example

```python
from openapi_client.models.build_bazel_remote_execution_v2_execute_operation_metadata import BuildBazelRemoteExecutionV2ExecuteOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of BuildBazelRemoteExecutionV2ExecuteOperationMetadata from a JSON string
build_bazel_remote_execution_v2_execute_operation_metadata_instance = BuildBazelRemoteExecutionV2ExecuteOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(BuildBazelRemoteExecutionV2ExecuteOperationMetadata.to_json())

# convert the object into a dict
build_bazel_remote_execution_v2_execute_operation_metadata_dict = build_bazel_remote_execution_v2_execute_operation_metadata_instance.to_dict()
# create an instance of BuildBazelRemoteExecutionV2ExecuteOperationMetadata from a dict
build_bazel_remote_execution_v2_execute_operation_metadata_from_dict = BuildBazelRemoteExecutionV2ExecuteOperationMetadata.from_dict(build_bazel_remote_execution_v2_execute_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



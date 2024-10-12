# BuildBazelRemoteExecutionV2RequestMetadata

An optional Metadata to attach to any RPC request to tell the server about an external context of the request. The server may use this for logging or other purposes. To use it, the client attaches the header to the call using the canonical proto serialization: * name: `build.bazel.remote.execution.v2.requestmetadata-bin` * contents: the base64 encoded binary `RequestMetadata` message. Note: the gRPC library serializes binary headers encoded in base64 by default (https://github.com/grpc/grpc/blob/master/doc/PROTOCOL-HTTP2.md#requests). Therefore, if the gRPC library is used to pass/retrieve this metadata, the user may ignore the base64 encoding and assume it is simply serialized as a binary message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_id** | **str** | An identifier that ties multiple requests to the same action. For example, multiple requests to the CAS, Action Cache, and Execution API are used in order to compile foo.cc. | [optional] 
**action_mnemonic** | **str** | A brief description of the kind of action, for example, CppCompile or GoLink. There is no standard agreed set of values for this, and they are expected to vary between different client tools. | [optional] 
**configuration_id** | **str** | An identifier for the configuration in which the target was built, e.g. for differentiating building host tools or different target platforms. There is no expectation that this value will have any particular structure, or equality across invocations, though some client tools may offer these guarantees. | [optional] 
**correlated_invocations_id** | **str** | An identifier to tie multiple tool invocations together. For example, runs of foo_test, bar_test and baz_test on a post-submit of a given patch. | [optional] 
**target_id** | **str** | An identifier for the target which produced this action. No guarantees are made around how many actions may relate to a single target. | [optional] 
**tool_details** | [**BuildBazelRemoteExecutionV2ToolDetails**](BuildBazelRemoteExecutionV2ToolDetails.md) |  | [optional] 
**tool_invocation_id** | **str** | An identifier that ties multiple actions together to a final result. For example, multiple actions are required to build and run foo_test. | [optional] 

## Example

```python
from openapi_client.models.build_bazel_remote_execution_v2_request_metadata import BuildBazelRemoteExecutionV2RequestMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of BuildBazelRemoteExecutionV2RequestMetadata from a JSON string
build_bazel_remote_execution_v2_request_metadata_instance = BuildBazelRemoteExecutionV2RequestMetadata.from_json(json)
# print the JSON string representation of the object
print(BuildBazelRemoteExecutionV2RequestMetadata.to_json())

# convert the object into a dict
build_bazel_remote_execution_v2_request_metadata_dict = build_bazel_remote_execution_v2_request_metadata_instance.to_dict()
# create an instance of BuildBazelRemoteExecutionV2RequestMetadata from a dict
build_bazel_remote_execution_v2_request_metadata_from_dict = BuildBazelRemoteExecutionV2RequestMetadata.from_dict(build_bazel_remote_execution_v2_request_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



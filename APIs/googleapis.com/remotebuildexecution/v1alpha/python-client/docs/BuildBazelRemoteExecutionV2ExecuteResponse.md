# BuildBazelRemoteExecutionV2ExecuteResponse

The response message for Execution.Execute, which will be contained in the response field of the Operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cached_result** | **bool** | True if the result was served from cache, false if it was executed. | [optional] 
**message** | **str** | Freeform informational message with details on the execution of the action that may be displayed to the user upon failure or when requested explicitly. | [optional] 
**result** | [**BuildBazelRemoteExecutionV2ActionResult**](BuildBazelRemoteExecutionV2ActionResult.md) |  | [optional] 
**server_logs** | [**Dict[str, BuildBazelRemoteExecutionV2LogFile]**](BuildBazelRemoteExecutionV2LogFile.md) | An optional list of additional log outputs the server wishes to provide. A server can use this to return execution-specific logs however it wishes. This is intended primarily to make it easier for users to debug issues that may be outside of the actual job execution, such as by identifying the worker executing the action or by providing logs from the worker&#39;s setup phase. The keys SHOULD be human readable so that a client can display them to a user. | [optional] 
**status** | [**GoogleRpcStatus**](GoogleRpcStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.build_bazel_remote_execution_v2_execute_response import BuildBazelRemoteExecutionV2ExecuteResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BuildBazelRemoteExecutionV2ExecuteResponse from a JSON string
build_bazel_remote_execution_v2_execute_response_instance = BuildBazelRemoteExecutionV2ExecuteResponse.from_json(json)
# print the JSON string representation of the object
print(BuildBazelRemoteExecutionV2ExecuteResponse.to_json())

# convert the object into a dict
build_bazel_remote_execution_v2_execute_response_dict = build_bazel_remote_execution_v2_execute_response_instance.to_dict()
# create an instance of BuildBazelRemoteExecutionV2ExecuteResponse from a dict
build_bazel_remote_execution_v2_execute_response_from_dict = BuildBazelRemoteExecutionV2ExecuteResponse.from_dict(build_bazel_remote_execution_v2_execute_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



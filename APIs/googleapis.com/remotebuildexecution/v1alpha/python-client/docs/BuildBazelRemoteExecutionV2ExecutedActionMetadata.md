# BuildBazelRemoteExecutionV2ExecutedActionMetadata

ExecutedActionMetadata contains details about a completed execution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auxiliary_metadata** | **List[Dict[str, object]]** | Details that are specific to the kind of worker used. For example, on POSIX-like systems this could contain a message with getrusage(2) statistics. | [optional] 
**execution_completed_timestamp** | **str** | When the worker completed executing the action command. | [optional] 
**execution_start_timestamp** | **str** | When the worker started executing the action command. | [optional] 
**input_fetch_completed_timestamp** | **str** | When the worker finished fetching action inputs. | [optional] 
**input_fetch_start_timestamp** | **str** | When the worker started fetching action inputs. | [optional] 
**output_upload_completed_timestamp** | **str** | When the worker finished uploading action outputs. | [optional] 
**output_upload_start_timestamp** | **str** | When the worker started uploading action outputs. | [optional] 
**queued_timestamp** | **str** | When was the action added to the queue. | [optional] 
**virtual_execution_duration** | **str** | New in v2.3: the amount of time the worker spent executing the action command, potentially computed using a worker-specific virtual clock. The virtual execution duration is only intended to cover the \&quot;execution\&quot; of the specified action and not time in queue nor any overheads before or after execution such as marshalling inputs/outputs. The server SHOULD avoid including time spent the client doesn&#39;t have control over, and MAY extend or reduce the execution duration to account for delays or speedups that occur during execution itself (e.g., lazily loading data from the Content Addressable Storage, live migration of virtual machines, emulation overhead). The method of timekeeping used to compute the virtual execution duration MUST be consistent with what is used to enforce the Action&#39;s &#x60;timeout&#x60;. There is no relationship between the virtual execution duration and the values of &#x60;execution_start_timestamp&#x60; and &#x60;execution_completed_timestamp&#x60;. | [optional] 
**worker** | **str** | The name of the worker which ran the execution. | [optional] 
**worker_completed_timestamp** | **str** | When the worker completed the action, including all stages. | [optional] 
**worker_start_timestamp** | **str** | When the worker received the action. | [optional] 

## Example

```python
from openapi_client.models.build_bazel_remote_execution_v2_executed_action_metadata import BuildBazelRemoteExecutionV2ExecutedActionMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of BuildBazelRemoteExecutionV2ExecutedActionMetadata from a JSON string
build_bazel_remote_execution_v2_executed_action_metadata_instance = BuildBazelRemoteExecutionV2ExecutedActionMetadata.from_json(json)
# print the JSON string representation of the object
print(BuildBazelRemoteExecutionV2ExecutedActionMetadata.to_json())

# convert the object into a dict
build_bazel_remote_execution_v2_executed_action_metadata_dict = build_bazel_remote_execution_v2_executed_action_metadata_instance.to_dict()
# create an instance of BuildBazelRemoteExecutionV2ExecutedActionMetadata from a dict
build_bazel_remote_execution_v2_executed_action_metadata_from_dict = BuildBazelRemoteExecutionV2ExecutedActionMetadata.from_dict(build_bazel_remote_execution_v2_executed_action_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



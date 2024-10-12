# BuildBazelRemoteExecutionV2LogFile

A `LogFile` is a log stored in the CAS.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**digest** | [**BuildBazelRemoteExecutionV2Digest**](BuildBazelRemoteExecutionV2Digest.md) |  | [optional] 
**human_readable** | **bool** | This is a hint as to the purpose of the log, and is set to true if the log is human-readable text that can be usefully displayed to a user, and false otherwise. For instance, if a command-line client wishes to print the server logs to the terminal for a failed action, this allows it to avoid displaying a binary file. | [optional] 

## Example

```python
from openapi_client.models.build_bazel_remote_execution_v2_log_file import BuildBazelRemoteExecutionV2LogFile

# TODO update the JSON string below
json = "{}"
# create an instance of BuildBazelRemoteExecutionV2LogFile from a JSON string
build_bazel_remote_execution_v2_log_file_instance = BuildBazelRemoteExecutionV2LogFile.from_json(json)
# print the JSON string representation of the object
print(BuildBazelRemoteExecutionV2LogFile.to_json())

# convert the object into a dict
build_bazel_remote_execution_v2_log_file_dict = build_bazel_remote_execution_v2_log_file_instance.to_dict()
# create an instance of BuildBazelRemoteExecutionV2LogFile from a dict
build_bazel_remote_execution_v2_log_file_from_dict = BuildBazelRemoteExecutionV2LogFile.from_dict(build_bazel_remote_execution_v2_log_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



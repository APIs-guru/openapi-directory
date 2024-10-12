# BuildBazelRemoteExecutionV2ToolDetails

Details for the tool used to call the API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tool_name** | **str** | Name of the tool, e.g. bazel. | [optional] 
**tool_version** | **str** | Version of the tool used for the request, e.g. 5.0.3. | [optional] 

## Example

```python
from openapi_client.models.build_bazel_remote_execution_v2_tool_details import BuildBazelRemoteExecutionV2ToolDetails

# TODO update the JSON string below
json = "{}"
# create an instance of BuildBazelRemoteExecutionV2ToolDetails from a JSON string
build_bazel_remote_execution_v2_tool_details_instance = BuildBazelRemoteExecutionV2ToolDetails.from_json(json)
# print the JSON string representation of the object
print(BuildBazelRemoteExecutionV2ToolDetails.to_json())

# convert the object into a dict
build_bazel_remote_execution_v2_tool_details_dict = build_bazel_remote_execution_v2_tool_details_instance.to_dict()
# create an instance of BuildBazelRemoteExecutionV2ToolDetails from a dict
build_bazel_remote_execution_v2_tool_details_from_dict = BuildBazelRemoteExecutionV2ToolDetails.from_dict(build_bazel_remote_execution_v2_tool_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



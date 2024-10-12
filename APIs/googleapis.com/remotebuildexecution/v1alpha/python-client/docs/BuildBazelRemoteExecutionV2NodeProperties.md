# BuildBazelRemoteExecutionV2NodeProperties

Node properties for FileNodes, DirectoryNodes, and SymlinkNodes. The server is responsible for specifying the properties that it accepts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mtime** | **str** | The file&#39;s last modification timestamp. | [optional] 
**properties** | [**List[BuildBazelRemoteExecutionV2NodeProperty]**](BuildBazelRemoteExecutionV2NodeProperty.md) | A list of string-based NodeProperties. | [optional] 
**unix_mode** | **int** | The UNIX file mode, e.g., 0755. | [optional] 

## Example

```python
from openapi_client.models.build_bazel_remote_execution_v2_node_properties import BuildBazelRemoteExecutionV2NodeProperties

# TODO update the JSON string below
json = "{}"
# create an instance of BuildBazelRemoteExecutionV2NodeProperties from a JSON string
build_bazel_remote_execution_v2_node_properties_instance = BuildBazelRemoteExecutionV2NodeProperties.from_json(json)
# print the JSON string representation of the object
print(BuildBazelRemoteExecutionV2NodeProperties.to_json())

# convert the object into a dict
build_bazel_remote_execution_v2_node_properties_dict = build_bazel_remote_execution_v2_node_properties_instance.to_dict()
# create an instance of BuildBazelRemoteExecutionV2NodeProperties from a dict
build_bazel_remote_execution_v2_node_properties_from_dict = BuildBazelRemoteExecutionV2NodeProperties.from_dict(build_bazel_remote_execution_v2_node_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



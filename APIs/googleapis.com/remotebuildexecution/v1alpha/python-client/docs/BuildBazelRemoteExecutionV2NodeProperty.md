# BuildBazelRemoteExecutionV2NodeProperty

A single property for FileNodes, DirectoryNodes, and SymlinkNodes. The server is responsible for specifying the property `name`s that it accepts. If permitted by the server, the same `name` may occur multiple times.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The property name. | [optional] 
**value** | **str** | The property value. | [optional] 

## Example

```python
from openapi_client.models.build_bazel_remote_execution_v2_node_property import BuildBazelRemoteExecutionV2NodeProperty

# TODO update the JSON string below
json = "{}"
# create an instance of BuildBazelRemoteExecutionV2NodeProperty from a JSON string
build_bazel_remote_execution_v2_node_property_instance = BuildBazelRemoteExecutionV2NodeProperty.from_json(json)
# print the JSON string representation of the object
print(BuildBazelRemoteExecutionV2NodeProperty.to_json())

# convert the object into a dict
build_bazel_remote_execution_v2_node_property_dict = build_bazel_remote_execution_v2_node_property_instance.to_dict()
# create an instance of BuildBazelRemoteExecutionV2NodeProperty from a dict
build_bazel_remote_execution_v2_node_property_from_dict = BuildBazelRemoteExecutionV2NodeProperty.from_dict(build_bazel_remote_execution_v2_node_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# BuildBazelRemoteExecutionV2PlatformProperty

A single property for the environment. The server is responsible for specifying the property `name`s that it accepts. If an unknown `name` is provided in the requirements for an Action, the server SHOULD reject the execution request. If permitted by the server, the same `name` may occur multiple times. The server is also responsible for specifying the interpretation of property `value`s. For instance, a property describing how much RAM must be available may be interpreted as allowing a worker with 16GB to fulfill a request for 8GB, while a property describing the OS environment on which the action must be performed may require an exact match with the worker's OS. The server MAY use the `value` of one or more properties to determine how it sets up the execution environment, such as by making specific system files available to the worker. Both names and values are typically case-sensitive. Note that the platform is implicitly part of the action digest, so even tiny changes in the names or values (like changing case) may result in different action cache entries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The property name. | [optional] 
**value** | **str** | The property value. | [optional] 

## Example

```python
from openapi_client.models.build_bazel_remote_execution_v2_platform_property import BuildBazelRemoteExecutionV2PlatformProperty

# TODO update the JSON string below
json = "{}"
# create an instance of BuildBazelRemoteExecutionV2PlatformProperty from a JSON string
build_bazel_remote_execution_v2_platform_property_instance = BuildBazelRemoteExecutionV2PlatformProperty.from_json(json)
# print the JSON string representation of the object
print(BuildBazelRemoteExecutionV2PlatformProperty.to_json())

# convert the object into a dict
build_bazel_remote_execution_v2_platform_property_dict = build_bazel_remote_execution_v2_platform_property_instance.to_dict()
# create an instance of BuildBazelRemoteExecutionV2PlatformProperty from a dict
build_bazel_remote_execution_v2_platform_property_from_dict = BuildBazelRemoteExecutionV2PlatformProperty.from_dict(build_bazel_remote_execution_v2_platform_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



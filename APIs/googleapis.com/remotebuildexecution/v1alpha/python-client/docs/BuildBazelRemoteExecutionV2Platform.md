# BuildBazelRemoteExecutionV2Platform

A `Platform` is a set of requirements, such as hardware, operating system, or compiler toolchain, for an Action's execution environment. A `Platform` is represented as a series of key-value pairs representing the properties that are required of the platform.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**List[BuildBazelRemoteExecutionV2PlatformProperty]**](BuildBazelRemoteExecutionV2PlatformProperty.md) | The properties that make up this platform. In order to ensure that equivalent &#x60;Platform&#x60;s always hash to the same value, the properties MUST be lexicographically sorted by name, and then by value. Sorting of strings is done by code point, equivalently, by the UTF-8 bytes. | [optional] 

## Example

```python
from openapi_client.models.build_bazel_remote_execution_v2_platform import BuildBazelRemoteExecutionV2Platform

# TODO update the JSON string below
json = "{}"
# create an instance of BuildBazelRemoteExecutionV2Platform from a JSON string
build_bazel_remote_execution_v2_platform_instance = BuildBazelRemoteExecutionV2Platform.from_json(json)
# print the JSON string representation of the object
print(BuildBazelRemoteExecutionV2Platform.to_json())

# convert the object into a dict
build_bazel_remote_execution_v2_platform_dict = build_bazel_remote_execution_v2_platform_instance.to_dict()
# create an instance of BuildBazelRemoteExecutionV2Platform from a dict
build_bazel_remote_execution_v2_platform_from_dict = BuildBazelRemoteExecutionV2Platform.from_dict(build_bazel_remote_execution_v2_platform_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# BuildBazelRemoteExecutionV2Action

An `Action` captures all the information about an execution which is required to reproduce it. `Action`s are the core component of the [Execution] service. A single `Action` represents a repeatable action that can be performed by the execution service. `Action`s can be succinctly identified by the digest of their wire format encoding and, once an `Action` has been executed, will be cached in the action cache. Future requests can then use the cached result rather than needing to run afresh. When a server completes execution of an Action, it MAY choose to cache the result in the ActionCache unless `do_not_cache` is `true`. Clients SHOULD expect the server to do so. By default, future calls to Execute the same `Action` will also serve their results from the cache. Clients must take care to understand the caching behaviour. Ideally, all `Action`s will be reproducible so that serving a result from cache is always desirable and correct.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command_digest** | [**BuildBazelRemoteExecutionV2Digest**](BuildBazelRemoteExecutionV2Digest.md) |  | [optional] 
**do_not_cache** | **bool** | If true, then the &#x60;Action&#x60;&#39;s result cannot be cached, and in-flight requests for the same &#x60;Action&#x60; may not be merged. | [optional] 
**input_root_digest** | [**BuildBazelRemoteExecutionV2Digest**](BuildBazelRemoteExecutionV2Digest.md) |  | [optional] 
**platform** | [**BuildBazelRemoteExecutionV2Platform**](BuildBazelRemoteExecutionV2Platform.md) |  | [optional] 
**salt** | **bytearray** | An optional additional salt value used to place this &#x60;Action&#x60; into a separate cache namespace from other instances having the same field contents. This salt typically comes from operational configuration specific to sources such as repo and service configuration, and allows disowning an entire set of ActionResults that might have been poisoned by buggy software or tool failures. | [optional] 
**timeout** | **str** | A timeout after which the execution should be killed. If the timeout is absent, then the client is specifying that the execution should continue as long as the server will let it. The server SHOULD impose a timeout if the client does not specify one, however, if the client does specify a timeout that is longer than the server&#39;s maximum timeout, the server MUST reject the request. The timeout is only intended to cover the \&quot;execution\&quot; of the specified action and not time in queue nor any overheads before or after execution such as marshalling inputs/outputs. The server SHOULD avoid including time spent the client doesn&#39;t have control over, and MAY extend or reduce the timeout to account for delays or speedups that occur during execution itself (e.g., lazily loading data from the Content Addressable Storage, live migration of virtual machines, emulation overhead). The timeout is a part of the Action message, and therefore two &#x60;Actions&#x60; with different timeouts are different, even if they are otherwise identical. This is because, if they were not, running an &#x60;Action&#x60; with a lower timeout than is required might result in a cache hit from an execution run with a longer timeout, hiding the fact that the timeout is too short. By encoding it directly in the &#x60;Action&#x60;, a lower timeout will result in a cache miss and the execution timeout will fail immediately, rather than whenever the cache entry gets evicted. | [optional] 

## Example

```python
from openapi_client.models.build_bazel_remote_execution_v2_action import BuildBazelRemoteExecutionV2Action

# TODO update the JSON string below
json = "{}"
# create an instance of BuildBazelRemoteExecutionV2Action from a JSON string
build_bazel_remote_execution_v2_action_instance = BuildBazelRemoteExecutionV2Action.from_json(json)
# print the JSON string representation of the object
print(BuildBazelRemoteExecutionV2Action.to_json())

# convert the object into a dict
build_bazel_remote_execution_v2_action_dict = build_bazel_remote_execution_v2_action_instance.to_dict()
# create an instance of BuildBazelRemoteExecutionV2Action from a dict
build_bazel_remote_execution_v2_action_from_dict = BuildBazelRemoteExecutionV2Action.from_dict(build_bazel_remote_execution_v2_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



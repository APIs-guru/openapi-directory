# Probe

Not supported by Cloud Run Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_exec** | [**ExecAction**](ExecAction.md) |  | [optional] 
**failure_threshold** | **int** | (Optional) Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1. | [optional] 
**grpc** | [**GRPCAction**](GRPCAction.md) |  | [optional] 
**http_get** | [**HTTPGetAction**](HTTPGetAction.md) |  | [optional] 
**initial_delay_seconds** | **int** | (Optional) Number of seconds after the container has started before the probe is initiated. Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes | [optional] 
**period_seconds** | **int** | (Optional) How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeout_seconds. | [optional] 
**success_threshold** | **int** | (Optional) Minimum consecutive successes for the probe to be considered successful after having failed. Must be 1 if set. | [optional] 
**tcp_socket** | [**TCPSocketAction**](TCPSocketAction.md) |  | [optional] 
**timeout_seconds** | **int** | (Optional) Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than period_seconds. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes | [optional] 

## Example

```python
from openapi_client.models.probe import Probe

# TODO update the JSON string below
json = "{}"
# create an instance of Probe from a JSON string
probe_instance = Probe.from_json(json)
# print the JSON string representation of the object
print(Probe.to_json())

# convert the object into a dict
probe_dict = probe_instance.to_dict()
# create an instance of Probe from a dict
probe_from_dict = Probe.from_dict(probe_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



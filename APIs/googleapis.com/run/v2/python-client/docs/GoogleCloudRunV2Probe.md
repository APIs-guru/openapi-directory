# GoogleCloudRunV2Probe

Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failure_threshold** | **int** | Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1. | [optional] 
**grpc** | [**GoogleCloudRunV2GRPCAction**](GoogleCloudRunV2GRPCAction.md) |  | [optional] 
**http_get** | [**GoogleCloudRunV2HTTPGetAction**](GoogleCloudRunV2HTTPGetAction.md) |  | [optional] 
**initial_delay_seconds** | **int** | Number of seconds after the container has started before the probe is initiated. Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. | [optional] 
**period_seconds** | **int** | How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeout_seconds. | [optional] 
**tcp_socket** | [**GoogleCloudRunV2TCPSocketAction**](GoogleCloudRunV2TCPSocketAction.md) |  | [optional] 
**timeout_seconds** | **int** | Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than period_seconds. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_run_v2_probe import GoogleCloudRunV2Probe

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRunV2Probe from a JSON string
google_cloud_run_v2_probe_instance = GoogleCloudRunV2Probe.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRunV2Probe.to_json())

# convert the object into a dict
google_cloud_run_v2_probe_dict = google_cloud_run_v2_probe_instance.to_dict()
# create an instance of GoogleCloudRunV2Probe from a dict
google_cloud_run_v2_probe_from_dict = GoogleCloudRunV2Probe.from_dict(google_cloud_run_v2_probe_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



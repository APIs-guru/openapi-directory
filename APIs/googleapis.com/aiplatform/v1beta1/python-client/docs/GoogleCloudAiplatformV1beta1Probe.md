# GoogleCloudAiplatformV1beta1Probe

Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_exec** | [**GoogleCloudAiplatformV1beta1ProbeExecAction**](GoogleCloudAiplatformV1beta1ProbeExecAction.md) |  | [optional] 
**period_seconds** | **int** | How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Must be less than timeout_seconds. Maps to Kubernetes probe argument &#39;periodSeconds&#39;. | [optional] 
**timeout_seconds** | **int** | Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Must be greater or equal to period_seconds. Maps to Kubernetes probe argument &#39;timeoutSeconds&#39;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_probe import GoogleCloudAiplatformV1beta1Probe

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1Probe from a JSON string
google_cloud_aiplatform_v1beta1_probe_instance = GoogleCloudAiplatformV1beta1Probe.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1Probe.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_probe_dict = google_cloud_aiplatform_v1beta1_probe_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1Probe from a dict
google_cloud_aiplatform_v1beta1_probe_from_dict = GoogleCloudAiplatformV1beta1Probe.from_dict(google_cloud_aiplatform_v1beta1_probe_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



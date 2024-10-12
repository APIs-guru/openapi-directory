# LivenessProbeRequirements

The liveness probe requirements.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failure_threshold** | **int** | The number of failures to allow before returning an unhealthy status. | [optional] 
**initial_delay_seconds** | **int** | The delay before the first probe in seconds. | [optional] 
**period_seconds** | **int** | The length of time between probes in seconds. | [optional] 
**success_threshold** | **int** | The number of successful probes before returning a healthy status. | [optional] 
**timeout_seconds** | **int** | The probe timeout in seconds. | [optional] 

## Example

```python
from openapi_client.models.liveness_probe_requirements import LivenessProbeRequirements

# TODO update the JSON string below
json = "{}"
# create an instance of LivenessProbeRequirements from a JSON string
liveness_probe_requirements_instance = LivenessProbeRequirements.from_json(json)
# print the JSON string representation of the object
print(LivenessProbeRequirements.to_json())

# convert the object into a dict
liveness_probe_requirements_dict = liveness_probe_requirements_instance.to_dict()
# create an instance of LivenessProbeRequirements from a dict
liveness_probe_requirements_from_dict = LivenessProbeRequirements.from_dict(liveness_probe_requirements_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



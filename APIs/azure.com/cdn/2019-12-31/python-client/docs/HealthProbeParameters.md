# HealthProbeParameters

The JSON object that contains the properties to send health probes to origin.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**probe_interval_in_seconds** | **int** | The number of seconds between health probes.Default is 240sec. | [optional] 
**probe_path** | **str** | The path relative to the origin that is used to determine the health of the origin. | [optional] 
**probe_protocol** | **str** | Protocol to use for health probe. | [optional] 
**probe_request_type** | **str** | The type of health probe request that is made. | [optional] 

## Example

```python
from openapi_client.models.health_probe_parameters import HealthProbeParameters

# TODO update the JSON string below
json = "{}"
# create an instance of HealthProbeParameters from a JSON string
health_probe_parameters_instance = HealthProbeParameters.from_json(json)
# print the JSON string representation of the object
print(HealthProbeParameters.to_json())

# convert the object into a dict
health_probe_parameters_dict = health_probe_parameters_instance.to_dict()
# create an instance of HealthProbeParameters from a dict
health_probe_parameters_from_dict = HealthProbeParameters.from_dict(health_probe_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



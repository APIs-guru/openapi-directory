# LoadBalancingSettingsUpdateParameters

Round-Robin load balancing settings for a backend pool

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_latency_milliseconds** | **int** | The additional latency in milliseconds for probes to fall into the lowest latency bucket | [optional] 
**sample_size** | **int** | The number of samples to consider for load balancing decisions | [optional] 
**successful_samples_required** | **int** | The number of samples within the sample period that must succeed | [optional] 

## Example

```python
from openapi_client.models.load_balancing_settings_update_parameters import LoadBalancingSettingsUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of LoadBalancingSettingsUpdateParameters from a JSON string
load_balancing_settings_update_parameters_instance = LoadBalancingSettingsUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(LoadBalancingSettingsUpdateParameters.to_json())

# convert the object into a dict
load_balancing_settings_update_parameters_dict = load_balancing_settings_update_parameters_instance.to_dict()
# create an instance of LoadBalancingSettingsUpdateParameters from a dict
load_balancing_settings_update_parameters_from_dict = LoadBalancingSettingsUpdateParameters.from_dict(load_balancing_settings_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



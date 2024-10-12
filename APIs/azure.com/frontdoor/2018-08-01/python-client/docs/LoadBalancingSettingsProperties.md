# LoadBalancingSettingsProperties

The JSON object that contains the properties required to create load balancing settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_state** | [**ResourceState**](ResourceState.md) |  | [optional] 
**additional_latency_milliseconds** | **int** | The additional latency in milliseconds for probes to fall into the lowest latency bucket | [optional] 
**sample_size** | **int** | The number of samples to consider for load balancing decisions | [optional] 
**successful_samples_required** | **int** | The number of samples within the sample period that must succeed | [optional] 

## Example

```python
from openapi_client.models.load_balancing_settings_properties import LoadBalancingSettingsProperties

# TODO update the JSON string below
json = "{}"
# create an instance of LoadBalancingSettingsProperties from a JSON string
load_balancing_settings_properties_instance = LoadBalancingSettingsProperties.from_json(json)
# print the JSON string representation of the object
print(LoadBalancingSettingsProperties.to_json())

# convert the object into a dict
load_balancing_settings_properties_dict = load_balancing_settings_properties_instance.to_dict()
# create an instance of LoadBalancingSettingsProperties from a dict
load_balancing_settings_properties_from_dict = LoadBalancingSettingsProperties.from_dict(load_balancing_settings_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# LatencyInjectionFaultConfig

Config for large latency injection fault

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_from** | **int** | The start range of latency added to the request | 
**ratio** | **float** | The percentage of requests affected by this fault. Value should be between 0.0 and 1.0 | 
**to** | **int** | The end range of latency added to the request | 

## Example

```python
from openapi_client.models.latency_injection_fault_config import LatencyInjectionFaultConfig

# TODO update the JSON string below
json = "{}"
# create an instance of LatencyInjectionFaultConfig from a JSON string
latency_injection_fault_config_instance = LatencyInjectionFaultConfig.from_json(json)
# print the JSON string representation of the object
print(LatencyInjectionFaultConfig.to_json())

# convert the object into a dict
latency_injection_fault_config_dict = latency_injection_fault_config_instance.to_dict()
# create an instance of LatencyInjectionFaultConfig from a dict
latency_injection_fault_config_from_dict = LatencyInjectionFaultConfig.from_dict(latency_injection_fault_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



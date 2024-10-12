# ChaosConfig

Configuration for the faults that can be injected in requests

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bad_responses_fault_config** | [**BadResponsesFaultConfig**](BadResponsesFaultConfig.md) |  | [optional] 
**enabled** | **bool** | Whether or not this config is enabled | 
**large_request_fault_config** | [**LargeRequestFaultConfig**](LargeRequestFaultConfig.md) |  | [optional] 
**large_response_fault_config** | [**LargeResponseFaultConfig**](LargeResponseFaultConfig.md) |  | [optional] 
**latency_injection_fault_config** | [**LatencyInjectionFaultConfig**](LatencyInjectionFaultConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.chaos_config import ChaosConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ChaosConfig from a JSON string
chaos_config_instance = ChaosConfig.from_json(json)
# print the JSON string representation of the object
print(ChaosConfig.to_json())

# convert the object into a dict
chaos_config_dict = chaos_config_instance.to_dict()
# create an instance of ChaosConfig from a dict
chaos_config_from_dict = ChaosConfig.from_dict(chaos_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



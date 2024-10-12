# AdaptiveNetworkHardening

The resource whose properties describes the Adaptive Network Hardening settings for some Azure resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AdaptiveNetworkHardeningProperties**](AdaptiveNetworkHardeningProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.adaptive_network_hardening import AdaptiveNetworkHardening

# TODO update the JSON string below
json = "{}"
# create an instance of AdaptiveNetworkHardening from a JSON string
adaptive_network_hardening_instance = AdaptiveNetworkHardening.from_json(json)
# print the JSON string representation of the object
print(AdaptiveNetworkHardening.to_json())

# convert the object into a dict
adaptive_network_hardening_dict = adaptive_network_hardening_instance.to_dict()
# create an instance of AdaptiveNetworkHardening from a dict
adaptive_network_hardening_from_dict = AdaptiveNetworkHardening.from_dict(adaptive_network_hardening_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



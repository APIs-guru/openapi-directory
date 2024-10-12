# AdaptiveNetworkHardeningProperties

Adaptive Network Hardening resource properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**effective_network_security_groups** | [**List[EffectiveNetworkSecurityGroups]**](EffectiveNetworkSecurityGroups.md) | The Network Security Groups effective on the network interfaces of the protected resource | [optional] 
**rules** | [**List[Rule]**](Rule.md) | The security rules which are recommended to be effective on the VM | [optional] 
**rules_calculation_time** | **datetime** | The UTC time on which the rules were calculated | [optional] 

## Example

```python
from openapi_client.models.adaptive_network_hardening_properties import AdaptiveNetworkHardeningProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AdaptiveNetworkHardeningProperties from a JSON string
adaptive_network_hardening_properties_instance = AdaptiveNetworkHardeningProperties.from_json(json)
# print the JSON string representation of the object
print(AdaptiveNetworkHardeningProperties.to_json())

# convert the object into a dict
adaptive_network_hardening_properties_dict = adaptive_network_hardening_properties_instance.to_dict()
# create an instance of AdaptiveNetworkHardeningProperties from a dict
adaptive_network_hardening_properties_from_dict = AdaptiveNetworkHardeningProperties.from_dict(adaptive_network_hardening_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



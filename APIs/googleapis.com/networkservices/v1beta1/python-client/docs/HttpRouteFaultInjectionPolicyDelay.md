# HttpRouteFaultInjectionPolicyDelay

Specification of how client requests are delayed as part of fault injection before being sent to a destination.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fixed_delay** | **str** | Specify a fixed delay before forwarding the request. | [optional] 
**percentage** | **int** | The percentage of traffic on which delay will be injected. The value must be between [0, 100] | [optional] 

## Example

```python
from openapi_client.models.http_route_fault_injection_policy_delay import HttpRouteFaultInjectionPolicyDelay

# TODO update the JSON string below
json = "{}"
# create an instance of HttpRouteFaultInjectionPolicyDelay from a JSON string
http_route_fault_injection_policy_delay_instance = HttpRouteFaultInjectionPolicyDelay.from_json(json)
# print the JSON string representation of the object
print(HttpRouteFaultInjectionPolicyDelay.to_json())

# convert the object into a dict
http_route_fault_injection_policy_delay_dict = http_route_fault_injection_policy_delay_instance.to_dict()
# create an instance of HttpRouteFaultInjectionPolicyDelay from a dict
http_route_fault_injection_policy_delay_from_dict = HttpRouteFaultInjectionPolicyDelay.from_dict(http_route_fault_injection_policy_delay_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# HttpRouteFaultInjectionPolicy

The specification for fault injection introduced into traffic to test the resiliency of clients to destination service failure. As part of fault injection, when clients send requests to a destination, delays can be introduced by client proxy on a percentage of requests before sending those requests to the destination service. Similarly requests can be aborted by client proxy for a percentage of requests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**abort** | [**HttpRouteFaultInjectionPolicyAbort**](HttpRouteFaultInjectionPolicyAbort.md) |  | [optional] 
**delay** | [**HttpRouteFaultInjectionPolicyDelay**](HttpRouteFaultInjectionPolicyDelay.md) |  | [optional] 

## Example

```python
from openapi_client.models.http_route_fault_injection_policy import HttpRouteFaultInjectionPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of HttpRouteFaultInjectionPolicy from a JSON string
http_route_fault_injection_policy_instance = HttpRouteFaultInjectionPolicy.from_json(json)
# print the JSON string representation of the object
print(HttpRouteFaultInjectionPolicy.to_json())

# convert the object into a dict
http_route_fault_injection_policy_dict = http_route_fault_injection_policy_instance.to_dict()
# create an instance of HttpRouteFaultInjectionPolicy from a dict
http_route_fault_injection_policy_from_dict = HttpRouteFaultInjectionPolicy.from_dict(http_route_fault_injection_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



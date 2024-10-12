# GrpcRouteFaultInjectionPolicyDelay

Specification of how client requests are delayed as part of fault injection before being sent to a destination.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fixed_delay** | **str** | Specify a fixed delay before forwarding the request. | [optional] 
**percentage** | **int** | The percentage of traffic on which delay will be injected. The value must be between [0, 100] | [optional] 

## Example

```python
from openapi_client.models.grpc_route_fault_injection_policy_delay import GrpcRouteFaultInjectionPolicyDelay

# TODO update the JSON string below
json = "{}"
# create an instance of GrpcRouteFaultInjectionPolicyDelay from a JSON string
grpc_route_fault_injection_policy_delay_instance = GrpcRouteFaultInjectionPolicyDelay.from_json(json)
# print the JSON string representation of the object
print(GrpcRouteFaultInjectionPolicyDelay.to_json())

# convert the object into a dict
grpc_route_fault_injection_policy_delay_dict = grpc_route_fault_injection_policy_delay_instance.to_dict()
# create an instance of GrpcRouteFaultInjectionPolicyDelay from a dict
grpc_route_fault_injection_policy_delay_from_dict = GrpcRouteFaultInjectionPolicyDelay.from_dict(grpc_route_fault_injection_policy_delay_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



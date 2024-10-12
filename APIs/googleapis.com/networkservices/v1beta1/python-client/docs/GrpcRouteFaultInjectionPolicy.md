# GrpcRouteFaultInjectionPolicy

The specification for fault injection introduced into traffic to test the resiliency of clients to destination service failure. As part of fault injection, when clients send requests to a destination, delays can be introduced on a percentage of requests before sending those requests to the destination service. Similarly requests from clients can be aborted by for a percentage of requests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**abort** | [**GrpcRouteFaultInjectionPolicyAbort**](GrpcRouteFaultInjectionPolicyAbort.md) |  | [optional] 
**delay** | [**GrpcRouteFaultInjectionPolicyDelay**](GrpcRouteFaultInjectionPolicyDelay.md) |  | [optional] 

## Example

```python
from openapi_client.models.grpc_route_fault_injection_policy import GrpcRouteFaultInjectionPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of GrpcRouteFaultInjectionPolicy from a JSON string
grpc_route_fault_injection_policy_instance = GrpcRouteFaultInjectionPolicy.from_json(json)
# print the JSON string representation of the object
print(GrpcRouteFaultInjectionPolicy.to_json())

# convert the object into a dict
grpc_route_fault_injection_policy_dict = grpc_route_fault_injection_policy_instance.to_dict()
# create an instance of GrpcRouteFaultInjectionPolicy from a dict
grpc_route_fault_injection_policy_from_dict = GrpcRouteFaultInjectionPolicy.from_dict(grpc_route_fault_injection_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



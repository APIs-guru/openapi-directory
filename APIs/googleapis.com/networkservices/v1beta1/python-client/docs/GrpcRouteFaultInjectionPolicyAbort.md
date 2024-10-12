# GrpcRouteFaultInjectionPolicyAbort

Specification of how client requests are aborted as part of fault injection before being sent to a destination.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**http_status** | **int** | The HTTP status code used to abort the request. The value must be between 200 and 599 inclusive. | [optional] 
**percentage** | **int** | The percentage of traffic which will be aborted. The value must be between [0, 100] | [optional] 

## Example

```python
from openapi_client.models.grpc_route_fault_injection_policy_abort import GrpcRouteFaultInjectionPolicyAbort

# TODO update the JSON string below
json = "{}"
# create an instance of GrpcRouteFaultInjectionPolicyAbort from a JSON string
grpc_route_fault_injection_policy_abort_instance = GrpcRouteFaultInjectionPolicyAbort.from_json(json)
# print the JSON string representation of the object
print(GrpcRouteFaultInjectionPolicyAbort.to_json())

# convert the object into a dict
grpc_route_fault_injection_policy_abort_dict = grpc_route_fault_injection_policy_abort_instance.to_dict()
# create an instance of GrpcRouteFaultInjectionPolicyAbort from a dict
grpc_route_fault_injection_policy_abort_from_dict = GrpcRouteFaultInjectionPolicyAbort.from_dict(grpc_route_fault_injection_policy_abort_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



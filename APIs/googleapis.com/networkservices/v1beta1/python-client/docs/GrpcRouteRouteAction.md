# GrpcRouteRouteAction

Specifies how to route matched traffic.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destinations** | [**List[GrpcRouteDestination]**](GrpcRouteDestination.md) | Optional. The destination services to which traffic should be forwarded. If multiple destinations are specified, traffic will be split between Backend Service(s) according to the weight field of these destinations. | [optional] 
**fault_injection_policy** | [**GrpcRouteFaultInjectionPolicy**](GrpcRouteFaultInjectionPolicy.md) |  | [optional] 
**idle_timeout** | **str** | Optional. Specifies the idle timeout for the selected route. The idle timeout is defined as the period in which there are no bytes sent or received on either the upstream or downstream connection. If not set, the default idle timeout is 1 hour. If set to 0s, the timeout will be disabled. | [optional] 
**retry_policy** | [**GrpcRouteRetryPolicy**](GrpcRouteRetryPolicy.md) |  | [optional] 
**stateful_session_affinity** | [**GrpcRouteStatefulSessionAffinityPolicy**](GrpcRouteStatefulSessionAffinityPolicy.md) |  | [optional] 
**timeout** | **str** | Optional. Specifies the timeout for selected route. Timeout is computed from the time the request has been fully processed (i.e. end of stream) up until the response has been completely processed. Timeout includes all retries. | [optional] 

## Example

```python
from openapi_client.models.grpc_route_route_action import GrpcRouteRouteAction

# TODO update the JSON string below
json = "{}"
# create an instance of GrpcRouteRouteAction from a JSON string
grpc_route_route_action_instance = GrpcRouteRouteAction.from_json(json)
# print the JSON string representation of the object
print(GrpcRouteRouteAction.to_json())

# convert the object into a dict
grpc_route_route_action_dict = grpc_route_route_action_instance.to_dict()
# create an instance of GrpcRouteRouteAction from a dict
grpc_route_route_action_from_dict = GrpcRouteRouteAction.from_dict(grpc_route_route_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



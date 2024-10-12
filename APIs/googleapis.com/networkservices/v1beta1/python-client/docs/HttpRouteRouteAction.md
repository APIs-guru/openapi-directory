# HttpRouteRouteAction

The specifications for routing traffic and applying associated policies.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cors_policy** | [**HttpRouteCorsPolicy**](HttpRouteCorsPolicy.md) |  | [optional] 
**destinations** | [**List[HttpRouteDestination]**](HttpRouteDestination.md) | The destination to which traffic should be forwarded. | [optional] 
**direct_response** | [**HttpRouteHttpDirectResponse**](HttpRouteHttpDirectResponse.md) |  | [optional] 
**fault_injection_policy** | [**HttpRouteFaultInjectionPolicy**](HttpRouteFaultInjectionPolicy.md) |  | [optional] 
**idle_timeout** | **str** | Optional. Specifies the idle timeout for the selected route. The idle timeout is defined as the period in which there are no bytes sent or received on either the upstream or downstream connection. If not set, the default idle timeout is 1 hour. If set to 0s, the timeout will be disabled. | [optional] 
**redirect** | [**HttpRouteRedirect**](HttpRouteRedirect.md) |  | [optional] 
**request_header_modifier** | [**HttpRouteHeaderModifier**](HttpRouteHeaderModifier.md) |  | [optional] 
**request_mirror_policy** | [**HttpRouteRequestMirrorPolicy**](HttpRouteRequestMirrorPolicy.md) |  | [optional] 
**response_header_modifier** | [**HttpRouteHeaderModifier**](HttpRouteHeaderModifier.md) |  | [optional] 
**retry_policy** | [**HttpRouteRetryPolicy**](HttpRouteRetryPolicy.md) |  | [optional] 
**stateful_session_affinity** | [**HttpRouteStatefulSessionAffinityPolicy**](HttpRouteStatefulSessionAffinityPolicy.md) |  | [optional] 
**timeout** | **str** | Specifies the timeout for selected route. Timeout is computed from the time the request has been fully processed (i.e. end of stream) up until the response has been completely processed. Timeout includes all retries. | [optional] 
**url_rewrite** | [**HttpRouteURLRewrite**](HttpRouteURLRewrite.md) |  | [optional] 

## Example

```python
from openapi_client.models.http_route_route_action import HttpRouteRouteAction

# TODO update the JSON string below
json = "{}"
# create an instance of HttpRouteRouteAction from a JSON string
http_route_route_action_instance = HttpRouteRouteAction.from_json(json)
# print the JSON string representation of the object
print(HttpRouteRouteAction.to_json())

# convert the object into a dict
http_route_route_action_dict = http_route_route_action_instance.to_dict()
# create an instance of HttpRouteRouteAction from a dict
http_route_route_action_from_dict = HttpRouteRouteAction.from_dict(http_route_route_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



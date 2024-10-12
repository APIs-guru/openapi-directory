# TcpRouteRouteAction

The specifications for routing traffic and applying associated policies.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destinations** | [**List[TcpRouteRouteDestination]**](TcpRouteRouteDestination.md) | Optional. The destination services to which traffic should be forwarded. At least one destination service is required. Only one of route destination or original destination can be set. | [optional] 
**idle_timeout** | **str** | Optional. Specifies the idle timeout for the selected route. The idle timeout is defined as the period in which there are no bytes sent or received on either the upstream or downstream connection. If not set, the default idle timeout is 30 seconds. If set to 0s, the timeout will be disabled. | [optional] 
**original_destination** | **bool** | Optional. If true, Router will use the destination IP and port of the original connection as the destination of the request. Default is false. Only one of route destinations or original destination can be set. | [optional] 

## Example

```python
from openapi_client.models.tcp_route_route_action import TcpRouteRouteAction

# TODO update the JSON string below
json = "{}"
# create an instance of TcpRouteRouteAction from a JSON string
tcp_route_route_action_instance = TcpRouteRouteAction.from_json(json)
# print the JSON string representation of the object
print(TcpRouteRouteAction.to_json())

# convert the object into a dict
tcp_route_route_action_dict = tcp_route_route_action_instance.to_dict()
# create an instance of TcpRouteRouteAction from a dict
tcp_route_route_action_from_dict = TcpRouteRouteAction.from_dict(tcp_route_route_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



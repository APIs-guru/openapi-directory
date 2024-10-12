# TlsRouteRouteAction

The specifications for routing traffic and applying associated policies.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destinations** | [**List[TlsRouteRouteDestination]**](TlsRouteRouteDestination.md) | Required. The destination services to which traffic should be forwarded. At least one destination service is required. | [optional] 
**idle_timeout** | **str** | Optional. Specifies the idle timeout for the selected route. The idle timeout is defined as the period in which there are no bytes sent or received on either the upstream or downstream connection. If not set, the default idle timeout is 1 hour. If set to 0s, the timeout will be disabled. | [optional] 

## Example

```python
from openapi_client.models.tls_route_route_action import TlsRouteRouteAction

# TODO update the JSON string below
json = "{}"
# create an instance of TlsRouteRouteAction from a JSON string
tls_route_route_action_instance = TlsRouteRouteAction.from_json(json)
# print the JSON string representation of the object
print(TlsRouteRouteAction.to_json())

# convert the object into a dict
tls_route_route_action_dict = tls_route_route_action_instance.to_dict()
# create an instance of TlsRouteRouteAction from a dict
tls_route_route_action_from_dict = TlsRouteRouteAction.from_dict(tls_route_route_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# TcpRouteRouteRule

Specifies how to match traffic and how to route traffic when traffic is matched.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | [**TcpRouteRouteAction**](TcpRouteRouteAction.md) |  | [optional] 
**matches** | [**List[TcpRouteRouteMatch]**](TcpRouteRouteMatch.md) | Optional. RouteMatch defines the predicate used to match requests to a given action. Multiple match types are \&quot;OR\&quot;ed for evaluation. If no routeMatch field is specified, this rule will unconditionally match traffic. | [optional] 

## Example

```python
from openapi_client.models.tcp_route_route_rule import TcpRouteRouteRule

# TODO update the JSON string below
json = "{}"
# create an instance of TcpRouteRouteRule from a JSON string
tcp_route_route_rule_instance = TcpRouteRouteRule.from_json(json)
# print the JSON string representation of the object
print(TcpRouteRouteRule.to_json())

# convert the object into a dict
tcp_route_route_rule_dict = tcp_route_route_rule_instance.to_dict()
# create an instance of TcpRouteRouteRule from a dict
tcp_route_route_rule_from_dict = TcpRouteRouteRule.from_dict(tcp_route_route_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



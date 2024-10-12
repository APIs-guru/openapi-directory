# TlsRouteRouteRule

Specifies how to match traffic and how to route traffic when traffic is matched.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | [**TlsRouteRouteAction**](TlsRouteRouteAction.md) |  | [optional] 
**matches** | [**List[TlsRouteRouteMatch]**](TlsRouteRouteMatch.md) | Required. RouteMatch defines the predicate used to match requests to a given action. Multiple match types are \&quot;OR\&quot;ed for evaluation. | [optional] 

## Example

```python
from openapi_client.models.tls_route_route_rule import TlsRouteRouteRule

# TODO update the JSON string below
json = "{}"
# create an instance of TlsRouteRouteRule from a JSON string
tls_route_route_rule_instance = TlsRouteRouteRule.from_json(json)
# print the JSON string representation of the object
print(TlsRouteRouteRule.to_json())

# convert the object into a dict
tls_route_route_rule_dict = tls_route_route_rule_instance.to_dict()
# create an instance of TlsRouteRouteRule from a dict
tls_route_route_rule_from_dict = TlsRouteRouteRule.from_dict(tls_route_route_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



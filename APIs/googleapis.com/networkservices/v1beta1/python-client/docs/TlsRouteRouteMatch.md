# TlsRouteRouteMatch

RouteMatch defines the predicate used to match requests to a given action. Multiple match types are \"AND\"ed for evaluation. If no routeMatch field is specified, this rule will unconditionally match traffic.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alpn** | **List[str]** | Optional. ALPN (Application-Layer Protocol Negotiation) to match against. Examples: \&quot;http/1.1\&quot;, \&quot;h2\&quot;. At least one of sni_host and alpn is required. Up to 5 alpns across all matches can be set. | [optional] 
**sni_host** | **List[str]** | Optional. SNI (server name indicator) to match against. SNI will be matched against all wildcard domains, i.e. &#x60;www.example.com&#x60; will be first matched against &#x60;www.example.com&#x60;, then &#x60;*.example.com&#x60;, then &#x60;*.com.&#x60; Partial wildcards are not supported, and values like *w.example.com are invalid. At least one of sni_host and alpn is required. Up to 5 sni hosts across all matches can be set. | [optional] 

## Example

```python
from openapi_client.models.tls_route_route_match import TlsRouteRouteMatch

# TODO update the JSON string below
json = "{}"
# create an instance of TlsRouteRouteMatch from a JSON string
tls_route_route_match_instance = TlsRouteRouteMatch.from_json(json)
# print the JSON string representation of the object
print(TlsRouteRouteMatch.to_json())

# convert the object into a dict
tls_route_route_match_dict = tls_route_route_match_instance.to_dict()
# create an instance of TlsRouteRouteMatch from a dict
tls_route_route_match_from_dict = TlsRouteRouteMatch.from_dict(tls_route_route_match_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



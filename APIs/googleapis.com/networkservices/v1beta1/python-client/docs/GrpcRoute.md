# GrpcRoute

GrpcRoute is the resource defining how gRPC traffic routed by a Mesh or Gateway resource is routed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The timestamp when the resource was created. | [optional] [readonly] 
**description** | **str** | Optional. A free-text description of the resource. Max length 1024 characters. | [optional] 
**gateways** | **List[str]** | Optional. Gateways defines a list of gateways this GrpcRoute is attached to, as one of the routing rules to route the requests served by the gateway. Each gateway reference should match the pattern: &#x60;projects/*/locations/global/gateways/&#x60; | [optional] 
**hostnames** | **List[str]** | Required. Service hostnames with an optional port for which this route describes traffic. Format: [:] Hostname is the fully qualified domain name of a network host. This matches the RFC 1123 definition of a hostname with 2 notable exceptions: - IPs are not allowed. - A hostname may be prefixed with a wildcard label (&#x60;*.&#x60;). The wildcard label must appear by itself as the first label. Hostname can be \&quot;precise\&quot; which is a domain name without the terminating dot of a network host (e.g. &#x60;foo.example.com&#x60;) or \&quot;wildcard\&quot;, which is a domain name prefixed with a single wildcard label (e.g. &#x60;*.example.com&#x60;). Note that as per RFC1035 and RFC1123, a label must consist of lower case alphanumeric characters or &#39;-&#39;, and must start and end with an alphanumeric character. No other punctuation is allowed. The routes associated with a Mesh or Gateway must have unique hostnames. If you attempt to attach multiple routes with conflicting hostnames, the configuration will be rejected. For example, while it is acceptable for routes for the hostnames &#x60;*.foo.bar.com&#x60; and &#x60;*.bar.com&#x60; to be associated with the same route, it is not possible to associate two routes both with &#x60;*.bar.com&#x60; or both with &#x60;bar.com&#x60;. If a port is specified, then gRPC clients must use the channel URI with the port to match this rule (i.e. \&quot;xds:///service:123\&quot;), otherwise they must supply the URI without a port (i.e. \&quot;xds:///service\&quot;). | [optional] 
**labels** | **Dict[str, str]** | Optional. Set of label tags associated with the GrpcRoute resource. | [optional] 
**meshes** | **List[str]** | Optional. Meshes defines a list of meshes this GrpcRoute is attached to, as one of the routing rules to route the requests served by the mesh. Each mesh reference should match the pattern: &#x60;projects/*/locations/global/meshes/&#x60; | [optional] 
**name** | **str** | Required. Name of the GrpcRoute resource. It matches pattern &#x60;projects/*/locations/global/grpcRoutes/&#x60; | [optional] 
**rules** | [**List[GrpcRouteRouteRule]**](GrpcRouteRouteRule.md) | Required. A list of detailed rules defining how to route traffic. Within a single GrpcRoute, the GrpcRoute.RouteAction associated with the first matching GrpcRoute.RouteRule will be executed. At least one rule must be supplied. | [optional] 
**self_link** | **str** | Output only. Server-defined URL of this resource | [optional] [readonly] 
**update_time** | **str** | Output only. The timestamp when the resource was updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.grpc_route import GrpcRoute

# TODO update the JSON string below
json = "{}"
# create an instance of GrpcRoute from a JSON string
grpc_route_instance = GrpcRoute.from_json(json)
# print the JSON string representation of the object
print(GrpcRoute.to_json())

# convert the object into a dict
grpc_route_dict = grpc_route_instance.to_dict()
# create an instance of GrpcRoute from a dict
grpc_route_from_dict = GrpcRoute.from_dict(grpc_route_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



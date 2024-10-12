# TcpRoute

TcpRoute is the resource defining how TCP traffic should be routed by a Mesh/Gateway resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The timestamp when the resource was created. | [optional] [readonly] 
**description** | **str** | Optional. A free-text description of the resource. Max length 1024 characters. | [optional] 
**gateways** | **List[str]** | Optional. Gateways defines a list of gateways this TcpRoute is attached to, as one of the routing rules to route the requests served by the gateway. Each gateway reference should match the pattern: &#x60;projects/*/locations/global/gateways/&#x60; | [optional] 
**labels** | **Dict[str, str]** | Optional. Set of label tags associated with the TcpRoute resource. | [optional] 
**meshes** | **List[str]** | Optional. Meshes defines a list of meshes this TcpRoute is attached to, as one of the routing rules to route the requests served by the mesh. Each mesh reference should match the pattern: &#x60;projects/*/locations/global/meshes/&#x60; The attached Mesh should be of a type SIDECAR | [optional] 
**name** | **str** | Required. Name of the TcpRoute resource. It matches pattern &#x60;projects/*/locations/global/tcpRoutes/tcp_route_name&gt;&#x60;. | [optional] 
**rules** | [**List[TcpRouteRouteRule]**](TcpRouteRouteRule.md) | Required. Rules that define how traffic is routed and handled. At least one RouteRule must be supplied. If there are multiple rules then the action taken will be the first rule to match. | [optional] 
**self_link** | **str** | Output only. Server-defined URL of this resource | [optional] [readonly] 
**update_time** | **str** | Output only. The timestamp when the resource was updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.tcp_route import TcpRoute

# TODO update the JSON string below
json = "{}"
# create an instance of TcpRoute from a JSON string
tcp_route_instance = TcpRoute.from_json(json)
# print the JSON string representation of the object
print(TcpRoute.to_json())

# convert the object into a dict
tcp_route_dict = tcp_route_instance.to_dict()
# create an instance of TcpRoute from a dict
tcp_route_from_dict = TcpRoute.from_dict(tcp_route_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



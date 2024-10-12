# TcpRouteRouteDestination

Describe the destination for traffic to be routed to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_name** | **str** | Required. The URL of a BackendService to route traffic to. | [optional] 
**weight** | **int** | Optional. Specifies the proportion of requests forwarded to the backend referenced by the serviceName field. This is computed as: - weight/Sum(weights in this destination list). For non-zero values, there may be some epsilon from the exact proportion defined here depending on the precision an implementation supports. If only one serviceName is specified and it has a weight greater than 0, 100% of the traffic is forwarded to that backend. If weights are specified for any one service name, they need to be specified for all of them. If weights are unspecified for all services, then, traffic is distributed in equal proportions to all of them. | [optional] 

## Example

```python
from openapi_client.models.tcp_route_route_destination import TcpRouteRouteDestination

# TODO update the JSON string below
json = "{}"
# create an instance of TcpRouteRouteDestination from a JSON string
tcp_route_route_destination_instance = TcpRouteRouteDestination.from_json(json)
# print the JSON string representation of the object
print(TcpRouteRouteDestination.to_json())

# convert the object into a dict
tcp_route_route_destination_dict = tcp_route_route_destination_instance.to_dict()
# create an instance of TcpRouteRouteDestination from a dict
tcp_route_route_destination_from_dict = TcpRouteRouteDestination.from_dict(tcp_route_route_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



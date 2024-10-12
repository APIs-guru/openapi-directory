# GrpcRouteDestination

The destination to which traffic will be routed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_name** | **str** | Required. The URL of a destination service to which to route traffic. Must refer to either a BackendService or ServiceDirectoryService. | [optional] 
**weight** | **int** | Optional. Specifies the proportion of requests forwarded to the backend referenced by the serviceName field. This is computed as: - weight/Sum(weights in this destination list). For non-zero values, there may be some epsilon from the exact proportion defined here depending on the precision an implementation supports. If only one serviceName is specified and it has a weight greater than 0, 100% of the traffic is forwarded to that backend. If weights are specified for any one service name, they need to be specified for all of them. If weights are unspecified for all services, then, traffic is distributed in equal proportions to all of them. | [optional] 

## Example

```python
from openapi_client.models.grpc_route_destination import GrpcRouteDestination

# TODO update the JSON string below
json = "{}"
# create an instance of GrpcRouteDestination from a JSON string
grpc_route_destination_instance = GrpcRouteDestination.from_json(json)
# print the JSON string representation of the object
print(GrpcRouteDestination.to_json())

# convert the object into a dict
grpc_route_destination_dict = grpc_route_destination_instance.to_dict()
# create an instance of GrpcRouteDestination from a dict
grpc_route_destination_from_dict = GrpcRouteDestination.from_dict(grpc_route_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# GrpcRouteRouteMatch

Criteria for matching traffic. A RouteMatch will be considered to match when all supplied fields match.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**headers** | [**List[GrpcRouteHeaderMatch]**](GrpcRouteHeaderMatch.md) | Optional. Specifies a collection of headers to match. | [optional] 
**method** | [**GrpcRouteMethodMatch**](GrpcRouteMethodMatch.md) |  | [optional] 

## Example

```python
from openapi_client.models.grpc_route_route_match import GrpcRouteRouteMatch

# TODO update the JSON string below
json = "{}"
# create an instance of GrpcRouteRouteMatch from a JSON string
grpc_route_route_match_instance = GrpcRouteRouteMatch.from_json(json)
# print the JSON string representation of the object
print(GrpcRouteRouteMatch.to_json())

# convert the object into a dict
grpc_route_route_match_dict = grpc_route_route_match_instance.to_dict()
# create an instance of GrpcRouteRouteMatch from a dict
grpc_route_route_match_from_dict = GrpcRouteRouteMatch.from_dict(grpc_route_route_match_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# GrpcRouteRouteRule

Describes how to route traffic.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | [**GrpcRouteRouteAction**](GrpcRouteRouteAction.md) |  | [optional] 
**matches** | [**List[GrpcRouteRouteMatch]**](GrpcRouteRouteMatch.md) | Optional. Matches define conditions used for matching the rule against incoming gRPC requests. Each match is independent, i.e. this rule will be matched if ANY one of the matches is satisfied. If no matches field is specified, this rule will unconditionally match traffic. | [optional] 

## Example

```python
from openapi_client.models.grpc_route_route_rule import GrpcRouteRouteRule

# TODO update the JSON string below
json = "{}"
# create an instance of GrpcRouteRouteRule from a JSON string
grpc_route_route_rule_instance = GrpcRouteRouteRule.from_json(json)
# print the JSON string representation of the object
print(GrpcRouteRouteRule.to_json())

# convert the object into a dict
grpc_route_route_rule_dict = grpc_route_route_rule_instance.to_dict()
# create an instance of GrpcRouteRouteRule from a dict
grpc_route_route_rule_from_dict = GrpcRouteRouteRule.from_dict(grpc_route_route_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



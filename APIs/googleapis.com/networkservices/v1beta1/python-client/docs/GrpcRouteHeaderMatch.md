# GrpcRouteHeaderMatch

A match against a collection of headers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | Required. The key of the header. | [optional] 
**type** | **str** | Optional. Specifies how to match against the value of the header. If not specified, a default value of EXACT is used. | [optional] 
**value** | **str** | Required. The value of the header. | [optional] 

## Example

```python
from openapi_client.models.grpc_route_header_match import GrpcRouteHeaderMatch

# TODO update the JSON string below
json = "{}"
# create an instance of GrpcRouteHeaderMatch from a JSON string
grpc_route_header_match_instance = GrpcRouteHeaderMatch.from_json(json)
# print the JSON string representation of the object
print(GrpcRouteHeaderMatch.to_json())

# convert the object into a dict
grpc_route_header_match_dict = grpc_route_header_match_instance.to_dict()
# create an instance of GrpcRouteHeaderMatch from a dict
grpc_route_header_match_from_dict = GrpcRouteHeaderMatch.from_dict(grpc_route_header_match_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



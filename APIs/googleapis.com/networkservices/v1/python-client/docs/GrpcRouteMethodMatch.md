# GrpcRouteMethodMatch

Specifies a match against a method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**case_sensitive** | **bool** | Optional. Specifies that matches are case sensitive. The default value is true. case_sensitive must not be used with a type of REGULAR_EXPRESSION. | [optional] 
**grpc_method** | **str** | Required. Name of the method to match against. If unspecified, will match all methods. | [optional] 
**grpc_service** | **str** | Required. Name of the service to match against. If unspecified, will match all services. | [optional] 
**type** | **str** | Optional. Specifies how to match against the name. If not specified, a default value of \&quot;EXACT\&quot; is used. | [optional] 

## Example

```python
from openapi_client.models.grpc_route_method_match import GrpcRouteMethodMatch

# TODO update the JSON string below
json = "{}"
# create an instance of GrpcRouteMethodMatch from a JSON string
grpc_route_method_match_instance = GrpcRouteMethodMatch.from_json(json)
# print the JSON string representation of the object
print(GrpcRouteMethodMatch.to_json())

# convert the object into a dict
grpc_route_method_match_dict = grpc_route_method_match_instance.to_dict()
# create an instance of GrpcRouteMethodMatch from a dict
grpc_route_method_match_from_dict = GrpcRouteMethodMatch.from_dict(grpc_route_method_match_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



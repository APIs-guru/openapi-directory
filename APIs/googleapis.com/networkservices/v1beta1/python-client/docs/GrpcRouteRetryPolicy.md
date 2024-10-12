# GrpcRouteRetryPolicy

The specifications for retries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**num_retries** | **int** | Specifies the allowed number of retries. This number must be &gt; 0. If not specified, default to 1. | [optional] 
**retry_conditions** | **List[str]** | - connect-failure: Router will retry on failures connecting to Backend Services, for example due to connection timeouts. - refused-stream: Router will retry if the backend service resets the stream with a REFUSED_STREAM error code. This reset type indicates that it is safe to retry. - cancelled: Router will retry if the gRPC status code in the response header is set to cancelled - deadline-exceeded: Router will retry if the gRPC status code in the response header is set to deadline-exceeded - resource-exhausted: Router will retry if the gRPC status code in the response header is set to resource-exhausted - unavailable: Router will retry if the gRPC status code in the response header is set to unavailable | [optional] 

## Example

```python
from openapi_client.models.grpc_route_retry_policy import GrpcRouteRetryPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of GrpcRouteRetryPolicy from a JSON string
grpc_route_retry_policy_instance = GrpcRouteRetryPolicy.from_json(json)
# print the JSON string representation of the object
print(GrpcRouteRetryPolicy.to_json())

# convert the object into a dict
grpc_route_retry_policy_dict = grpc_route_retry_policy_instance.to_dict()
# create an instance of GrpcRouteRetryPolicy from a dict
grpc_route_retry_policy_from_dict = GrpcRouteRetryPolicy.from_dict(grpc_route_retry_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



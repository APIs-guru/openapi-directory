# GoogleCloudNetworksecurityV1GrpcEndpoint

Specification of the GRPC Endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target_uri** | **str** | Required. The target URI of the gRPC endpoint. Only UDS path is supported, and should start with \&quot;unix:\&quot;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_networksecurity_v1_grpc_endpoint import GoogleCloudNetworksecurityV1GrpcEndpoint

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudNetworksecurityV1GrpcEndpoint from a JSON string
google_cloud_networksecurity_v1_grpc_endpoint_instance = GoogleCloudNetworksecurityV1GrpcEndpoint.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudNetworksecurityV1GrpcEndpoint.to_json())

# convert the object into a dict
google_cloud_networksecurity_v1_grpc_endpoint_dict = google_cloud_networksecurity_v1_grpc_endpoint_instance.to_dict()
# create an instance of GoogleCloudNetworksecurityV1GrpcEndpoint from a dict
google_cloud_networksecurity_v1_grpc_endpoint_from_dict = GoogleCloudNetworksecurityV1GrpcEndpoint.from_dict(google_cloud_networksecurity_v1_grpc_endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



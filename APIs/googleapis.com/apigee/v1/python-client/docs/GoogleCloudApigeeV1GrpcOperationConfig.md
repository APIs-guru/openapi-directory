# GoogleCloudApigeeV1GrpcOperationConfig

Binds the resources in a proxy or remote service with the gRPC operation and its associated quota enforcement.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_source** | **str** | Required. Name of the API proxy with which the gRPC operation and quota are associated. | [optional] 
**attributes** | [**List[GoogleCloudApigeeV1Attribute]**](GoogleCloudApigeeV1Attribute.md) | Custom attributes associated with the operation. | [optional] 
**methods** | **List[str]** | List of unqualified gRPC method names for the proxy to which quota will be applied. If this field is empty, the Quota will apply to all operations on the gRPC service defined on the proxy. Example: Given a proxy that is configured to serve com.petstore.PetService, the methods com.petstore.PetService.ListPets and com.petstore.PetService.GetPet would be specified here as simply [\&quot;ListPets\&quot;, \&quot;GetPet\&quot;]. | [optional] 
**quota** | [**GoogleCloudApigeeV1Quota**](GoogleCloudApigeeV1Quota.md) |  | [optional] 
**service** | **str** | Required. gRPC Service name associated to be associated with the API proxy, on which quota rules can be applied upon. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_grpc_operation_config import GoogleCloudApigeeV1GrpcOperationConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1GrpcOperationConfig from a JSON string
google_cloud_apigee_v1_grpc_operation_config_instance = GoogleCloudApigeeV1GrpcOperationConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1GrpcOperationConfig.to_json())

# convert the object into a dict
google_cloud_apigee_v1_grpc_operation_config_dict = google_cloud_apigee_v1_grpc_operation_config_instance.to_dict()
# create an instance of GoogleCloudApigeeV1GrpcOperationConfig from a dict
google_cloud_apigee_v1_grpc_operation_config_from_dict = GoogleCloudApigeeV1GrpcOperationConfig.from_dict(google_cloud_apigee_v1_grpc_operation_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



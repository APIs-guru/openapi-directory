# GoogleCloudApigeeV1GrpcOperationGroup

List of gRPC operation configuration details associated with Apigee API proxies.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation_configs** | [**List[GoogleCloudApigeeV1GrpcOperationConfig]**](GoogleCloudApigeeV1GrpcOperationConfig.md) | Required. List of operation configurations for either Apigee API proxies that are associated with this API product. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_grpc_operation_group import GoogleCloudApigeeV1GrpcOperationGroup

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1GrpcOperationGroup from a JSON string
google_cloud_apigee_v1_grpc_operation_group_instance = GoogleCloudApigeeV1GrpcOperationGroup.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1GrpcOperationGroup.to_json())

# convert the object into a dict
google_cloud_apigee_v1_grpc_operation_group_dict = google_cloud_apigee_v1_grpc_operation_group_instance.to_dict()
# create an instance of GoogleCloudApigeeV1GrpcOperationGroup from a dict
google_cloud_apigee_v1_grpc_operation_group_from_dict = GoogleCloudApigeeV1GrpcOperationGroup.from_dict(google_cloud_apigee_v1_grpc_operation_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# GoogleCloudApigeeV1OperationConfig

Binds the resources in an API proxy or remote service with the allowed REST methods and associated quota enforcement.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_source** | **str** | Required. Name of the API proxy or remote service with which the resources, methods, and quota are associated. | [optional] 
**attributes** | [**List[GoogleCloudApigeeV1Attribute]**](GoogleCloudApigeeV1Attribute.md) | Custom attributes associated with the operation. | [optional] 
**operations** | [**List[GoogleCloudApigeeV1Operation]**](GoogleCloudApigeeV1Operation.md) | List of resource/method pairs for the API proxy or remote service to which quota will applied. **Note**: Currently, you can specify only a single resource/method pair. The call will fail if more than one resource/method pair is provided. | [optional] 
**quota** | [**GoogleCloudApigeeV1Quota**](GoogleCloudApigeeV1Quota.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_operation_config import GoogleCloudApigeeV1OperationConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1OperationConfig from a JSON string
google_cloud_apigee_v1_operation_config_instance = GoogleCloudApigeeV1OperationConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1OperationConfig.to_json())

# convert the object into a dict
google_cloud_apigee_v1_operation_config_dict = google_cloud_apigee_v1_operation_config_instance.to_dict()
# create an instance of GoogleCloudApigeeV1OperationConfig from a dict
google_cloud_apigee_v1_operation_config_from_dict = GoogleCloudApigeeV1OperationConfig.from_dict(google_cloud_apigee_v1_operation_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



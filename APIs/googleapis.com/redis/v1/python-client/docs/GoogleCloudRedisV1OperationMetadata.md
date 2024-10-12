# GoogleCloudRedisV1OperationMetadata

Represents the v1 metadata of the long-running operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_version** | **str** | API version. | [optional] 
**cancel_requested** | **bool** | Specifies if cancellation was requested for the operation. | [optional] 
**create_time** | **str** | Creation timestamp. | [optional] 
**end_time** | **str** | End timestamp. | [optional] 
**status_detail** | **str** | Operation status details. | [optional] 
**target** | **str** | Operation target. | [optional] 
**verb** | **str** | Operation verb. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_redis_v1_operation_metadata import GoogleCloudRedisV1OperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRedisV1OperationMetadata from a JSON string
google_cloud_redis_v1_operation_metadata_instance = GoogleCloudRedisV1OperationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRedisV1OperationMetadata.to_json())

# convert the object into a dict
google_cloud_redis_v1_operation_metadata_dict = google_cloud_redis_v1_operation_metadata_instance.to_dict()
# create an instance of GoogleCloudRedisV1OperationMetadata from a dict
google_cloud_redis_v1_operation_metadata_from_dict = GoogleCloudRedisV1OperationMetadata.from_dict(google_cloud_redis_v1_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



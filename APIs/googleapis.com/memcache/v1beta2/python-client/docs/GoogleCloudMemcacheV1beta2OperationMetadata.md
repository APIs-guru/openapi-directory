# GoogleCloudMemcacheV1beta2OperationMetadata

Represents the metadata of a long-running operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_version** | **str** | Output only. API version used to start the operation. | [optional] [readonly] 
**cancel_requested** | **bool** | Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to &#x60;Code.CANCELLED&#x60;. | [optional] [readonly] 
**create_time** | **str** | Output only. Time when the operation was created. | [optional] [readonly] 
**end_time** | **str** | Output only. Time when the operation finished running. | [optional] [readonly] 
**status_detail** | **str** | Output only. Human-readable status of the operation, if any. | [optional] [readonly] 
**target** | **str** | Output only. Server-defined resource path for the target of the operation. | [optional] [readonly] 
**verb** | **str** | Output only. Name of the verb executed by the operation. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_memcache_v1beta2_operation_metadata import GoogleCloudMemcacheV1beta2OperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMemcacheV1beta2OperationMetadata from a JSON string
google_cloud_memcache_v1beta2_operation_metadata_instance = GoogleCloudMemcacheV1beta2OperationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMemcacheV1beta2OperationMetadata.to_json())

# convert the object into a dict
google_cloud_memcache_v1beta2_operation_metadata_dict = google_cloud_memcache_v1beta2_operation_metadata_instance.to_dict()
# create an instance of GoogleCloudMemcacheV1beta2OperationMetadata from a dict
google_cloud_memcache_v1beta2_operation_metadata_from_dict = GoogleCloudMemcacheV1beta2OperationMetadata.from_dict(google_cloud_memcache_v1beta2_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# GoogleCloudAiplatformV1GenericOperationMetadata

Generic Metadata shared by all operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Time when the operation was created. | [optional] [readonly] 
**partial_failures** | [**List[GoogleRpcStatus]**](GoogleRpcStatus.md) | Output only. Partial failures encountered. E.g. single files that couldn&#39;t be read. This field should never exceed 20 entries. Status details field will contain standard Google Cloud error details. | [optional] [readonly] 
**update_time** | **str** | Output only. Time when the operation was updated for the last time. If the operation has finished (successfully or not), this is the finish time. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_generic_operation_metadata import GoogleCloudAiplatformV1GenericOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1GenericOperationMetadata from a JSON string
google_cloud_aiplatform_v1_generic_operation_metadata_instance = GoogleCloudAiplatformV1GenericOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1GenericOperationMetadata.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_generic_operation_metadata_dict = google_cloud_aiplatform_v1_generic_operation_metadata_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1GenericOperationMetadata from a dict
google_cloud_aiplatform_v1_generic_operation_metadata_from_dict = GoogleCloudAiplatformV1GenericOperationMetadata.from_dict(google_cloud_aiplatform_v1_generic_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



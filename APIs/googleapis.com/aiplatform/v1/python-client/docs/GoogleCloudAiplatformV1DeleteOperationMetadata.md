# GoogleCloudAiplatformV1DeleteOperationMetadata

Details of operations that perform deletes of any entities.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**generic_metadata** | [**GoogleCloudAiplatformV1GenericOperationMetadata**](GoogleCloudAiplatformV1GenericOperationMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_delete_operation_metadata import GoogleCloudAiplatformV1DeleteOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1DeleteOperationMetadata from a JSON string
google_cloud_aiplatform_v1_delete_operation_metadata_instance = GoogleCloudAiplatformV1DeleteOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1DeleteOperationMetadata.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_delete_operation_metadata_dict = google_cloud_aiplatform_v1_delete_operation_metadata_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1DeleteOperationMetadata from a dict
google_cloud_aiplatform_v1_delete_operation_metadata_from_dict = GoogleCloudAiplatformV1DeleteOperationMetadata.from_dict(google_cloud_aiplatform_v1_delete_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



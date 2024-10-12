# GoogleCloudAiplatformV1beta1UpdateSpecialistPoolOperationMetadata

Runtime operation metadata for SpecialistPoolService.UpdateSpecialistPool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**generic_metadata** | [**GoogleCloudAiplatformV1beta1GenericOperationMetadata**](GoogleCloudAiplatformV1beta1GenericOperationMetadata.md) |  | [optional] 
**specialist_pool** | **str** | Output only. The name of the SpecialistPool to which the specialists are being added. Format: &#x60;projects/{project_id}/locations/{location_id}/specialistPools/{specialist_pool}&#x60; | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_update_specialist_pool_operation_metadata import GoogleCloudAiplatformV1beta1UpdateSpecialistPoolOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1UpdateSpecialistPoolOperationMetadata from a JSON string
google_cloud_aiplatform_v1beta1_update_specialist_pool_operation_metadata_instance = GoogleCloudAiplatformV1beta1UpdateSpecialistPoolOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1UpdateSpecialistPoolOperationMetadata.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_update_specialist_pool_operation_metadata_dict = google_cloud_aiplatform_v1beta1_update_specialist_pool_operation_metadata_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1UpdateSpecialistPoolOperationMetadata from a dict
google_cloud_aiplatform_v1beta1_update_specialist_pool_operation_metadata_from_dict = GoogleCloudAiplatformV1beta1UpdateSpecialistPoolOperationMetadata.from_dict(google_cloud_aiplatform_v1beta1_update_specialist_pool_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



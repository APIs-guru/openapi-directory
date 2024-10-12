# GoogleCloudAiplatformV1beta1ExportModelOperationMetadataOutputInfo

Further describes the output of the ExportModel. Supplements ExportModelRequest.OutputConfig.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifact_output_uri** | **str** | Output only. If the Model artifact is being exported to Google Cloud Storage this is the full path of the directory created, into which the Model files are being written to. | [optional] [readonly] 
**image_output_uri** | **str** | Output only. If the Model image is being exported to Google Container Registry or Artifact Registry this is the full path of the image created. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_export_model_operation_metadata_output_info import GoogleCloudAiplatformV1beta1ExportModelOperationMetadataOutputInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ExportModelOperationMetadataOutputInfo from a JSON string
google_cloud_aiplatform_v1beta1_export_model_operation_metadata_output_info_instance = GoogleCloudAiplatformV1beta1ExportModelOperationMetadataOutputInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ExportModelOperationMetadataOutputInfo.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_export_model_operation_metadata_output_info_dict = google_cloud_aiplatform_v1beta1_export_model_operation_metadata_output_info_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ExportModelOperationMetadataOutputInfo from a dict
google_cloud_aiplatform_v1beta1_export_model_operation_metadata_output_info_from_dict = GoogleCloudAiplatformV1beta1ExportModelOperationMetadataOutputInfo.from_dict(google_cloud_aiplatform_v1beta1_export_model_operation_metadata_output_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



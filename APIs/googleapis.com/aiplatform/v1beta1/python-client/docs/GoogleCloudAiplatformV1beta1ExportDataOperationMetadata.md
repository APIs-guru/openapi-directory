# GoogleCloudAiplatformV1beta1ExportDataOperationMetadata

Runtime operation information for DatasetService.ExportData.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_output_directory** | **str** | A Google Cloud Storage directory which path ends with &#39;/&#39;. The exported data is stored in the directory. | [optional] 
**generic_metadata** | [**GoogleCloudAiplatformV1beta1GenericOperationMetadata**](GoogleCloudAiplatformV1beta1GenericOperationMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_export_data_operation_metadata import GoogleCloudAiplatformV1beta1ExportDataOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ExportDataOperationMetadata from a JSON string
google_cloud_aiplatform_v1beta1_export_data_operation_metadata_instance = GoogleCloudAiplatformV1beta1ExportDataOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ExportDataOperationMetadata.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_export_data_operation_metadata_dict = google_cloud_aiplatform_v1beta1_export_data_operation_metadata_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ExportDataOperationMetadata from a dict
google_cloud_aiplatform_v1beta1_export_data_operation_metadata_from_dict = GoogleCloudAiplatformV1beta1ExportDataOperationMetadata.from_dict(google_cloud_aiplatform_v1beta1_export_data_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



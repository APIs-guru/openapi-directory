# GoogleCloudDatalabelingV1p1alpha1ExportDataOperationMetadata

Metadata of an ExportData operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotated_dataset** | **str** | Output only. The name of annotated dataset in format \&quot;projects/*/datasets/*/annotatedDatasets/*\&quot;. | [optional] 
**create_time** | **str** | Output only. Timestamp when export dataset request was created. | [optional] 
**dataset** | **str** | Output only. The name of dataset to be exported. \&quot;projects/*/datasets/*\&quot; | [optional] 
**partial_failures** | [**List[GoogleRpcStatus]**](GoogleRpcStatus.md) | Output only. Partial failures encountered. E.g. single files that couldn&#39;t be read. Status details field will contain standard GCP error details. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1p1alpha1_export_data_operation_metadata import GoogleCloudDatalabelingV1p1alpha1ExportDataOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1p1alpha1ExportDataOperationMetadata from a JSON string
google_cloud_datalabeling_v1p1alpha1_export_data_operation_metadata_instance = GoogleCloudDatalabelingV1p1alpha1ExportDataOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1p1alpha1ExportDataOperationMetadata.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1p1alpha1_export_data_operation_metadata_dict = google_cloud_datalabeling_v1p1alpha1_export_data_operation_metadata_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1p1alpha1ExportDataOperationMetadata from a dict
google_cloud_datalabeling_v1p1alpha1_export_data_operation_metadata_from_dict = GoogleCloudDatalabelingV1p1alpha1ExportDataOperationMetadata.from_dict(google_cloud_datalabeling_v1p1alpha1_export_data_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



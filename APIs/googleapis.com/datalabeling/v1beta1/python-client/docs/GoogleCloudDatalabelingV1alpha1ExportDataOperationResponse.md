# GoogleCloudDatalabelingV1alpha1ExportDataOperationResponse

Response used for ExportDataset longrunning operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotated_dataset** | **str** | Output only. The name of annotated dataset in format \&quot;projects/*/datasets/*/annotatedDatasets/*\&quot;. | [optional] 
**dataset** | **str** | Ouptut only. The name of dataset. \&quot;projects/*/datasets/*\&quot; | [optional] 
**export_count** | **int** | Output only. Number of examples exported successfully. | [optional] 
**label_stats** | [**GoogleCloudDatalabelingV1alpha1LabelStats**](GoogleCloudDatalabelingV1alpha1LabelStats.md) |  | [optional] 
**output_config** | [**GoogleCloudDatalabelingV1alpha1OutputConfig**](GoogleCloudDatalabelingV1alpha1OutputConfig.md) |  | [optional] 
**total_count** | **int** | Output only. Total number of examples requested to export | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1alpha1_export_data_operation_response import GoogleCloudDatalabelingV1alpha1ExportDataOperationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1alpha1ExportDataOperationResponse from a JSON string
google_cloud_datalabeling_v1alpha1_export_data_operation_response_instance = GoogleCloudDatalabelingV1alpha1ExportDataOperationResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1alpha1ExportDataOperationResponse.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1alpha1_export_data_operation_response_dict = google_cloud_datalabeling_v1alpha1_export_data_operation_response_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1alpha1ExportDataOperationResponse from a dict
google_cloud_datalabeling_v1alpha1_export_data_operation_response_from_dict = GoogleCloudDatalabelingV1alpha1ExportDataOperationResponse.from_dict(google_cloud_datalabeling_v1alpha1_export_data_operation_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



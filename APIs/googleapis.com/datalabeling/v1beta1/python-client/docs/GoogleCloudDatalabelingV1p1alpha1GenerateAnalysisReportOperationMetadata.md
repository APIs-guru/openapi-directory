# GoogleCloudDatalabelingV1p1alpha1GenerateAnalysisReportOperationMetadata

Metadata of an GenerateAnalysisReport operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Timestamp when generate report request was created. | [optional] 
**dataset** | **str** | The name of the dataset for which the analysis report is generated. Format: \&quot;projects/*/datasets/*\&quot; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1p1alpha1_generate_analysis_report_operation_metadata import GoogleCloudDatalabelingV1p1alpha1GenerateAnalysisReportOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1p1alpha1GenerateAnalysisReportOperationMetadata from a JSON string
google_cloud_datalabeling_v1p1alpha1_generate_analysis_report_operation_metadata_instance = GoogleCloudDatalabelingV1p1alpha1GenerateAnalysisReportOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1p1alpha1GenerateAnalysisReportOperationMetadata.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1p1alpha1_generate_analysis_report_operation_metadata_dict = google_cloud_datalabeling_v1p1alpha1_generate_analysis_report_operation_metadata_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1p1alpha1GenerateAnalysisReportOperationMetadata from a dict
google_cloud_datalabeling_v1p1alpha1_generate_analysis_report_operation_metadata_from_dict = GoogleCloudDatalabelingV1p1alpha1GenerateAnalysisReportOperationMetadata.from_dict(google_cloud_datalabeling_v1p1alpha1_generate_analysis_report_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



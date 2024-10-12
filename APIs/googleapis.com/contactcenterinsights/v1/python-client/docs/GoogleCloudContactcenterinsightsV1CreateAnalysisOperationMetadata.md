# GoogleCloudContactcenterinsightsV1CreateAnalysisOperationMetadata

Metadata for a create analysis operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotator_selector** | [**GoogleCloudContactcenterinsightsV1AnnotatorSelector**](GoogleCloudContactcenterinsightsV1AnnotatorSelector.md) |  | [optional] 
**conversation** | **str** | Output only. The Conversation that this Analysis Operation belongs to. | [optional] [readonly] 
**create_time** | **str** | Output only. The time the operation was created. | [optional] [readonly] 
**end_time** | **str** | Output only. The time the operation finished running. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1_create_analysis_operation_metadata import GoogleCloudContactcenterinsightsV1CreateAnalysisOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1CreateAnalysisOperationMetadata from a JSON string
google_cloud_contactcenterinsights_v1_create_analysis_operation_metadata_instance = GoogleCloudContactcenterinsightsV1CreateAnalysisOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1CreateAnalysisOperationMetadata.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1_create_analysis_operation_metadata_dict = google_cloud_contactcenterinsights_v1_create_analysis_operation_metadata_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1CreateAnalysisOperationMetadata from a dict
google_cloud_contactcenterinsights_v1_create_analysis_operation_metadata_from_dict = GoogleCloudContactcenterinsightsV1CreateAnalysisOperationMetadata.from_dict(google_cloud_contactcenterinsights_v1_create_analysis_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



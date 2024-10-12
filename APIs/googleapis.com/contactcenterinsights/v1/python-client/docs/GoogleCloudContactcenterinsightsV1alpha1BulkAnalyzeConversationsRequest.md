# GoogleCloudContactcenterinsightsV1alpha1BulkAnalyzeConversationsRequest

The request to analyze conversations in bulk.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analysis_percentage** | **float** | Required. Percentage of selected conversation to analyze, between [0, 100]. | [optional] 
**annotator_selector** | [**GoogleCloudContactcenterinsightsV1alpha1AnnotatorSelector**](GoogleCloudContactcenterinsightsV1alpha1AnnotatorSelector.md) |  | [optional] 
**filter** | **str** | Required. Filter used to select the subset of conversations to analyze. | [optional] 
**parent** | **str** | Required. The parent resource to create analyses in. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1alpha1_bulk_analyze_conversations_request import GoogleCloudContactcenterinsightsV1alpha1BulkAnalyzeConversationsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1alpha1BulkAnalyzeConversationsRequest from a JSON string
google_cloud_contactcenterinsights_v1alpha1_bulk_analyze_conversations_request_instance = GoogleCloudContactcenterinsightsV1alpha1BulkAnalyzeConversationsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1alpha1BulkAnalyzeConversationsRequest.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1alpha1_bulk_analyze_conversations_request_dict = google_cloud_contactcenterinsights_v1alpha1_bulk_analyze_conversations_request_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1alpha1BulkAnalyzeConversationsRequest from a dict
google_cloud_contactcenterinsights_v1alpha1_bulk_analyze_conversations_request_from_dict = GoogleCloudContactcenterinsightsV1alpha1BulkAnalyzeConversationsRequest.from_dict(google_cloud_contactcenterinsights_v1alpha1_bulk_analyze_conversations_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



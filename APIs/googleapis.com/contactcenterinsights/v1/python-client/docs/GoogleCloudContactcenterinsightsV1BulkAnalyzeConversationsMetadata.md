# GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsMetadata

The metadata for a bulk analyze conversations operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**completed_analyses_count** | **int** | The number of requested analyses that have completed successfully so far. | [optional] 
**create_time** | **str** | The time the operation was created. | [optional] 
**end_time** | **str** | The time the operation finished running. | [optional] 
**failed_analyses_count** | **int** | The number of requested analyses that have failed so far. | [optional] 
**partial_errors** | [**List[GoogleRpcStatus]**](GoogleRpcStatus.md) | Output only. Partial errors during bulk analyze operation that might cause the operation output to be incomplete. | [optional] [readonly] 
**request** | [**GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest**](GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest.md) |  | [optional] 
**total_requested_analyses_count** | **int** | Total number of analyses requested. Computed by the number of conversations returned by &#x60;filter&#x60; multiplied by &#x60;analysis_percentage&#x60; in the request. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1_bulk_analyze_conversations_metadata import GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsMetadata from a JSON string
google_cloud_contactcenterinsights_v1_bulk_analyze_conversations_metadata_instance = GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsMetadata.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1_bulk_analyze_conversations_metadata_dict = google_cloud_contactcenterinsights_v1_bulk_analyze_conversations_metadata_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsMetadata from a dict
google_cloud_contactcenterinsights_v1_bulk_analyze_conversations_metadata_from_dict = GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsMetadata.from_dict(google_cloud_contactcenterinsights_v1_bulk_analyze_conversations_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



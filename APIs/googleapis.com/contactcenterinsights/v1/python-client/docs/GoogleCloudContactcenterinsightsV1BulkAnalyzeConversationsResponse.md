# GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsResponse

The response for a bulk analyze conversations operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failed_analysis_count** | **int** | Count of failed analyses. | [optional] 
**successful_analysis_count** | **int** | Count of successful analyses. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1_bulk_analyze_conversations_response import GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsResponse from a JSON string
google_cloud_contactcenterinsights_v1_bulk_analyze_conversations_response_instance = GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsResponse.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1_bulk_analyze_conversations_response_dict = google_cloud_contactcenterinsights_v1_bulk_analyze_conversations_response_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsResponse from a dict
google_cloud_contactcenterinsights_v1_bulk_analyze_conversations_response_from_dict = GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsResponse.from_dict(google_cloud_contactcenterinsights_v1_bulk_analyze_conversations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



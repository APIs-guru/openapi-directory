# GoogleCloudContactcenterinsightsV1BulkDeleteConversationsRequest

The request to delete conversations in bulk.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | **str** | Filter used to select the subset of conversations to delete. | [optional] 
**force** | **bool** | If set to true, all of this conversation&#39;s analyses will also be deleted. Otherwise, the request will only succeed if the conversation has no analyses. | [optional] 
**max_delete_count** | **int** | Maximum number of conversations to delete. | [optional] 
**parent** | **str** | Required. The parent resource to delete conversations from. Format: projects/{project}/locations/{location} | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1_bulk_delete_conversations_request import GoogleCloudContactcenterinsightsV1BulkDeleteConversationsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1BulkDeleteConversationsRequest from a JSON string
google_cloud_contactcenterinsights_v1_bulk_delete_conversations_request_instance = GoogleCloudContactcenterinsightsV1BulkDeleteConversationsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1BulkDeleteConversationsRequest.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1_bulk_delete_conversations_request_dict = google_cloud_contactcenterinsights_v1_bulk_delete_conversations_request_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1BulkDeleteConversationsRequest from a dict
google_cloud_contactcenterinsights_v1_bulk_delete_conversations_request_from_dict = GoogleCloudContactcenterinsightsV1BulkDeleteConversationsRequest.from_dict(google_cloud_contactcenterinsights_v1_bulk_delete_conversations_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



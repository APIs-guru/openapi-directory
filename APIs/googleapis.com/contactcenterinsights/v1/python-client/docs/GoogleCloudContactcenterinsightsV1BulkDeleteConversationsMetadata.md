# GoogleCloudContactcenterinsightsV1BulkDeleteConversationsMetadata

The metadata for a bulk delete conversations operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | The time the operation was created. | [optional] 
**end_time** | **str** | The time the operation finished running. | [optional] 
**partial_errors** | [**List[GoogleRpcStatus]**](GoogleRpcStatus.md) | Partial errors during bulk delete conversations operation that might cause the operation output to be incomplete. | [optional] 
**request** | [**GoogleCloudContactcenterinsightsV1BulkDeleteConversationsRequest**](GoogleCloudContactcenterinsightsV1BulkDeleteConversationsRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1_bulk_delete_conversations_metadata import GoogleCloudContactcenterinsightsV1BulkDeleteConversationsMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1BulkDeleteConversationsMetadata from a JSON string
google_cloud_contactcenterinsights_v1_bulk_delete_conversations_metadata_instance = GoogleCloudContactcenterinsightsV1BulkDeleteConversationsMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1BulkDeleteConversationsMetadata.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1_bulk_delete_conversations_metadata_dict = google_cloud_contactcenterinsights_v1_bulk_delete_conversations_metadata_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1BulkDeleteConversationsMetadata from a dict
google_cloud_contactcenterinsights_v1_bulk_delete_conversations_metadata_from_dict = GoogleCloudContactcenterinsightsV1BulkDeleteConversationsMetadata.from_dict(google_cloud_contactcenterinsights_v1_bulk_delete_conversations_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# GoogleCloudDiscoveryengineV1alphaPurgeDocumentsMetadata

Metadata related to the progress of the PurgeDocuments operation. This will be returned by the google.longrunning.Operation.metadata field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Operation create time. | [optional] 
**failure_count** | **str** | Count of entries that encountered errors while processing. | [optional] 
**ignored_count** | **str** | Count of entries that were ignored as entries were not found. | [optional] 
**success_count** | **str** | Count of entries that were deleted successfully. | [optional] 
**update_time** | **str** | Operation last update time. If the operation is done, this is also the finish time. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_purge_documents_metadata import GoogleCloudDiscoveryengineV1alphaPurgeDocumentsMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaPurgeDocumentsMetadata from a JSON string
google_cloud_discoveryengine_v1alpha_purge_documents_metadata_instance = GoogleCloudDiscoveryengineV1alphaPurgeDocumentsMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaPurgeDocumentsMetadata.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_purge_documents_metadata_dict = google_cloud_discoveryengine_v1alpha_purge_documents_metadata_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaPurgeDocumentsMetadata from a dict
google_cloud_discoveryengine_v1alpha_purge_documents_metadata_from_dict = GoogleCloudDiscoveryengineV1alphaPurgeDocumentsMetadata.from_dict(google_cloud_discoveryengine_v1alpha_purge_documents_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


